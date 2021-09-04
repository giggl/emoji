import React, {createElement as h, HTMLAttributes, ReactChild} from 'react';
import {setup, styled, CSSAttribute} from 'goober';
import emojis from './emoji.json';
import {chunk, enforceInferType} from './utils/types';
import {EmojiListItem} from './types';
import {useInputFilter} from 'use-input-filter';
import {FixedSizeGrid} from 'react-window';

setup(h);

const EMOJI_DIMENSION = 40;
const GRID_WIDTH = 6;
const CONTAINER_PADDING = 10;
const COLUMN_COUNT = 7;

// Prettier removes the parens around the last expr
// prettier-ignore
const CONTAINER_HEIGHT = EMOJI_DIMENSION + (EMOJI_DIMENSION * COLUMN_COUNT);

const containerWidthSetting = {
	padding: CONTAINER_PADDING * 2,
	width: (cols: number) => EMOJI_DIMENSION * cols,
};

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

		return (item.name + item.short_name + item.category).toLowerCase().includes(trimmed);
	}, emojis as EmojiListItem[]);

	const chunked = chunk(filtered, props.columns ?? GRID_WIDTH);

	const containerColsWidth =
		containerWidthSetting.padding + containerWidthSetting.width(props.columns ?? GRID_WIDTH);

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

const RelativeWrapper = styled('div')({
	position: 'relative',
});

const Input = styled('input')({
	display: 'block',
	position: 'absolute',
	zIndex: 2,
	width: '100%',
	backdropFilter: 'blur(8px)',
	background: 'rgba(77,77,80, 0.8)',
	border: 'none',
	height: '34px',
	padding: '0 10px',
	borderRadius: '5px',
	color: 'white',
	boxSizing: 'border-box',

	'&:focus': {
		outline: 'none',
	},
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
	marginTop: `${EMOJI_DIMENSION}px`,

	'&:hover': {
		background: 'rgba(255, 255, 255, 0.1)',
	},

	'&:active': {
		background: 'rgba(255, 255, 255, 0.2)',
	},
});

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
