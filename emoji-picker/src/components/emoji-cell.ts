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
	willChange: 'transform',
	outline: 'none',

	'&:focus': {
		background: 'rgba(255, 255, 255, 0.2)',
	},
});
