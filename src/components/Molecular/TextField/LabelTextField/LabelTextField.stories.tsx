import type { Meta, StoryObj } from '@storybook/react';
import { LabelTextField } from './LabelTextField';
import type { LabelTextFieldProps } from './LabelTextField';

const meta: Meta<LabelTextFieldProps> = {
  title: 'Components/Molecular/TextField/LabelTextField',
  component: LabelTextField,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<LabelTextFieldProps>;

export const Primary: Story = {
  args: {},
};
