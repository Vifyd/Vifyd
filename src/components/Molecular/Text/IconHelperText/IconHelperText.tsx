import styled from 'styled-components';
import { HTMLAttributes } from 'react';

export type IconHelperTextProps = HTMLAttributes<HTMLSpanElement>;

const StyledIconHelperText = styled.span``;

export const IconHelperText = ({ ...rest }: IconHelperTextProps) => {
  return <StyledIconHelperText {...rest}></StyledIconHelperText>;
};
