import styled from 'styled-components';
import { HTMLAttributes } from 'react';

export type LabelTextProps = HTMLAttributes<HTMLSpanElement>;

const StyledLabelText = styled.span``;

export const LabelText = ({ ...rest }: LabelTextProps) => {
  return <StyledLabelText {...rest}></StyledLabelText>;
};
