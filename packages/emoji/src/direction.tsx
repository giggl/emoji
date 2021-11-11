import {useUpdateAtom} from 'jotai/utils';
import {useHotkeys, Options} from 'react-hotkeys-hook';
import {atoms} from './state';

const enum Directions {
	UP,
	DOWN,
	LEFT,
	RIGHT,
}

export const DirectionHooks = ({
	columnCount,
	rowCount,
}: {
	columnCount: number;
	rowCount: number;
}) => {
	const setter = useUpdateAtom(atoms.location);

	const factory = (direction: Directions) => {
		const update = () => {
			setter(old => {
				if (!old) {
					return [0, 0];
				}

				const [x, y] = old;

				switch (direction) {
					case Directions.UP: {
						return [x, Math.max(y - 1, 0)];
					}

					case Directions.DOWN: {
						return [x, Math.max(y + 1, 0)];
					}

					case Directions.LEFT: {
						return [Math.max(x - 1, 0), y];
					}

					case Directions.RIGHT: {
						return [Math.min(Math.max(x + 1, 0), columnCount - 1), y];
					}

					default: {
						return old;
					}
				}
			});
		};

		const options: Options = {
			enableOnTags: ['INPUT'],
		};

		return [update, options] as const;
	};

	useHotkeys('Up', ...factory(Directions.UP));
	useHotkeys('Down', ...factory(Directions.DOWN));
	useHotkeys('Left', ...factory(Directions.LEFT));
	useHotkeys('Right', ...factory(Directions.RIGHT));

	return null;
};
