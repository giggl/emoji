import React from 'react';
import ReactDOM from 'react-dom';

import {GigglEmojiPicker} from '../src/';

function App() {
	return <GigglEmojiPicker onPick={alert} />;
}

ReactDOM.render(<App />, document.getElementById('mount'));
