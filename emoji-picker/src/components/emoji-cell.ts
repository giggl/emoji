import {styled} from 'goober';
import {forwardRef, createElement, ButtonHTMLAttributes} from 'react';
import {MutableRefObject} from 'react-dom/node_modules/@types/react';
import {EMOJI_DIMENSION} from '../constants';

export const EmojiCell = styled<
	{active: boolean} & ButtonHTMLAttributes<HTMLButtonElement> & {
			ref: MutableRefObject<HTMLButtonElement | null>;
		}
>(
	({active, ref, ...props}) => createElement('button', {...props, type: 'button'}),
	forwardRef,
)(props => ({
	'width': `${EMOJI_DIMENSION}px`,
	'height': `${EMOJI_DIMENSION}px`,
	'boxSizing': 'border-box',
	'display': 'inline-flex',
	'fontSize': '1.4em',
	'justifyContent': 'center',
	'alignItems': 'center',
	'background': 'transparent',
	'cursor': 'pointer',
	'border': `2px solid ${props.active ? '#ccccc0f' : 'transparent'}`,
	'borderRadius': '5px',
	'marginTop': `${EMOJI_DIMENSION}px`,
	'willChange': 'transform',
	'outline': 'none',

	'&:focus': {
		background: 'rgba(255, 255, 255, 0.2)',
	},
}));
