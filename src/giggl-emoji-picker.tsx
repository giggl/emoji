import React, {createElement as h, HTMLAttributes, ReactChild, useMemo, useState} from 'react';
import {CSSAttribute, setup, styled} from 'goober';
import {chunk, enforceInferType} from './utils/types';
import {EmojiListItem, emojis} from './types';
import {FixedSizeGrid} from 'react-window';
import {Input} from './components/input';
import {useInputFilter} from './utils/hook';
import {
	DEFAULT_ROWS_COUNT,
	CONTAINER_PADDING,
	containerBoundsCalculator,
	EMOJI_DIMENSION,
	DEFAULT_COLUMNS_COUNT,
} from './constants';
import {EmojiCell} from './components/emoji-cell';
import {useHotkeys} from 'react-hotkeys-hook';

setup(h);

const defaultContainerTheme = enforceInferType<CSSAttribute>()({
	background: '#202023',
	color: '#cccccc',
	borderRadius: '10px',
	overflow: 'hidden',
	overflowY: 'auto',
	padding: `${CONTAINER_PADDING}px`,
	boxSizing: 'border-box',
	border: '1px solid #49494a',
});

export type ContainerTheme = typeof defaultContainerTheme;

const CATEGORY_MAP = new Map<string, EmojiListItem[]>();

emojis.forEach(emoji => {
	const existing = CATEGORY_MAP.get(emoji.category) ?? [];
	CATEGORY_MAP.set(emoji.category, [...existing, emoji]);
});

export interface Props extends HTMLAttributes<HTMLDivElement> {
	/**
	 * Idk why this is here i dont think we need this
	 */
	children?: ReactChild;
	/**
	 * CSS to pass to the main container. A better api will be worked upon for this eventually
	 * @experimental
	 */
	style?: Partial<ContainerTheme>;
	/**
	 * Callback for when a user selectes an emoji
	 */
	onPick: (item: string) => unknown;
	/**
	 * If we should show/render/log debug messages
	 * @experimental
	 */
	debug?: boolean;
	/**
	 * The amount of columns to render
	 */
	columns?: number;
	/**
	 * The amount of rows to render
	 */
	rows?: number;
}

enum Direction {
	LEFT,
	RIGHT,
	UP,
	DOWN,
}

export const GigglEmojiPicker = (props: Props) => {
	const [[x, y], setLocation] = useState<[number, number]>([-1, -1]);

	const directionFactory = (direction: Direction) => () => {
		setLocation(([x, y]) => {
			switch (direction) {
				case Direction.UP:
					return [x, y - 1];
				case Direction.DOWN:
					return [x, y + 1];
				case Direction.LEFT:
					return [x - 1, y];
				case Direction.RIGHT:
					return [x + 1, y];
				default:
					return [x, y];
			}
		});
	};

	useHotkeys('Up', directionFactory(Direction.UP), {enableOnTags: ['INPUT']});
	useHotkeys('Down', directionFactory(Direction.DOWN), {enableOnTags: ['INPUT']});
	useHotkeys('Left', directionFactory(Direction.LEFT), {enableOnTags: ['INPUT']});
	useHotkeys('Right', directionFactory(Direction.RIGHT), {enableOnTags: ['INPUT']});

	const {state, setState, filtered} = useInputFilter((item, state) => {
		const trimmed = state.trim().toLowerCase();

		if (trimmed === '') {
			return true;
		}

		return (item.name + item.short_names.join(',') + item.short_name + item.category)
			.toLowerCase()
			.includes(trimmed);
	}, emojis);

	const chunked = useMemo(
		// Chunk the emojis into individual rows with defined column width
		() => chunk(filtered, props.columns ?? DEFAULT_COLUMNS_COUNT),
		[props.columns, filtered],
	);

	// Calculate the width of the container against the amount of columns being rendered
	const containerColsWidth =
		containerBoundsCalculator.padding +
		containerBoundsCalculator.width(props.columns ?? DEFAULT_COLUMNS_COUNT);

	// Calculate the height of the container against the amount of rows being rendered
	const containerRowsHeight =
		containerBoundsCalculator.padding +
		containerBoundsCalculator.height(props.rows ?? DEFAULT_ROWS_COUNT);

	return (
		<StyledContainer
			containerTheme={{
				...props.style,
				// Set the bounds to be dynamic from the amountx
				// of columns set. Allows for runtime defaults
				width: `${containerColsWidth}px`,
			}}
		>
			{props.debug && (
				<>
					{x}
					{y}
				</>
			)}
			<RelativeWrapper>
				<Input
					aria-autocomplete="none"
					autoComplete="off"
					placeholder="🧭 Search..."
					type="text"
					value={state}
					onChange={e => {
						setState(e.target.value);
					}}
				/>

				<FixedSizeGrid
					columnCount={props.columns ?? DEFAULT_COLUMNS_COUNT}
					columnWidth={EMOJI_DIMENSION}
					height={containerRowsHeight}
					rowCount={chunked.length}
					rowHeight={EMOJI_DIMENSION}
					width={(props.columns ?? DEFAULT_COLUMNS_COUNT) * EMOJI_DIMENSION}
				>
					{virtualProps => {
						const emoji = chunked[virtualProps.rowIndex][virtualProps.columnIndex];

						if (!emoji) {
							return null;
						}

						const isRowSelected = virtualProps.rowIndex === y;
						const isColumnSelected = virtualProps.columnIndex === x;
						const isKeyboardSelected = isRowSelected && isColumnSelected;

						const codes = emoji.unified.split('-').map(char => parseInt(char, 16));

						return (
							<EmojiCell
								key={emoji.name}
								type="button"
								style={{
									...virtualProps.style,
									backgroundColor: isKeyboardSelected ? 'red' : 'inherit',
								}}
								onClick={() => {
									props.onPick(emoji.name);
								}}
							>
								{String.fromCodePoint(...codes)}
							</EmojiCell>
						);
					}}
				</FixedSizeGrid>
			</RelativeWrapper>
		</StyledContainer>
	);
};

const RelativeWrapper = styled('div')({position: 'relative'});

const StyledContainer = styled<
	HTMLAttributes<HTMLDivElement> & {containerTheme?: Partial<CSSAttribute>}
>(props => {
	// Pull containerTheme out because we don't want to apply it as a DOM property
	const {containerTheme, ...rest} = props;
	return <div {...rest} />;
})(props => ({
	...defaultContainerTheme,
	...props.containerTheme,
}));
