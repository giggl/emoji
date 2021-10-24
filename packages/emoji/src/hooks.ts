import {useUpdateAtom} from 'jotai/utils';
import {useState, useRef, useEffect} from 'react';
import {Coords} from '.';
import {atoms} from './state';

export function useCell(coords: Coords) {
	const set = useUpdateAtom(atoms.location);
	const [hovered, setHovered] = useState(false);

	const ref = useRef<HTMLButtonElement | null>(null);

	const enter = () => {
		set(coords);
		setHovered(true);
	};

	const leave = () => {
		setHovered(false);
	};

	useEffect(() => {
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
	}, []);

	return [ref, hovered] as const;
}
