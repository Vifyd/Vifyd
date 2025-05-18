import { jsx as _jsx } from "react/jsx-runtime";
import styled from 'styled-components';
const StyledHelperText = styled.span ``;
export const HelperText = ({ ...rest }) => {
    return _jsx(StyledHelperText, { ...rest });
};
