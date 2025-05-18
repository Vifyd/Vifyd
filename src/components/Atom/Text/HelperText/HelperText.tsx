import styled from 'styled-components';
import { HTMLAttributes } from 'react';

export type HelperTextProps = HTMLAttributes<HTMLSpanElement>;

const StyledHelperText = styled.span``;

export const HelperText = ({ ...rest }: HelperTextProps) => {
  return <StyledHelperText {...rest}></StyledHelperText>;
};
