import styled from 'styled-components';
import { HTMLAttributes, ReactNode } from 'react';
import {
  HelperText,
  HelperTextProps,
} from '@/components/Atom/Text/HelperText/HelperText';

export type IconHelperTextProps = {
  slot?: {
    left?: ReactNode;
  };
  helperTextProps?: HelperTextProps;
} & HTMLAttributes<HTMLDivElement>;

const StyledIconHelperText = styled.div``;

export const IconHelperText = ({
  slot,
  helperTextProps,
  ...rest
}: IconHelperTextProps) => {
  return (
    <StyledIconHelperText {...rest}>
      {slot?.left}
      <HelperText {...helperTextProps} />
    </StyledIconHelperText>
  );
};
