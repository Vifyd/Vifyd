import styled from 'styled-components';
import { TypographyProps } from '../types';
import { Typography } from '../Typography/Typography';

export type HelperTextProps = TypographyProps;

const StyledHelperText = styled(Typography)``;

export const HelperText = ({ ...rest }: HelperTextProps) => {
  return <StyledHelperText {...rest}></StyledHelperText>;
};
