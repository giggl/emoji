import React, {
	createElement as h,
	HTMLAttributes,
	ReactChild,
	useMemo,
	useState,
	useRef,
	useEffect,
} from 'react';
import {CSSAttribute, setup, styled} from 'goober';
import {chunk, enforceInferType, getCategoryURL} from './utils/types';
import {EmojiListItem, emojis} from './emojis';
import {FixedSizeGrid, GridChildComponentProps} from 'react-window';
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
import {CategoryScroller} from './components/category-scroller';

// Note: hotkeys-js is a dependency of react-hotkeys-hook
// so it's safe to import the type here
import type {KeyHandler} from 'hotkeys-js';

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
	float: 'left',
});

export type ContainerTheme = typeof defaultContainerTheme;

const CATEGORY_MAP = new Map<EmojiListItem['category'], EmojiListItem[]>();

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

const enum Direction {
	LEFT,
	RIGHT,
	UP,
	DOWN,
}

export const GigglEmojiPicker = (props: Props) => {
	const [[x, y], setLocation] = useState<[number, number]>([0, 0]);

	const {state, setState, filtered} = useInputFilter((emoji, state) => {
		const trimmed = state.trim().toLowerCase();

		if (trimmed === '') {
			return true;
		}

		return (emoji.name + emoji.short_name + emoji.category).toLowerCase().includes(trimmed);
	}, emojis);

	const chunked = useMemo(
		// Chunk the emojis into individual rows with defined column width
		() => chunk(filtered, props.columns ?? DEFAULT_COLUMNS_COUNT),

		// Safe to use filtered.length
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[props.columns, filtered.length],
	);

	useEffect(() => {
		setLocation([0, 0]);
	}, [filtered.length]);

	// Calculate the width of the container against the amount of columns being rendered
	const containerColsWidth =
		containerBoundsCalculator.padding +
		containerBoundsCalculator.width(props.columns ?? DEFAULT_COLUMNS_COUNT);

	// Calculate the height of the container against the amount of rows being rendered
	const containerRowsHeight =
		containerBoundsCalculator.padding +
		containerBoundsCalculator.height(props.rows ?? DEFAULT_ROWS_COUNT);

	const directionFactory =
		(direction: Direction): KeyHandler =>
		e => {
			e.stopPropagation();

			setLocation(([x, y]) => {
				let result = [x, y] as [number, number];

				switch (direction) {
					case Direction.UP: {
						result = [x, Math.max(y - 1, 0)];
						break;
					}

					case Direction.DOWN: {
						result = [x, Math.min(y + 1, chunked.length)];
						break;
					}

					case Direction.LEFT: {
						result = [Math.max(x - 1, 0), y];
						break;
					}

					case Direction.RIGHT: {
						result = [Math.min(x + 1, (props.columns ?? DEFAULT_COLUMNS_COUNT) - 1), y];
						break;
					}

					default:
						break;
				}

				const [resultX, resultY] = result;
				const emojiExistsAtLocation = Boolean(chunked[resultY]?.[resultX]);

				if (!emojiExistsAtLocation) {
					return [x, y];
				}

				return result;
			});
		};

	const listRef = useRef<FixedSizeGrid | null>(null);
	const inputRef = useRef<HTMLInputElement | null>(null);

	useHotkeys('Up', directionFactory(Direction.UP), {enableOnTags: ['INPUT']});
	useHotkeys('Down', directionFactory(Direction.DOWN), {enableOnTags: ['INPUT']});
	useHotkeys('Left', directionFactory(Direction.LEFT), {enableOnTags: ['INPUT']});
	useHotkeys('Right', directionFactory(Direction.RIGHT), {enableOnTags: ['INPUT']});
	useHotkeys(
		'Enter',
		() => {
			const emoji = chunked[y]?.[x];

			if (!emoji) {
				return;
			}

			console.log(emoji);
		},
		{enableOnTags: ['INPUT']},
	);

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
					{x},{y}
				</>
			)}
			<RelativeWrapper>
				<CategoryScroller>
					{[...CATEGORY_MAP.keys()].map(key => (
						<button
							key={key}
							title={key}
							type="button"
							onClick={() => {
								const row = chunked.find(row => row.find(emoji => emoji.category === key));

								if (!row) {
									return;
								}

								const rowIndex = chunked.indexOf(row);

								listRef.current?.scrollTo({
									scrollTop: rowIndex * EMOJI_DIMENSION,
								});
							}}
						>
							{getCategoryURL(key as 'Symbols')}
						</button>
					))}
				</CategoryScroller>
				<Input
					ref={inputRef}
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
					ref={listRef}
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

						return (
							<EmojiCellChild
								key={emoji.name}
								emoji={emoji}
								setLocation={setLocation}
								onPick={props.onPick}
								{...virtualProps}
							/>
						);
					}}
				</FixedSizeGrid>
			</RelativeWrapper>
		</StyledContainer>
	);
};

function EmojiCellChild(
	props: React.PropsWithChildren<GridChildComponentProps<unknown>> & {
		emoji: EmojiListItem;
		setLocation: React.Dispatch<React.SetStateAction<[number, number]>>;
	} & Pick<Props, 'onPick'>,
) {
	const {emoji, onPick, setLocation, ...virtualProps} = props;

	const codes = emoji.unified.split('-').map(char => parseInt(char, 16));
	const ref = useRef<HTMLButtonElement | null>(null);

	return (
		<EmojiCell
			ref={ref}
			key={emoji.name}
			type="button"
			title={emoji.short_name}
			style={virtualProps.style}
			onMouseEnter={() => {
				setLocation([virtualProps.columnIndex, virtualProps.rowIndex]);
				ref.current?.focus();
			}}
			onClick={() => {
				onPick(emoji.name);
			}}
		>
			{String.fromCodePoint(...codes)}
		</EmojiCell>
	);
}

const RelativeWrapper = styled('div')({
	position: 'relative',
});

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
