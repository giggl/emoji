import React from 'react';
import {FixedSizeGrid} from 'react-window';
import {Container} from './container';
import {OnPick} from './types';
import {PickerProvider} from './context';
import {Cell} from './cell';
import {EmojiRow} from './emojis';

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

export function EmojiPicker(props: EmojiProps) {
	// TODO: these
	// const columns = 5;
	// const rows = 6;

	return (
		<PickerProvider picker={props.onPick}>
			<Container>
				<FixedSizeGrid<EmojiRow[]>
					columnWidth={40}
					rowHeight={40}
					columnCount={400}
					height={200}
					rowCount={200}
					width={200}
					itemData={[]}
					children={Cell}
				/>
			</Container>
		</PickerProvider>
	);
}

export {getCssText} from './stitches';
