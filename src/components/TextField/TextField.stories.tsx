import type { Meta, StoryObj } from '@storybook/react';
import { TextField } from './TextField';
import type { TextFieldProps } from './TextField';

const meta: Meta<typeof TextField> = {
  title: 'Components/TextField',
  component: TextField,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    error: {
      control: 'boolean',
    },
    placeholder: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<TextFieldProps>;

export const Primary: Story = {
  args: {
    variant: 'md',
    placeholder: '입력해 주세요',
    error: false,
  },
};
