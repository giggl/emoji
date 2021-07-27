import React from 'react';
import {Meta, Story} from '@storybook/react';
import {GigglEmojiPicker, Props} from '../src';
import {setup} from 'goober';

setup(React.createElement);

const meta: Meta<Props> = {
	title: 'Emoji Picker',
	component: GigglEmojiPicker,
	argTypes: {
		children: {
			control: {type: 'text'},
		},
	},
	parameters: {
		controls: {expanded: true},
	},
};

const Template: Story<Props> = args => <GigglEmojiPicker {...args} />;

const Default = Template.bind({});

Default.args = {
	children: 'Hey',
};

export {Default};
export default meta;
