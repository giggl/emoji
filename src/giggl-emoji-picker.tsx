import React, {HTMLAttributes, ReactChild, useCallback, useRef, createElement as h} from 'react';
import {styled, setup} from 'goober';
import {useVirtual} from 'react-virtual';
import emojis from './emoji.json';

setup(h);

interface ContainerTheme {
	background: string;
	color: string;
	width: string;
	height: string;
}

const defaultContainerTheme: ContainerTheme = {
	background: '#161214',
	color: '#cccccc',
	width: '250px',
	height: '400px',
};

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
		overscan: 0,
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
	borderRadius: '20px',
}));
