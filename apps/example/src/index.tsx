import React from 'react';
import {render} from 'react-dom';
import {EmojiPicker, OnPick} from '@giggl/emoji';

const mount = document.querySelector<HTMLDivElement>('#mount')!;

const onPick: OnPick = emoji => {
	alert(emoji);
};

function App() {
	return <EmojiPicker onPick={onPick} />;
}

render(<App />, mount);
