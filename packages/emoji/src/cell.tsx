import React, {useMemo} from 'react';
import {parse} from 'twemoji-parser';
import {styled, theme} from './stitches';
import {useCell} from './hooks';
import {usePicker} from './context';
import {Emoji} from './emojis';
import {Coords, PropsFor} from './types';

export const StyledCell = styled('button', {
	'display': 'inline-block',
	'width': theme.sizes.EMOJI_SIZE,
	'height': theme.sizes.EMOJI_SIZE,
	'background': 'transparent',
	'border': 'none',
	'borderRadius': theme.radii.md,
	'cursor': 'pointer',
	'color': theme.colors.textTertiary,
	'willChange': 'transform',

	'> span img': {
		width: 30,
		height: 30,
	},

	'variants': {
		type: {
			active: {
				borderRadius: theme.radii.sm,
				transform: 'scale(0.95)',
				background: theme.colors.textMuted,
				color: theme.colors.textPrimary,
			},
		},
	},
});

export interface Props {
	indicies: Coords;
	emoji: Emoji;
}

/**
 * Emoji grid cell
 * @param props
 */
export const Cell = (props: Props & Pick<PropsFor<'div'>, 'style'>) => {
	const picker = usePicker();
	const [ref, active] = useCell(props.indicies);

	const click = () => {
		picker(props.emoji);
	};

	const emoji = useMemo(() => parse(props.emoji.char), [props.emoji.char]);

	if (!emoji[0]) {
		return null;
	}

	return (
		<StyledCell
			ref={ref}
			type={active ? 'active' : undefined}
			style={props.style}
			onClick={click}
		>
			<img src={emoji[0].url} alt={emoji[0].text} loading="lazy" />
		</StyledCell>
	);
};
