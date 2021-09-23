import {styled} from 'goober';
import {forwardRef} from 'react';
import {EMOJI_DIMENSION} from '../constants';

export const EmojiCell = styled(
	'button',
	forwardRef,
)({
	width: `${EMOJI_DIMENSION}px`,
	height: `${EMOJI_DIMENSION}px`,
	display: 'inline-flex',
	fontSize: '1.4em',
	justifyContent: 'center',
	alignItems: 'center',
	background: 'transparent',
	cursor: 'pointer',
	border: '2px solid transparent',
	borderRadius: '5px',
	marginTop: `${EMOJI_DIMENSION}px`,
	transition: 'all 0.15s',
	willChange: 'transform',
	outline: 'none',

	'&:focus': {
		border: '2px solid gray',
		background: 'rgba(255, 255, 255, 0.1)',
	},

	'&:hover': {
		background: 'rgba(255, 255, 255, 0.1)',
		transform: 'scale(0.9)',
	},

	'&:active': {
		background: 'rgba(255, 255, 255, 0.2)',
	},
});
