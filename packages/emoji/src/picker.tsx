import React, {Fragment} from 'react';
import {OnPick} from './types';
import {PickerProvider} from './context';
import {Emoji, emojis} from './emojis';
import {chunk} from './util';

import * as Scroller from './container';
import {Cell} from './cell';
import {Category} from './category';

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
const categories = emojis.reduce<Map<string, Emoji[]>>((map, emoji) => {
	const existing = map.get(emoji.category) ?? [];
	map.set(emoji.category, [...existing, emoji]);
	return map;
}, new Map());

export const EmojiPicker = (props: EmojiProps) => (
	<PickerProvider picker={props.onPick}>
		<Scroller.Container>
			<Scroller.Scrollbar orientation="vertical">
				<Scroller.Thumb />
			</Scroller.Scrollbar>
			<Scroller.Corner />
			<Scroller.Viewport>
				{[...categories.entries()].map(entry => {
					const [name, items] = entry;

					const chunked = chunk(items, columns);

					return (
						<Fragment key={name}>
							<Category>{name}</Category>
							{chunked.map((row, rowIdx) => (
								<Fragment key={name}>
									{row.map((emoji, colIdx) => (
										<Cell
											key={emoji.codes}
											emoji={emoji}
											indicies={[colIdx, rowIdx]}
										/>
									))}
								</Fragment>
							))}
						</Fragment>
					);
				})}

				{/* <FixedSizeGrid<EmojiRow[]> */}
				{/*	columnWidth={emojiSize} */}
				{/*	rowHeight={emojiSize} */}
				{/*	rowCount={6} */}
				{/*	columnCount={400} */}
				{/*	height={200} */}
				{/*	width={200} */}
				{/*	itemData={chunked} */}
				{/*	children={Cell} */}
				{/* /> */}
			</Scroller.Viewport>
		</Scroller.Container>
	</PickerProvider>
);

export {getCssText} from './stitches';
