import {useAtom} from 'jotai';
import {atoms} from './state';
import type {Props} from './cell';

/**
 * Hook to identify if the current
 * @param props The props passed to the cell
 */
export function useSellState(props: Props) {
	const [loc, setLoc] = useAtom(atoms.location);

	const set = () => setLoc([props.col, props.row]);

	if (!loc) {
		return [false, loc, set] as const;
	}

	const [x, y] = loc;

	return [props.col === x && props.row === y, loc, set] as const;
}
