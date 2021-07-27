import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {GigglEmojiPicker} from '../.';

export const App = () => {
	const pick = (picked: string) => {
		// eslint-disable-next-line no-alert
		alert(picked);
	};

	return (
		<div>
			<GigglEmojiPicker onPick={pick} />
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
