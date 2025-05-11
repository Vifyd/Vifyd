import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';
import type { InputProps } from './Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    inputSize: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    error: {
      control: 'boolean',
    },
    placeholder: {
      control: 'text',
    },
    disabled: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<InputProps>;

export const InputTest: Story = {
  args: {
    inputSize: 'md',
    placeholder: '입력해 주세요',
    error: false,
  },
};
