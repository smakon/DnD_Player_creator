import type { Meta, StoryObj } from '@storybook/react';

import Input from './Input';

const meta = {
  component: Input,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    type: 'text',
    placeholder: 'Enter your name',
    value: 'Some text',
    style: {},
  }
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Text: Story = {
  args: {
    type: 'text',
    placeholder: 'Enter your name',
    value: 'Some text',
    style: {}
  },
};

export const Password: Story = {
  args: {
    type: 'password',
    placeholder: 'Enter your password',
    value: '12321',
    style: {}
  },
}

export const Required: Story = {
	args: {
		type: 'text',
		placeholder: 'Enter your password',
		value: '',
    style: {},
    required: true
	},
}