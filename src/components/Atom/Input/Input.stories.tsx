import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';
import type { InputProps } from './Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Atom/Input/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
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
    placeholder: '입력해 주세요',
    error: false,
  },
};
