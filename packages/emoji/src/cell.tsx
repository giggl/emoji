import React from 'react';
import {styled, theme} from './stitches';
import {Emoji} from './emojis';
import {PropsFor} from './types';

const SHEET_ROWS = 60;
const SHEET_COLS = 60;
const SHEET_EMOJI_SIZE = 64;

export const StyledCell = styled('button', {
	'display': 'inline-block',
	'background': 'transparent',
	'border': 'none',
	'borderRadius': theme.radii.md,
	'cursor': 'pointer',
	'color': theme.colors.textTertiary,
	'boxSizing': 'border-box',

	'> span img': {
		width: 30,
		height: 30,
	},

	'&:hover': {
		borderRadius: theme.radii.sm,
		transform: 'scale(0.95)',
		background: theme.colors.textMuted,
		color: theme.colors.textPrimary,
	},
});

const spriteSheet = `https://unpkg.com/emoji-datasource-twitter@7.0.2/img/twitter/sheets-clean/${SHEET_EMOJI_SIZE}.png`;

export interface Props {
	emoji: Emoji;
}

/**
 * Emoji grid cell
 * @param props
 */
export const Cell = (props: Props & Pick<PropsFor<'div'>, 'style'>) => {
	const multiplyX = 100 / (SHEET_ROWS - 1);
	const multiplyY = 100 / (SHEET_COLS - 1);

	return (
		<StyledCell
			style={{
				...props.style,
				background: `url(${spriteSheet})`,
				backgroundPosition: `${multiplyX * props.emoji.sheet_x}% ${
					multiplyY * props.emoji.sheet_y
				}%`,
				backgroundRepeat: 'no-repeat',
				backgroundSize: `${100 * SHEET_COLS}% ${100 * SHEET_ROWS}%`,
			}}
		/>
	);
};
