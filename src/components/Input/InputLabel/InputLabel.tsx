import { HTMLAttributes, type ElementType, type ReactNode } from 'react';
import { LabelText, LabelTextProps } from '@/components/Text/LabelText';
import { Asterisk } from '@/components/Util/Asterisk/Asterisk';
import styled from 'styled-components';

export type InputLabelProps = {
  slot?: {
    right?: ReactNode;
  };
  label: string;
  labelTextProps?: LabelTextProps;
  required?: boolean;
  disabled?: boolean;
} & HTMLAttributes<HTMLDivElement>;

const StyledInputLabel = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledTextContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const InputLabel = ({ required, disabled, slot, label, labelTextProps, ...rest }: InputLabelProps) => {
  return (
    <StyledInputLabel {...rest}>
      <StyledTextContainer>
        <LabelText {...labelTextProps}>{label}</LabelText>
        {required && <Asterisk />}
      </StyledTextContainer>
      {slot?.right}
    </StyledInputLabel>
  );
};
