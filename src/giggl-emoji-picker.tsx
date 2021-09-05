import React, {createElement as h, HTMLAttributes, ReactChild} from 'react';
import {CSSAttribute, setup, styled} from 'goober';
import emojis from './emoji.json';
import {chunk, enforceInferType} from './utils/types';
import {EmojiListItem} from './types';
import {useInputFilter} from 'use-input-filter';
import {FixedSizeGrid} from 'react-window';
import {Input} from './components/input';
import {
	CONTAINER_HEIGHT,
	CONTAINER_PADDING,
	containerWidthCalculator,
	EMOJI_DIMENSION,
	GRID_WIDTH,
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

export interface Props extends HTMLAttributes<HTMLDivElement> {
	children?: ReactChild;
	style?: Partial<ContainerTheme>;
	onPick: (item: string) => unknown;
	debug?: boolean;

	columns?: number;
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
	}, emojis as EmojiListItem[]);

	const chunked = chunk(filtered, props.columns ?? GRID_WIDTH);

	const containerColsWidth =
		containerWidthCalculator.padding + containerWidthCalculator.width(props.columns ?? GRID_WIDTH);

	return (
		<StyledContainer
			containerTheme={{
				...props.style,
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
					columnCount={props.columns ?? GRID_WIDTH}
					columnWidth={EMOJI_DIMENSION}
					height={CONTAINER_HEIGHT}
					rowCount={chunked.length}
					rowHeight={EMOJI_DIMENSION}
					width={(props.columns ?? GRID_WIDTH) * EMOJI_DIMENSION}
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
