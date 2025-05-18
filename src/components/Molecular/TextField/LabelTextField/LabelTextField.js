import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styled from 'styled-components';
import { TextField, } from '@/components/Molecular/TextField/TextField/TextField';
const StyledLabelTextField = styled.div ``;
export const LabelTextField = ({ label, helperText, readOnly, disabled, textFieldProps, slots, ...rest }) => {
    const nestedTextFieldProps = {
        disabled,
        readOnly,
        ...textFieldProps,
    };
    return (_jsxs(StyledLabelTextField, { ...rest, children: [slots?.label ?? (label && _jsx("div", { children: label })), _jsx(TextField, { ...nestedTextFieldProps }), slots?.helperText ?? (helperText && _jsx("div", { children: helperText }))] }));
};
