import * as React from 'react';
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
