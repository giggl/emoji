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

const Template: Story<Props> = (args) => <GigglEmojiPicker {...args} />;

const Default = Template.bind({});

Default.args = {
  children: 'Hey',
};

export { Default };
export default meta;
