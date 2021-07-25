import React from 'react';
import * as ReactDOM from 'react-dom';
import { Default as Emoji } from '../stories/Emoji.stories';

describe('Thing', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Emoji />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
