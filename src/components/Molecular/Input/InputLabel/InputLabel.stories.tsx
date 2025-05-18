import type { Meta, StoryObj } from '@storybook/react';
import { InputLabelProps } from './InputLabel';
import { InputLabel } from './InputLabel';

const meta: Meta<InputLabelProps> = {
  title: 'Components/Molecular/Input/InputLabel',
  component: InputLabel,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<InputLabelProps>;

export const InputTest: Story = {
  args: {},
};
