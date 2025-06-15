import { HTMLAttributes } from 'react';

export type TypographyProps = {
  error?: boolean;
  disabled?: boolean;
} & HTMLAttributes<HTMLParagraphElement>;
