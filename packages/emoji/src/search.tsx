import {styled, theme} from './stitches';

export const Search = styled('input', {
	'height': theme.sizes.SEARCH_HEIGHT,
	'display': 'block',
	'width': '100%',
	'position': 'sticky',
	'top': 0,
	'zIndex': 2,
	'background': theme.colors.bgSecondary,
	'border': 'none',
	'borderBottom': `1px solid ${theme.colors.bgSecondary.toString()}`,
	'outine': 'none',
	'color': 'white',
	'px': 10,
	'fontFamily': theme.fonts.inter,
	'boxSizing': 'border-box',

	'&:focus': {
		outline: 'none',
		background: theme.colors.bgPrimary,
	},
});
