import React, {useMemo} from 'react';
import {parse} from 'twemoji-parser';
import {styled, theme} from './stitches';
import {useCell} from './hooks';
import {usePicker} from './context';
import {Emoji} from './emojis';

export const StyledCell = styled('button', {
	'display': 'inline-block',
	'width': theme.sizes.EMOJI_SIZE,
	'height': theme.sizes.EMOJI_SIZE,
	'background': 'transparent',
	'border': 'none',
	'borderRadius': theme.radii.md,
	'transition': 'all 0.5s',
	'cursor': 'pointer',
	'color': theme.colors.textTertiary,

	'> span img': {
		width: 30,
		height: 30,
	},

	'variants': {
		type: {
			active: {
				borderRadius: theme.radii.lg,
				transform: 'scale(0.95)',
				background: theme.colors.bgSecondary,
				color: theme.colors.textPrimary,
			},
			inactive: {},
		},
	},
});

export interface Props {
	index: number;
	emoji: Emoji;
}

/**
 * Emoji grid cell
 * @param props
 */
export function Cell(props: Props) {
	const picker = usePicker();
	const [ref, active] = useCell();

	const click = () => {
		picker(props.emoji);
	};

	const char = useMemo(() => parse(props.emoji.char), [props.emoji.char]);

	return (
		<StyledCell type={active ? 'active' : 'inactive'} ref={ref} onClick={click}>
			{JSON.stringify(char)}
		</StyledCell>
	);
}
