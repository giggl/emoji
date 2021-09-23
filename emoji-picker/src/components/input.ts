import {styled} from 'goober';
import {forwardRef} from 'react';

export const Input = styled(
	'input',
	forwardRef,
)({
	display: 'block',
	position: 'absolute',
	zIndex: 10,
	width: '100%',
	backdropFilter: 'blur(8px)',
	background: 'rgba(77,77,80, 0.8)',
	border: 'none',
	height: '34px',
	padding: '0 10px',
	borderRadius: '5px',
	color: 'white',
	boxSizing: 'border-box',

	'&:focus': {
		outline: 'none',
	},
});