import React, {createElement as h, CSSProperties, HTMLAttributes, ReactChild} from 'react';
import {setup, styled} from 'goober';
import emojis from './emoji.json';
import {enforceInferType} from './utils/types';
import {EmojiListItem} from './types';
import {useInputFilter} from 'use-input-filter';
import {FixedSizeList as List} from 'react-window';

setup(h);

const EMOJI_DIMENSION = 40;

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

	return (
		<StyledContainer containerTheme={props.style}>
			<Input
				type="text"
				value={state}
				onChange={e => {
					setState(e.target.value);
				}}
			/>

			<List height={EMOJI_DIMENSION} itemSize={20} itemCount={20} width={200}>
				{props => {
					const emoji = filtered[props.index];
					const codes = emoji.unified.split('-').map(char => parseInt(char, 16));
					return <EmojiCell key={emoji.name}>{String.fromCodePoint(...codes)}</EmojiCell>;
				}}
			</List>
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

const StyledContainer = styled<
	HTMLAttributes<HTMLDivElement> & {containerTheme?: Partial<ContainerTheme>}
>(props => {
	const {containerTheme, ...rest} = props;
	return <div {...rest} />;
})(props => ({
	...defaultContainerTheme,
	...props.containerTheme,
}));
