import { jsx as _jsx } from 'react/jsx-runtime';
import styled from 'styled-components';
const StyledInput = styled.input `
  padding: 8px 16px;
  border: none;
  outline: none;
  border-radius: 8px;
  color: #000;
  background-color: ${({ disabled }) => (disabled ? '#f0f0f0' : 'transparent')};

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
`;
export const Input = ({ ...rest }) => {
    return _jsx(StyledInput, { ...rest });
};
