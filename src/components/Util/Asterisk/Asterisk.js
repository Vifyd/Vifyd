import { jsx as _jsx } from "react/jsx-runtime";
import styled from 'styled-components';
const StyledAsterisk = styled.span `
  color: ${({ theme }) => theme.colors.error};
`;
export const Asterisk = ({ ...rest }) => {
    return _jsx(StyledAsterisk, { ...rest, children: "*" });
};
