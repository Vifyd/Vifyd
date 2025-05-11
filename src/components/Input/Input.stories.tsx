import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';
import type { InputProps } from './Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
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
type Story = StoryObj<InputProps>;

export const Primary: Story = {
  args: {
    variant: 'md',
    placeholder: '입력해 주세요',
    error: false,
  },
};
