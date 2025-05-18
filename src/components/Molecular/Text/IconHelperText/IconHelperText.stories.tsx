import type { Meta, StoryObj } from '@storybook/react';
import { IconHelperText, IconHelperTextProps } from './IconHelperText';

const meta: Meta<IconHelperTextProps> = {
  title: 'Components/Molecular/Text/IconHelperText',
  component: IconHelperText,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<IconHelperTextProps>;

export const Primary: Story = {
  args: { children: 'IconHelperText' },
};
