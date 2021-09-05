import {styled} from 'goober';
import {EMOJI_DIMENSION} from '../constants';

export const EmojiCell = styled('button')({
	width: `${EMOJI_DIMENSION}px`,
	height: `${EMOJI_DIMENSION}px`,
	display: 'inline-flex',
	fontSize: '1.4em',
	justifyContent: 'center',
	alignItems: 'center',
	background: 'transparent',
	cursor: 'pointer',
	border: 'none',
	borderRadius: '5px',
	marginTop: `${EMOJI_DIMENSION}px`,
	transition: 'all 0.15s',
	willChange: 'transform',

	'&:hover': {
		background: 'rgba(255, 255, 255, 0.1)',
		transform: 'scale(0.9)',
	},

	'&:active': {
		background: 'rgba(255, 255, 255, 0.2)',
	},
});
