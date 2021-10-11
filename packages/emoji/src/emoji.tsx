import React, {Fragment} from 'react';
import * as Root from './root';
import {OnPick} from './types';
import {PickerProvider} from './context';
import {EmojiRow, emojis} from './emojis';
import {chunk} from './util';

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
	return (
		<PickerProvider picker={props.onPick}>
			<Root.Root>
				<Root.Scrollbar orientation="vertical">
					<Root.Thumb />
				</Root.Scrollbar>
				<Root.Corner />
				<Root.Viewport>
					{chunked.map((item, index) => {
						return (
							<Fragment key={index}>
								{item.map(row => {
									if (!row) {
										return null;
									}

									return <div>{row.char}</div>;
								})}
							</Fragment>
						);
					})}
					{/*<FixedSizeGrid<EmojiRow[]>*/}
					{/*	columnWidth={emojiSize}*/}
					{/*	rowHeight={emojiSize}*/}
					{/*	rowCount={6}*/}
					{/*	columnCount={400}*/}
					{/*	height={200}*/}
					{/*	width={200}*/}
					{/*	itemData={chunked}*/}
					{/*	children={Cell}*/}
					{/*/>*/}
				</Root.Viewport>
			</Root.Root>
		</PickerProvider>
	);
}

export {getCssText} from './stitches';
