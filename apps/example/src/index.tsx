import React from 'react';
import {render} from 'react-dom';
import {EmojiPicker, OnPick} from '@giggl/emoji';

import './index.css';

const mount = document.querySelector<HTMLDivElement>('#mount')!;

const onPick: OnPick = emoji => {
	console.log(emoji);
};

render(<EmojiPicker onPick={onPick} />, mount);
