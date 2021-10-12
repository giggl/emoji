import React from 'react';
import {styled} from '@stitches/react';
import {useSellState} from './hooks';
import {usePicker} from './context';
import {Emoji} from './emojis';
import {theme} from './stitches';

export const StyledCell = styled('button', {
	display: 'inline-block',
	size: theme.sizes.EMOJI_SIZE,
	background: 'transparent',
	border: 'none',
	br: theme.radii.md,
	transition: 'all 0.5s',
	cursor: 'pointer',
	color: theme.colors.textTertiary,

	variants: {
		type: {
			active: {
				br: theme.radii.lg,
				transform: 'scale(0.95)',
				background: theme.colors.bgSecondary,
				color: theme.colors.textPrimary,
			},
			inactive: {},
		},
	},
});

export interface Props {
	col: number;
	row: number;
	emoji: Emoji;
}

/**
 * Emoji grid cell
 * @param props
 */
export function Cell(props: Props) {
	const [active, , set] = useSellState(props);
	const picker = usePicker();

	const click = () => {
		// if (!loc) {
		// 	return;
		// }
		//
		// const [x, y] = loc;
		// const emoji = props.data[x]?.[y];
		//
		// if (!emoji) {
		// 	// We should handle this somehow
		// 	return;
		// }

		picker(props.emoji);
	};

	return (
		<StyledCell
			type={active ? 'active' : 'inactive'}
			onMouseOver={set}
			onClick={click}
		>
			{active ? 'Y' : 'N'}
		</StyledCell>
	);
}
