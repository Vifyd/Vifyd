import styled from 'styled-components';
import { HTMLAttributes, ReactNode } from 'react';
import {
  TextFieldProps,
  TextField,
} from '@/components/Molecular/TextField/TextField/TextField';

export type LabelTextFieldProps = {
  label?: string;
  helperText?: string;
  readOnly?: boolean;
  disabled?: boolean;
  textFieldProps?: TextFieldProps;
  slots?: {
    label?: ReactNode;
    helperText?: ReactNode;
  };
} & HTMLAttributes<HTMLDivElement>;

const StyledLabelTextField = styled.div<TextFieldProps>``;

export const LabelTextField = ({
  label,
  helperText,
  readOnly,
  disabled,
  textFieldProps,
  slots,
  ...rest
}: LabelTextFieldProps) => {
  const nestedTextFieldProps = {
    disabled,
    readOnly,
    ...textFieldProps,
  };

  return (
    <StyledLabelTextField {...rest}>
      {slots?.label ?? (label && <div>{label}</div>)}
      <TextField {...nestedTextFieldProps} />
      {slots?.helperText ?? (helperText && <div>{helperText}</div>)}
    </StyledLabelTextField>
  );
};
