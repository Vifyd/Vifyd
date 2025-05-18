import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { LabelText, } from '@/components/Atom/Text/LabelText/LabelText';
import { Asterisk } from '@/components/Util/Asterisk/Asterisk';
import styled from 'styled-components';
const StyledInputLabel = styled.div `
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const StyledTextContainer = styled.div `
  display: flex;
  align-items: center;
  gap: 4px;
`;
export const InputLabel = ({ required, disabled, slot, label, labelTextProps, ...rest }) => {
    return (_jsxs(StyledInputLabel, { ...rest, children: [_jsxs(StyledTextContainer, { children: [_jsx(LabelText, { ...labelTextProps, children: label }), required && _jsx(Asterisk, {})] }), slot?.right] }));
};
