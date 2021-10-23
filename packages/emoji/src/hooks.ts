import {useState, useRef, useEffect} from 'react';

export function useCell() {
	const [hovered, setHovered] = useState(false);

	const ref = useRef<HTMLButtonElement | null>(null);

	const enter = () => {
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
