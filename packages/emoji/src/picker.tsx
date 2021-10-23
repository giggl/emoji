import React, {Fragment} from 'react';
import * as Scroller from './container';
import {OnPick, ParsedCategory} from './types';
import {PickerProvider} from './context';
import {emojis} from './emojis';
import {chunk} from './util';
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
const categories = emojis.reduce<Map<string, ParsedCategory>>((map, emoji) => {
	const existing = map.get(emoji.group);

	const merged = existing ? [...existing.emojis, emoji] : [emoji];

	const category: ParsedCategory = {
		name: emoji.group,
		id: emoji.group,
		emojis: merged,
	};

	return map.set(emoji.group, category);
}, new Map());

export const EmojiPicker = (props: EmojiProps) => (
	<PickerProvider picker={props.onPick}>
		<Scroller.Container>
			<Scroller.Scrollbar orientation="vertical">
				<Scroller.Thumb />
			</Scroller.Scrollbar>
			<Scroller.Corner />
			<Scroller.Viewport>
				{[...categories.values()].map(parsedCategory => {
					// This chunk is incredibly fast, surprisingly. Thanks modern js engines!
					// I was originally thinking of wrapping in useMemo but it would
					// literally cause worse performance due to over-optimisation (the root
					// of all evil).
					const chunked = chunk(parsedCategory.emojis, columns);

					return (
						<Fragment key={parsedCategory.name}>
							<Category>{parsedCategory.name}</Category>
							{chunked.map((row, rowIdx) => {
								const key = `${row.length}${rowIdx}${parsedCategory.name}`;

								return (
									<Fragment key={key}>
										{row.map((emoji, colIdx) => (
											<Cell
												key={emoji.codes}
												emoji={emoji}
												indicies={[colIdx, rowIdx]}
											/>
										))}
									</Fragment>
								);
							})}
						</Fragment>
					);
				})}
			</Scroller.Viewport>
		</Scroller.Container>
	</PickerProvider>
);

export {getCssText} from './stitches';
