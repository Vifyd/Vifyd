import styled from 'styled-components';
import { TypographyProps } from '../types';

const StyledTypography = styled.p``;

export const Typography = ({ ...rest }: TypographyProps) => {
  return <StyledTypography {...rest}></StyledTypography>;
};
