import React from 'react';
import {styled, theme} from './stitches';

interface Props {
	children: string;
}

export const StyledCategory = styled('div', {
	fontSize: theme.fontSizes.xs,
	height: theme.sizes.CATEGORY_HEIGHT,
	width: '100%',
	letterSpacing: '0.1em',
	textTransform: 'uppercase',
	opacity: 0.5,
	background: 'rgba(0, 0 ,0 , 0.5)',
	display: 'flex',
	alignItems: 'center',
	pl: '4px',
});

export const Category = (props: Props) => (
	<StyledCategory>{props.children}</StyledCategory>
);
