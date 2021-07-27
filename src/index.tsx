import React, {HTMLAttributes, ReactChild} from 'react';
import {styled} from 'goober';

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

export const GigglEmojiPicker = (props: Props) => (
	<StyledContainer containerTheme={props.theme}>{props.children}</StyledContainer>
);

const StyledContainer = styled('div')<{containerTheme?: Partial<ContainerTheme>}>(props => ({
	...defaultContainerTheme,
	...props.containerTheme,
	borderRadius: '20px',
}));
