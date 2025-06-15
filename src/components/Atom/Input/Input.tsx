import styled from 'styled-components';
import type { InputHTMLAttributes } from 'react';

export type InputProps = {
  readOnly?: boolean;
  disabled?: boolean;
  value?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const StyledInput = styled.input<InputProps>`
  padding: 8px 16px;
  border: none;
  outline: none;
  border-radius: 8px;
  color: #000;
  background-color: ${({ disabled }) => (disabled ? '#f0f0f0' : 'transparent')};
`;

export const Input = ({ ...rest }: InputProps) => {
  return <StyledInput {...rest} />;
};
