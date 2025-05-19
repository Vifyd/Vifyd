import type { Meta, StoryObj } from '@storybook/react';
import { Asterisk, AsteriskProps } from './Asterisk';

const meta: Meta = {
  title: 'Components/Util/Asterisk',
  component: Asterisk,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<AsteriskProps>;

export const Primary: Story = {};
