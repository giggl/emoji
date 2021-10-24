import React, {Fragment, memo} from 'react';
import {OnPick, ParsedCategory, PropsFor} from './types';
import {PickerProvider} from './context';
import {emojis} from './emojis';
import {chunk, useInput} from './util';
import {Cell} from './cell';
import {Category} from './category';
import {Container} from './container';
import {Search} from './search';

export interface EmojiProps extends PropsFor<'div'> {
	/**
	 * Picker function. Please wrap in useCallback if defined inside a component to avoid unnecessary rerenders!
	 */
	onPick: OnPick;
}

const columns = 5;
const categories = emojis.reduce<Map<string, ParsedCategory>>((map, emoji) => {
	let existing = map.get(emoji.group);

	if (existing) {
		existing.emojis.push(emoji);
	} else {
		existing = {
			name: emoji.group,
			id: emoji.group,
			emojis: [emoji],
		};
	}

	return map.set(emoji.group, existing);
}, new Map());

const MemoList = memo(() => (
	<>
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
	</>
));

export const EmojiPicker = (props: EmojiProps) => {
	const {setter, state} = useInput();

	return (
		<PickerProvider picker={props.onPick}>
			<Container>
				<Search value={state} placeholder="🧭 Search" onChange={setter} />
				<MemoList />
			</Container>
		</PickerProvider>
	);
};

export {getCssText} from './stitches';
