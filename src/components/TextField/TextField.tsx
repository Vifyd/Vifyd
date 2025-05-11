import styled from 'styled-components';
import type { InputHTMLAttributes } from 'react';

export type TextFieldProps = {
  variant?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  error?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;

const StyledTextField = styled.input<Pick<TextFieldProps, 'variant' | 'error'>>`
  padding: 8px 16px;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  color: white;
  background-color: ${({ error }) => (error ? '#ff4d4f' : '#333')};

  ${({ variant }) => {
    switch (variant) {
      case 'xs':
        return 'font-size: 12px;';
      case 'sm':
        return 'font-size: 14px;';
      case 'md':
        return 'font-size: 16px;';
      case 'lg':
        return 'font-size: 18px;';
      case 'xl':
        return 'font-size: 20px;';
      default:
        return '';
    }
  }}
`;

export const TextField = (props: TextFieldProps) => {
  return <StyledTextField {...props} />;
};
