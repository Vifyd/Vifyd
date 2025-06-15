import styled from 'styled-components';
import { TypographyProps } from '../types';
import { Typography } from '../Typography/Typography';

export type LabelTextProps = TypographyProps;

const StyledLabelText = styled(Typography)``;

export const LabelText = ({ ...rest }: LabelTextProps) => {
  return <StyledLabelText {...rest}></StyledLabelText>;
};
