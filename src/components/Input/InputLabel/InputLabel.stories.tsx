import type { Meta, StoryObj } from '@storybook/react';
import { WrapperInput } from './WrapperInput';
import type { WrapperInputProps } from './WrapperInput';
import { ReactNode } from 'react';
import { InputLabelProps } from './InputLabel';
import { InputLabel } from './InputLabel';

const meta: Meta<InputLabelProps> = {
  title: 'Components/InputLabel',
  component: InputLabel,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<WrapperInputProps>;

export const WrapperInputTest: Story = {
  args: {
    placeholder: '입력해 주세요',
  },
};
