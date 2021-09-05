/* eslint-disable no-alert */
import React, {Dispatch, SetStateAction, useState} from 'react';
import ReactDOM from 'react-dom';

import {GigglEmojiPicker} from '../src/';

function App() {
	const [debug, setDebug] = useState(true);

	return (
		<>
			<DebugSwitch debug={debug} setDebug={setDebug} />

			<GigglEmojiPicker
				debug={debug}
				columns={6}
				onPick={value => {
					alert(value);
				}}
			/>
		</>
	);
}

function DebugSwitch({
	debug,
	setDebug,
}: {
	debug: boolean;
	setDebug: Dispatch<SetStateAction<boolean>>;
}) {
	return (
		<div style={{marginBottom: '20px'}}>
			<label>
				<input
					type="checkbox"
					checked={debug}
					onChange={() => {
						setDebug(x => !x);
					}}
				/>
				<span>debug</span>
			</label>
		</div>
	);
}

ReactDOM.render(<App />, document.getElementById('mount'));
