import React from 'react';
import * as ReactDOM from 'react-dom';
import {App as Example} from '../example';

describe('Thing', () => {
	it('renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<Example />, div);
		ReactDOM.unmountComponentAtNode(div);
	});
});
