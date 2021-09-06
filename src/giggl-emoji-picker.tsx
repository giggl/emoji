import React, {createElement as h, HTMLAttributes, ReactChild} from 'react';
import {CSSAttribute, setup, styled} from 'goober';
import {chunk, enforceInferType} from './utils/types';
import {EmojiListItem, emojis} from './types';
import {useInputFilter} from 'use-input-filter';
import {FixedSizeGrid} from 'react-window';
import {Input} from './components/input';
import {
	DEFAULT_ROWS_COUNT,
	CONTAINER_PADDING,
	containerBoundsCalculator,
	EMOJI_DIMENSION,
	DEFAULT_COLUMNS_COUNT,
} from './constants';
import {EmojiCell} from './components/emoji-cell';

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

export const GigglEmojiPicker = (props: Props) => {
	const {state, setState, filtered} = useInputFilter((item, state) => {
		const trimmed = state.trim().toLowerCase();

		if (trimmed === '') {
			return true;
		}

		return (item.name + item.short_names.join(',') + item.short_name + item.category)
			.toLowerCase()
			.includes(trimmed);
	}, emojis);

	const chunked = chunk(filtered, props.columns ?? DEFAULT_COLUMNS_COUNT);

	const containerColsWidth =
		containerBoundsCalculator.padding +
		containerBoundsCalculator.width(props.columns ?? DEFAULT_COLUMNS_COUNT);

	const containerRowsHeight =
		containerBoundsCalculator.padding +
		containerBoundsCalculator.height(props.rows ?? DEFAULT_ROWS_COUNT);

	return (
		<StyledContainer
			containerTheme={{
				...props.style,
				// Set the bounds to be dynamic from the amount
				// of columns set. Allows for runtime defaults
				width: `${containerColsWidth}px`,
			}}
		>
			<RelativeWrapper>
				<Input
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

						const codes = emoji.unified.split('-').map(char => parseInt(char, 16));

						return (
							<EmojiCell
								key={emoji.name}
								type="button"
								style={virtualProps.style}
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
	HTMLAttributes<HTMLDivElement> & {
		containerTheme?: Partial<CSSAttribute>;
	}
>(props => {
	// Pull containerTheme out because we don't want to apply it as a DOM property
	const {containerTheme, ...rest} = props;
	return <div {...rest} />;
})(props => ({
	...defaultContainerTheme,
	...props.containerTheme,
}));
