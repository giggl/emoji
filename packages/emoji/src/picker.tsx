import React, {memo, useEffect, useMemo, useRef} from 'react';
import {OnPick, Either, Coords} from './types';
import {PickerProvider, usePicker} from './context';
import {emojis, Emoji} from './emojis';
import {chunk, useInput} from './util';
import {activeStyledCell, Cell, StyledCell} from './cell';
import {Category} from './category';
import {columns, Container, EMOJI_SIZE, height, width} from './container';
import {Search} from './search';
import {FixedSizeGrid} from 'react-window';
import {useAtomValue, useUpdateAtom} from 'jotai/utils';
import {atoms} from './state';
import {DirectionHooks} from './direction';
import {useHotkeys} from 'react-hotkeys-hook';

export interface EmojiProps {
	/**
	 * Picker function. Please wrap in useCallback if defined inside a component to avoid unnecessary rerenders!
	 */
	onPick: OnPick;
}

const MemoList = memo(
	(props: {search: string}) => {
		const setCategory = useUpdateAtom(atoms.currentCategory);

		const chunked = useMemo(
			() =>
				chunk(
					emojis.filter(emoji => {
						const str = emoji.name.toLowerCase();

						return (
							str + emoji.short_names.join(' ').replaceAll('_', ' ')
						).includes(props.search.toLowerCase());
					}),
					columns,
				),
			[props.search],
		);

		if (chunked.length === 0) {
			return (
				<div
					style={{
						width,
						height,
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					🚫 No emojis match your search!
				</div>
			);
		}

		return (
			<FixedSizeGrid
				rowCount={Math.ceil(emojis.length / columns)}
				rowHeight={EMOJI_SIZE}
				columnCount={columns}
				columnWidth={EMOJI_SIZE}
				width={width}
				height={height}
				onItemsRendered={render => {
					const lastEmoji =
						chunked[render.visibleRowStartIndex]?.[
							render.visibleColumnStartIndex
						];

					if (!lastEmoji) {
						return;
					}

					setCategory(lastEmoji.category);
				}}
			>
				{({columnIndex, rowIndex, style}) => {
					const emoji = chunked[rowIndex]?.[columnIndex] as Either<
						Emoji,
						undefined
					>;

					if (!emoji) {
						return null;
					}

					return (
						<Cell
							key={emoji.name}
							coords={[columnIndex, rowIndex]}
							emoji={emoji}
							style={style}
						/>
					);
				}}
			</FixedSizeGrid>
		);
	},
	(a, b) => a.search === b.search,
);

const StyledCellProvider = () => {
	const [x, y] = useAtomValue(atoms.location) ?? [];
	const picker = usePicker();

	useHotkeys(
		'Enter',
		() => {
			picker({x, y} as any);
		},
		[x, y],
	);

	const ref = useRef<HTMLStyleElement | null>(null);

	useEffect(() => {
		if (typeof window === 'undefined') {
			return;
		}

		const element = document.createElement('style');
		document.head.appendChild(element);

		ref.current = element;

		return () => {
			if (!ref.current) {
				return;
			}

			document.head.removeChild(ref.current);
			ref.current.remove();
		};
	}, []);

	useEffect(() => {
		if (!ref.current || x === undefined || y === undefined) {
			return;
		}

		ref.current.textContent = ` 
			.${StyledCell.className}[data-coords="${x}:${y}"] { 
				${activeStyledCell}
			}
		`;
	}, [x, y]);

	return null;
};

export const EmojiPicker = (props: EmojiProps) => {
	const {onChange, state} = useInput('', value => value.toLowerCase());
	const activeCategory = useAtomValue(atoms.currentCategory);

	return (
		<PickerProvider picker={props.onPick}>
			<StyledCellProvider />
			<DirectionHooks
				columnCount={columns}
				rowCount={Math.ceil(emojis.length / columns)}
			/>

			<Container>
				<Search value={state} placeholder="🧭 Search" onChange={onChange} />
				<Category>{activeCategory}</Category>
				<div
					onClick={e => {
						e.stopPropagation();

						if ((e.target as HTMLElement).tagName === 'BUTTON') {
							// eslint-disable-next-line @typescript-eslint/no-unused-vars
							const coords = (e.target as HTMLButtonElement).dataset
								.coords!.split(':')
								.map(item => parseInt(item, 10)) as Coords;

							// TODO: Get element from coords (might need to pass MemoList the currently chunked array to access row, col)
						}
					}}
				>
					<MemoList search={state} />
				</div>
			</Container>
		</PickerProvider>
	);
};

export {getCssText} from './stitches';
