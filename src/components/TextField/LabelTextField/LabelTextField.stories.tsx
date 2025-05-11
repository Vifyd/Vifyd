import type { Meta, StoryObj } from '@storybook/react';
import { LabelTextField } from './LabelTextField';
import type { LabelTextFieldProps } from './LabelTextField';
import { ReactNode } from 'react';

const meta: Meta<typeof LabelTextField> = {
  title: 'Components/LabelTextField',
  component: LabelTextField,
  tags: ['autodocs'],
  argTypes: {
    Wrapper: {
      control: 'select',
      options: ['red', 'black', 'chip'],
      mapping: {
        red: ({ children }: { children: ReactNode }) => <span style={{ backgroundColor: 'red' }}>{children}</span>,
        black: ({ children }: { children: ReactNode }) => <span style={{ backgroundColor: 'black' }}>{children}</span>,
        chip: ({ children }: { children: ReactNode }) => (
          <span style={{ borderRadius: '8px', backgroundColor: 'yellow' }}>{children}</span>
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
type Story = StoryObj<LabelTextFieldProps>;

export const Primary: Story = {
  args: {
    error: false,
  },
};
