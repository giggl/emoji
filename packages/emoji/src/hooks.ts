import {GridChildComponentProps} from 'react-window';
import {useAtom} from 'jotai';
import {atoms} from './state';

/**
 * Hook to identify if the current
 * @param props The props passed to the cell
 */
export function useSellState(
	props: Pick<GridChildComponentProps, 'columnIndex' | 'rowIndex'>,
) {
	const [loc, setLoc] = useAtom(atoms.location);

	const set = () => setLoc([props.columnIndex, props.rowIndex]);

	if (!loc) {
		return [false, loc, set] as const;
	}

	const [x, y] = loc;

	return [props.columnIndex === x && props.rowIndex === y, loc, set] as const;
}
