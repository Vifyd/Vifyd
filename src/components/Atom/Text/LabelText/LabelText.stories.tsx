import type { Meta, StoryObj } from '@storybook/react';
import { LabelText, LabelTextProps } from './LabelText';

const meta: Meta<typeof LabelText> = {
  title: 'Components/Atom/Text/LabelText',
  component: LabelText,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<LabelTextProps>;

export const Primary: Story = {
  args: { children: 'LabelText' },
};
