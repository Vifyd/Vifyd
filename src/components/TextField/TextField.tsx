import styled from 'styled-components';
import type { ElementType, HTMLAttributes, ReactNode } from 'react';
import { InputProps } from '../Input/Input';
import { WrapperInput, WrapperInputProps } from '../Input/WrapperInput/WrapperInput';

export type TextFieldProps = {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  error?: boolean;
  inputProps?: InputProps;
  slots?: {
    left?: ReactNode;
    right?: ReactNode;
  };
  Wrapper?: WrapperInputProps['Wrapper'];
  readOnly?: boolean;
  disabled?: boolean;
} & HTMLAttributes<HTMLDivElement>;

const StyledTextField = styled.div<TextFieldProps>`
  width: fit-content;
  border: none;
  border-radius: 8px;
  color: #000;
  border: ${({ error, theme }) => (error ? `1px solid ${theme.colors.error}` : `1px solid ${theme.colors.border}`)};
  background-color: ${({ disabled }) => (disabled ? '#f0f0f0' : '#fff')};

  ${({ size = 'md' }) => {
    switch (size) {
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
    border-color: ${({ error, disabled, theme }) =>
      disabled ? theme.colors.border : error ? theme.colors.error : '#999'}} 
  }

  &:focus {
    outline: none;
    border-color: ${({ error }) => (error ? '#ff0000' : '#007bff')}} 
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.2);
  }
 
`;

export const TextField = ({ ...rest }: TextFieldProps) => {
  const { disabled, slots, Wrapper, inputProps, error, readOnly } = rest;
  const nestedInputProps = {
    disabled,
    readOnly,
    error,
    ...inputProps,
  };

  return (
    <StyledTextField {...rest}>
      {slots?.left}
      <WrapperInput Wrapper={Wrapper} {...nestedInputProps} />
      {slots?.right}
    </StyledTextField>
  );
};
