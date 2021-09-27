import {styled} from 'goober';
import {forwardRef} from 'react';

export const CategoryScroller = styled(
	'div',
	forwardRef,
)({
	'display': 'flex',
	'overflowX': 'auto',

	'> button': {
		marginRight: '10px',
		background: 'transparent',
		border: 'none',
		display: 'inline',
		width: '35px',
		fontSize: '2em',
		cursor: 'pointer',
	},
});
