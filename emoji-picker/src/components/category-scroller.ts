import {styled} from 'goober';
import {forwardRef} from 'react';

export const CategoryScroller = styled(
	'div',
	forwardRef,
)({
	'display': 'flex',
	'overflowX': 'auto',

	'> span': {
		display: 'inline',
		minWidth: '100px',
	},
});
