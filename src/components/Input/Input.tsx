import styled from 'styled-components';
import type { InputHTMLAttributes } from 'react';

export type InputProps = {
  inputSize?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  readOnly?: boolean;
  error?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;

const StyledInput = styled.input<InputProps>`
  padding: 8px 16px;
  border: none;
  border-radius: 8px;
  color: #000;
  border: ${({ error }) => (error ? '1px solid #ff0000' : '1px solid #ccc')};
  background-color: ${({ disabled }) => (disabled ? '#f0f0f0' : '#fff')};

  ${({ inputSize = 'md' }) => {
    switch (inputSize) {
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

  &:hover {
    border-color: ${({ error, disabled }) => (disabled ? '#ccc' : error ? '#ff0000' : '#999')}} 
  }

  &:focus {
    outline: none;
    border-color: ${({ error }) => (error ? '#ff0000' : '#007bff')}} 
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.2);
  }
 
`;

export const Input = ({ ...rest }: InputProps) => {
  return <StyledInput {...rest} />;
};
