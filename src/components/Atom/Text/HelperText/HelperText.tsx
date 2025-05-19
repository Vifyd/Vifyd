import styled from 'styled-components';
import { BaseTextProps } from '../types';

export type HelperTextProps = BaseTextProps;

const StyledHelperText = styled.p``;

export const HelperText = ({ ...rest }: HelperTextProps) => {
  return <StyledHelperText {...rest}></StyledHelperText>;
};
