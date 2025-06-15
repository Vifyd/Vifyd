import type { Meta, StoryObj } from '@storybook/react';
import { WrapperInput } from './WrapperInput';
import type { WrapperInputProps } from './WrapperInput';
import { ReactNode } from 'react';

const meta: Meta<WrapperInputProps> = {
  title: 'Components/Molecular/Input/WrapperInput',
  component: WrapperInput,
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
    placeholder: {
      control: 'text',
    },
    disabled: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<WrapperInputProps>;

export const WrapperInputTest: Story = {
  args: {
    placeholder: '입력해 주세요',
  },
};
