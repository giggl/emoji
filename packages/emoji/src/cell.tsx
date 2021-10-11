import React from 'react';
import {styled} from '@stitches/react';
import {GridChildComponentProps} from 'react-window';
import {useIsActiveCell} from './hooks';
import {usePicker} from './context';
import {Emoji} from './emojis';

export const StyledCell = styled('button', {
	//
});

export function Cell(props: GridChildComponentProps<Emoji[][]>) {
	const [active, loc] = useIsActiveCell(props);
	const picker = usePicker();

	const click = () => {
		if (!loc) {
			return;
		}

		const [x, y] = loc;
		const emoji = props.data[x]?.[y] ?? null;

		if (!emoji) {
			// TODO: We should handle this somehow
			return;
		}

		picker(emoji);
	};

	return (
		<StyledCell onClick={click} style={props.style}>
			{active ? 'Y' : 'N'}
		</StyledCell>
	);
}
