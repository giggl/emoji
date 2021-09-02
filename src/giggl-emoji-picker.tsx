import React, {HTMLAttributes, ReactChild, useRef, createElement as h} from 'react';
import {styled, setup} from 'goober';
import {useVirtual} from 'react-virtual';
import emojis from './emoji.json';

setup(h);

const defaultContainerTheme = {
	background: '#161214',
	color: '#cccccc',
	width: '250px',
	height: '400px',
	borderRadius: '20px',
};

export type ContainerTheme = typeof defaultContainerTheme;

export interface Props extends HTMLAttributes<HTMLDivElement> {
	children?: ReactChild;
	theme?: Partial<ContainerTheme>;
	onPick: (item: string) => unknown;
}

export const GigglEmojiPicker = (props: Props) => {
	const parentRef = useRef<HTMLDivElement | null>(null);

	const rowVirtualizer = useVirtual({
		size: emojis.length,
		parentRef,
	});

	return (
		<StyledContainer containerTheme={props.theme}>
			<div ref={parentRef}>
				{rowVirtualizer.virtualItems.map(item => (
					<div key={item.index}>{JSON.stringify(emojis[item.index])}</div>
				))}
			</div>
		</StyledContainer>
	);
};

const StyledContainer = styled('div')<{containerTheme?: Partial<ContainerTheme>}>(props => ({
	...defaultContainerTheme,
	...props.containerTheme,
}));
