import type { Meta, StoryObj } from '@storybook/react';
import { HelperText, HelperTextProps } from './HelperText';

const meta: Meta<HelperTextProps> = {
  title: 'Components/Atom/Text/HelperText',
  component: HelperText,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<HelperTextProps>;

export const Primary: Story = {
  args: { children: 'helper text' },
};
