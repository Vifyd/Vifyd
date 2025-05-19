import styled from 'styled-components';
import { BaseTextProps } from '../types';

export type LabelTextProps = BaseTextProps;

const StyledLabelText = styled.p``;

export const LabelText = ({ ...rest }: LabelTextProps) => {
  return <StyledLabelText {...rest}></StyledLabelText>;
};
