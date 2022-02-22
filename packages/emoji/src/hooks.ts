import {useUpdateAtom} from 'jotai/utils';
import {useState, useRef, useEffect} from 'react';
import {Coords} from './types';
import {atoms} from './state';

export function useCell(coords: Coords) {
	const set = useUpdateAtom(atoms.location);
	const [hovered, setHovered] = useState(false);

	const ref = useRef<HTMLButtonElement | null>(null);

	useEffect(() => {
		const leave = () => {
			setHovered(false);
		};

		const enter = () => {
			set(coords);
			setHovered(true);
		};

		if (ref.current) {
			ref.current.addEventListener('mouseenter', enter);
			ref.current.addEventListener('mouseleave', leave);
		}

		return () => {
			const {current} = ref;

			if (!current) {
				return;
			}

			current.removeEventListener('mouseenter', enter);
			current.removeEventListener('mouseleave', leave);
		};
	}, [coords, set]);

	return [ref, hovered] as const;
}
