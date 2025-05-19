import styled from 'styled-components';
import { HTMLAttributes, ReactNode } from 'react';
import {
  TextFieldProps,
  TextField,
} from '@/components/Molecular/TextField/TextField/TextField';
import { InputLabel, InputLabelProps } from '../../Input/InputLabel/InputLabel';
import {
  IconHelperText,
  IconHelperTextProps,
} from '../../Text/IconHelperText/IconHelperText';

export type LabelTextFieldProps = {
  label?: string;
  helperText?: string;
  readOnly?: boolean;
  disabled?: boolean;
  textFieldProps?: TextFieldProps;
  inputLabelProps?: InputLabelProps;
  iconHelperTextProps?: IconHelperTextProps;
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
  inputLabelProps,
  iconHelperTextProps,
  ...rest
}: LabelTextFieldProps) => {
  const nestedTextFieldProps = {
    disabled,
    readOnly,
    ...textFieldProps,
  };

  return (
    <StyledLabelTextField {...rest}>
      {slots?.label ??
        (label && <InputLabel {...inputLabelProps} label={label} />)}
      <TextField {...nestedTextFieldProps} />
      {slots?.helperText ??
        (helperText && <IconHelperText {...iconHelperTextProps} />)}
    </StyledLabelTextField>
  );
};
