import React, {createElement as h, CSSProperties, HTMLAttributes, ReactChild, useRef} from 'react';
import {setup, styled} from 'goober';
import {useVirtual} from 'react-virtual';
import emojis from './emoji.json';
import {enforceInferType} from './utils/types';
import {EmojiListItem} from './types';
import {useInputFilter} from 'use-input-filter';

// Goober requires it idk
// ask goober not me i did not make goober
// guys
setup(h);

const CONTAINER_HEIGHT = '400px';
const EMOJI_DIMENSION = 40 as number;

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
	const parentRef = useRef<HTMLDivElement | null>(null);
	const {state, setState, filtered} = useInputFilter((item, state) => {
		const trimmed = state.trim().toLowerCase();

		if (trimmed === '') {
			return true;
		}

		return (item.name + item.short_name + item.category).toLowerCase().includes(trimmed);
	}, emojis as EmojiListItem[]);

	const rowVirtualizer = useVirtual({
		parentRef,
		size: filtered.length,
		keyExtractor: idx => filtered[idx].name,
		overscan: 100,
	});

	const {virtualItems, ...rest} = rowVirtualizer;

	if (props.debug) {
		console.log('[GIGGL EMOJI PICKER]', rest);
	}

	return (
		<StyledContainer containerTheme={props.style}>
			{props.debug && (
				<div style={{position: 'fixed', top: 20, left: 20, background: 'black'}}>
					{JSON.stringify(rest)}
				</div>
			)}

			<Input
				type="text"
				value={state}
				onChange={e => {
					setState(e.target.value);
				}}
			/>

			<EmojiGrid ref={parentRef}>
				{rowVirtualizer.virtualItems.map(item => {
					const emoji = filtered[item.index];
					const codes = emoji.unified.split('-').map(char => parseInt(char, 16));

					return (
						<EmojiCell ref={item.measureRef} key={item.index}>
							{String.fromCodePoint(...codes)}
						</EmojiCell>
					);
				})}
			</EmojiGrid>
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

const EmojiCell = styled('div')({
	width: `${EMOJI_DIMENSION}px`,
	height: `${EMOJI_DIMENSION}px`,
	display: 'inline-block',
	fontSize: '1.4em',
});

const EmojiGrid = styled('div')({
	display: 'grid',
	gridTemplateColumns: 'repeat(6, 1fr)',
	height: CONTAINER_HEIGHT,
});

const StyledContainer = styled('div')<{containerTheme?: Partial<ContainerTheme>}>(props => ({
	...defaultContainerTheme,
	...props.containerTheme,
}));
