import type { Meta, StoryObj } from '@storybook/react';
import { TokenizedTextField } from './TokenizedTextField';
import type { TokenizedTextFieldProps } from './TokenizedTextField';
import { ReactNode } from 'react';

const meta: Meta<TokenizedTextFieldProps> = {
  title: 'Components/Organism/TextField/TokenizedTextField',
  component: TokenizedTextField,
  tags: ['autodocs'],
  argTypes: {
    Wrapper: {
      control: 'select',
      options: ['red', 'black', 'chip'],
      mapping: {
        red: ({ children }: { children: ReactNode }) => (
          <span style={{ backgroundColor: 'red' }}>{children}</span>
        ),
        black: ({ children }: { children: ReactNode }) => (
          <span style={{ backgroundColor: 'black' }}>{children}</span>
        ),
        chip: ({ children }: { children: ReactNode }) => (
          <span style={{ borderRadius: '8px', backgroundColor: 'yellow' }}>
            {children}
          </span>
        ),
      },
    },
    error: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<TokenizedTextFieldProps>;

export const Primary: Story = {
  args: {},
};
