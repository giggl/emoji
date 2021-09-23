/* eslint-disable no-alert */
import React, {Dispatch, DispatchWithoutAction, SetStateAction, useEffect, useReducer} from 'react';
import ReactDOM from 'react-dom';
import {GigglEmojiPicker} from '../emoji-picker/src';

function App() {
	const [debug, setDebug] = useReducer(x => !x, window.localStorage.getItem('debug') === 'yes');

	useEffect(() => {
		window.localStorage.setItem('debug', debug ? 'yes' : 'no');
	}, [debug]);

	return (
		<>
			<DebugSwitch debug={debug} setDebug={setDebug} />

			<GigglEmojiPicker
				debug={debug}
				columns={6}
				rows={7}
				onPick={value => {
					alert(value);
				}}
			/>
		</>
	);
}

function DebugSwitch({debug, setDebug}: {debug: boolean; setDebug: DispatchWithoutAction}) {
	return (
		<div style={{marginBottom: '20px'}}>
			<label>
				<input type="checkbox" checked={debug} onChange={setDebug} />
				<span>debug</span>
			</label>
		</div>
	);
}

ReactDOM.render(<App />, document.getElementById('mount'));
