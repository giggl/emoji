// series a startup app idea (an app where you can)

import {MouseEventHandler, useEffect, useReducer} from 'react';
import fx from 'fireworks';

export default function App() {
	const [state, dispatch] = useReducer(() => 'did', window?.localStorage.getItem('state') ?? 'can');

	useEffect(() => {
		window?.localStorage.setItem('state', state);
	}, [state]);

	const click: MouseEventHandler = e => {
		dispatch();
		fx({x: e.clientX, y: e.clientY});
	};

	return (
		<button disabled={state === 'did'} onClick={click}>
			{state}
		</button>
	);
}
