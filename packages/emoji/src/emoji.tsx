import React from 'react';
import {FixedSizeGrid} from 'react-window';
import {Container} from './container';
import {OnPick} from './types';
import {PickerProvider} from './context';
import {Cell} from './cell';
import {EmojiRow, emojis} from './emojis';
import {chunk} from '@giggl/utils';

export interface EmojiProps
	extends React.DetailedHTMLProps<
		React.HTMLAttributes<HTMLDivElement>,
		HTMLDivElement
	> {
	/**
	 * Picker function. Please wrap in useCallback if defined inside a component to avoid unnecessary rerenders!
	 */
	onPick: OnPick;
}

const columns = 5;
const chunked = chunk(emojis, columns) as EmojiRow[];

export function EmojiPicker(props: EmojiProps) {
	// TODO: these

	return (
		<PickerProvider picker={props.onPick}>
			<Container>
				<FixedSizeGrid<EmojiRow[]>
					columnWidth={40}
					rowHeight={40}
					rowCount={6}
					columnCount={400}
					height={200}
					width={200}
					itemData={chunked}
					children={Cell}
				/>
			</Container>
		</PickerProvider>
	);
}

export {getCssText} from './stitches';
