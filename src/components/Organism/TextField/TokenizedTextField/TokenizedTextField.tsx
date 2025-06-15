import styled from 'styled-components';
import type { ElementType, HTMLAttributes, ReactNode } from 'react';
import { InputProps } from '../../../Atom/Input/Input';
import {
  WrapperInput,
  WrapperInputProps,
} from '@/components/Molecular/Input/WrapperInput/WrapperInput';

export type TokenizedTextFieldProps = {
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
  value?: string[];
  renderToken?: (token: string) => ReactNode;
} & HTMLAttributes<HTMLDivElement>;

const StyledTokenizedTextField = styled.div<TokenizedTextFieldProps>`
  width: fit-content;
  border: none;
  border-radius: 8px;
  color: #000;
  border: ${({ error, theme }) =>
    error
      ? `1px solid ${theme.colors.error}`
      : `1px solid ${theme.colors.border}`};
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

const StyledInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

const StyledToken = styled.div``;

export const TokenizedTextField = ({ ...rest }: TokenizedTextFieldProps) => {
  const {
    disabled,
    slots,
    Wrapper,
    inputProps,
    error,
    readOnly,
    value,
    renderToken,
  } = rest;
  const nestedInputProps = {
    disabled,
    readOnly,
    error,
    ...inputProps,
  };

  return (
    <StyledTokenizedTextField {...rest}>
      {slots?.left}
      <StyledInputContainer>
        {value?.map(
          (token, index) =>
            renderToken && <StyledToken key={index}>{token}</StyledToken>
        )}
        <WrapperInput Wrapper={Wrapper} {...nestedInputProps} />
      </StyledInputContainer>
      {slots?.right}
    </StyledTokenizedTextField>
  );
};
