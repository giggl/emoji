import {useUpdateAtom} from 'jotai/utils';
import {useHotkeys, Options} from 'react-hotkeys-hook';
import {atoms} from './state';

const enum Directions {
	UP,
	DOWN,
	LEFT,
	RIGHT,
}

export const DirectionHooks = () => {
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
						return [x, y - 1];
					}

					case Directions.DOWN: {
						return [x, y + 1];
					}

					case Directions.LEFT: {
						return [x - 1, y];
					}

					case Directions.RIGHT: {
						return [x + 1, y];
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
