import type { Meta, StoryObj } from '@storybook/react';
import { TextField } from './TextField';
import type { TextFieldProps } from './TextField';
import { ReactNode } from 'react';

const meta: Meta<typeof TextField> = {
  title: 'Components/Molecular/TextField/TextField',
  component: TextField,
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
type Story = StoryObj<TextFieldProps>;

export const Primary: Story = {
  args: {
    error: false,
  },
};
