import {useCallback, useMemo, useState} from 'react';

/**
 * Creates a simple input filter with managed state
 * @param predicate - The items to loop through. This takes four arguments. The first is the current item (similar to Array#filter), the second is current state of the input. Third is the index of that item in the array and fourth is the array itself.
 * @param items - An array of items. This should be the full list of items you want to be "filterable"
 * @param initialInputState – An initial state to provide to the useState internally
 * @example
 * const {state, setState, filtered} = useInputFilter(filter, guides);
 */
export function useInputFilter<T>(
	predicate: (item: T, state: string, index: number, arr: T[]) => boolean,
	items: T[] = [],
	initialInputState = '',
) {
	const [state, setState] = useState(initialInputState);
	const wrappedPredicate = useCallback(predicate, [predicate]);

	const filtered = useMemo(
		() =>
			state.trim() === ''
				? items
				: items.filter((item, index) => wrappedPredicate(item, state, index, items)),
		[state, items, wrappedPredicate],
	);

	return {state, setState, filtered};
}
