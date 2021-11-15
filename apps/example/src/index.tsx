import React from 'react';
import {render} from 'react-dom';
import {EmojiPicker, EmojiPickerProps, OnPickFn} from '@giggl/emoji';

import './index.css';

const mount = document.querySelector<HTMLDivElement>('#mount')!;

const onPick: OnPickFn = emoji => {
	console.log(emoji);
};

const MountControls = (props: EmojiPickerProps) => {
	const [mount, toggle] = React.useReducer(x => !x, true);

	return (
		<>
			<div>
				<button type="button" onClick={toggle}>
					Toggle picker (for effects)
				</button>
			</div>

			<div>{mount && <EmojiPicker {...props} />}</div>
		</>
	);
};

render(<MountControls onPick={onPick} />, mount);
