import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from './Typography';
import { TypographyProps } from '../types';

const meta: Meta<typeof Typography> = {
  title: 'Components/Atom/Text/Typography',
  component: Typography,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<TypographyProps>;

export const Primary: Story = {
  args: { children: 'Typography' },
};
