import { HTMLAttributes } from 'react';

export type BaseTextProps = {
  error?: boolean;
  disabled?: boolean;
} & HTMLAttributes<HTMLParagraphElement>;
