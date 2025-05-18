import { HTMLAttributes } from 'react';
import styled from 'styled-components';

export type AsteriskProps = HTMLAttributes<HTMLSpanElement>;

const StyledAsterisk = styled.span`
  color: ${({ theme }) => theme.colors.error};
`;

export const Asterisk = ({ ...rest }: AsteriskProps) => {
  return <StyledAsterisk {...rest}>*</StyledAsterisk>;
};
