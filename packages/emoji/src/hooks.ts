import {GridChildComponentProps} from 'react-window';
import {useAtom} from 'jotai/esm';
import {atoms} from './state';

/**
 * Hook to identify if the current
 * @param props The props passed to the cell
 */
export function useIsActiveCell(
	props: Pick<GridChildComponentProps, 'columnIndex' | 'rowIndex'>,
) {
	const [loc] = useAtom(atoms.location);

	if (!loc) {
		return [false, loc] as const;
	}

	const [x, y] = loc;

	return [props.columnIndex === x && props.rowIndex === y, loc] as const;
}
