import {styled, theme} from './stitches';

export const Category = styled('div', {
	fontSize: theme.fontSizes.xs,
	height: theme.sizes.CATEGORY_HEIGHT,
	width: '100%',
	letterSpacing: '0.1em',
	textTransform: 'uppercase',
	opacity: 0.5,
	background: 'rgba(0, 0 ,0 , 0.5)',
	display: 'flex',
	alignItems: 'center',
	px: '10px',
	boxSizing: 'border-box',
});
