import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styled from 'styled-components';
import { WrapperInput, } from '@/components/Molecular/Input/WrapperInput/WrapperInput';
const StyledTextField = styled.div `
  width: fit-content;
  border: none;
  border-radius: 8px;
  color: #000;
  border: ${({ error, theme }) => error
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
    border-color: ${({ error, disabled, theme }) => disabled ? theme.colors.border : error ? theme.colors.error : '#999'}} 
  }

  &:focus {
    outline: none;
    border-color: ${({ error }) => (error ? '#ff0000' : '#007bff')}} 
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.2);
  }
 
`;
export const TextField = ({ ...rest }) => {
    const { disabled, slots, Wrapper, inputProps, error, readOnly } = rest;
    const nestedInputProps = {
        disabled,
        readOnly,
        error,
        ...inputProps,
    };
    return (_jsxs(StyledTextField, { ...rest, children: [slots?.left, _jsx(WrapperInput, { Wrapper: Wrapper, ...nestedInputProps }), slots?.right] }));
};
