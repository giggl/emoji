import React, {useCallback, useMemo} from 'react';
import {styled, theme} from './stitches';
import {Emoji} from './emojis';
import {PropsFor, Coords} from './types';
import {useUpdateAtom} from 'jotai/utils';
import {atoms} from './state';

const SHEET_ROWS = 60;
const SHEET_COLS = 60;
const SHEET_EMOJI_SIZE = 64;

const multiplyX = 100 / (SHEET_ROWS - 1);
const multiplyY = 100 / (SHEET_COLS - 1);

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
});

const ImageContainer = styled('div', {
	height: theme.sizes.SEARCH_HEIGHT,
	width: theme.sizes.SEARCH_HEIGHT,
	pointerEvents: 'none',
});

const spriteSheet = `https://unpkg.com/emoji-datasource-twitter@7.0.2/img/twitter/sheets-clean/${SHEET_EMOJI_SIZE}.png`;

export interface Props {
	emoji: Emoji;
	coords: Coords;
}

/**
 * Emoji grid cell
 * @param props
 */
export const Cell = (props: Props & Pick<PropsFor<'div'>, 'style'>) => {
	const setter = useUpdateAtom(atoms.location);
	const [x, y] = props.coords;

	const style = useMemo(() => {
		return {
			background: `url(${spriteSheet})`,
			backgroundPosition: `${multiplyX * props.emoji.sheet_x}% ${
				multiplyY * props.emoji.sheet_y
			}%`,
			backgroundRepeat: 'no-repeat',
			backgroundSize: `${100 * SHEET_COLS}% ${100 * SHEET_ROWS}%`,
		};
	}, [x, y]);

	const update = useCallback(() => setter([x, y]), [x, y]);

	return (
		<StyledCell
			onMouseEnter={update}
			data-coords={`${x}:${y}`}
			style={props.style}
		>
			<ImageContainer style={style} />
		</StyledCell>
	);
};

export const activeStyledCell = {
	borderRadius: theme.radii.sm,
	transform: 'scale(0.95)',
	background: theme.colors.textMuted,
	color: theme.colors.textPrimary,
};
