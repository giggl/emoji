import React, {Fragment} from 'react';
import {OnPick} from './types';
import {PickerProvider} from './context';
import {EmojiRow, emojis} from './emojis';
import {chunk} from './util';

import * as Scroller from './container';
import {Cell} from './cell';

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
			<Scroller.Container>
				<Scroller.Scrollbar orientation="vertical">
					<Scroller.Thumb />
				</Scroller.Scrollbar>
				<Scroller.Corner />
				<Scroller.Viewport>
					{chunked.map((row, columnIndex) => {
						return (
							<Fragment key={columnIndex}>
								{row.map((emoji, rowIndex) => {
									if (!emoji) {
										return null;
									}

									return (
										<Cell
											key={emoji.char}
											col={columnIndex}
											row={rowIndex}
											emoji={emoji}
										/>
									);
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
				</Scroller.Viewport>
			</Scroller.Container>
		</PickerProvider>
	);
}

export {getCssText} from './stitches';
