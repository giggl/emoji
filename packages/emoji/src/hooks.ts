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
			if (!ref.current) {
				return;
			}

			ref.current.removeEventListener('mouseenter', enter);
			ref.current.removeEventListener('mouseleave', leave);
		};
	}, []);

	return [ref, hovered] as const;
}
