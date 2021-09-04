import React, {useState} from 'react';
import ReactDOM from 'react-dom';

import {GigglEmojiPicker} from '../src/';

function App() {
	const [debug, setDebug] = useState(true);

	return (
		<div>
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

			<GigglEmojiPicker
				debug={debug}
				onPick={value => {
					// eslint-disable-next-line no-alert
					alert(value);
				}}
			/>
		</div>
	);
}

ReactDOM.render(<App />, document.getElementById('mount'));
