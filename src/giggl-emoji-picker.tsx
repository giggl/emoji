import React, {createElement as h, CSSProperties, HTMLAttributes, ReactChild} from 'react';
import {setup, styled} from 'goober';
import emojis from './emoji.json';
import {chunk, enforceInferType} from './utils/types';
import {EmojiListItem} from './types';
import {useInputFilter} from 'use-input-filter';
import {FixedSizeGrid} from 'react-window';

setup(h);

const EMOJI_DIMENSION = 40;
const GRID_WIDTH = 6;
const CONTAINER_HEIGHT = 400;

const defaultContainerTheme = enforceInferType<CSSProperties>()({
	background: '#202023',
	color: '#cccccc',
	width: '250px',
	borderRadius: '10px',
	overflow: 'hidden',
	overflowY: 'auto',
	padding: '5px',
	boxSizing: 'border-box',
	border: '1px solid #49494a',
});

export type ContainerTheme = typeof defaultContainerTheme;

export interface Props extends HTMLAttributes<HTMLDivElement> {
	children?: ReactChild;
	style?: Partial<ContainerTheme>;
	onPick: (item: string) => unknown;
	debug?: boolean;
}

export const GigglEmojiPicker = (props: Props) => {
	const {state, setState, filtered} = useInputFilter((item, state) => {
		const trimmed = state.trim().toLowerCase();

		if (trimmed === '') {
			return true;
		}

		return (item.name + item.short_name + item.category).toLowerCase().includes(trimmed);
	}, emojis as EmojiListItem[]);

	const chunked = chunk(filtered, GRID_WIDTH);

	return (
		<StyledContainer containerTheme={props.style}>
			<Input
				type="text"
				value={state}
				onChange={e => {
					setState(e.target.value);
				}}
			/>

			<FixedSizeGrid
				columnCount={GRID_WIDTH}
				columnWidth={EMOJI_DIMENSION}
				height={CONTAINER_HEIGHT}
				rowCount={chunked.length}
				rowHeight={EMOJI_DIMENSION}
				width={GRID_WIDTH * EMOJI_DIMENSION}
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
		</StyledContainer>
	);
};

const Input = styled('input')({
	display: 'block',
	position: 'sticky',
	top: 0,
	width: '100%',
	background: 'black',
	border: 'none',
	padding: '3px 5px',
	borderRadius: '5px',
	color: 'white',
	boxSizing: 'border-box',
});

const EmojiCell = styled('button')({
	width: `${EMOJI_DIMENSION}px`,
	height: `${EMOJI_DIMENSION}px`,
	display: 'inline-flex',
	fontSize: '1.4em',
	justifyContent: 'center',
	alignItems: 'center',
	background: 'transparent',
	cursor: 'pointer',
	border: 'none',
	borderRadius: '5px',

	'&:hover': {
		background: 'rgba(255, 255, 255, 0.1)',
	},

	'&:active': {
		background: 'rgba(255, 255, 255, 0.2)',
	},
});

const StyledContainer = styled<
	HTMLAttributes<HTMLDivElement> & {containerTheme?: Partial<ContainerTheme>}
>(props => {
	const {containerTheme, ...rest} = props;
	return <div {...rest} />;
})(props => ({
	...defaultContainerTheme,
	...props.containerTheme,
}));
