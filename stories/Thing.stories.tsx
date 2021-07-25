import React from 'react';
import { Meta, Story } from '@storybook/react';
import { GigglEmojiPicker, Props } from '../src';

const meta: Meta<Props> = {
  title: 'Welcome',
  component: GigglEmojiPicker,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<Props> = (args) => <GigglEmojiPicker {...args} />;

export const Default = Template.bind({});

Default.args = {};
