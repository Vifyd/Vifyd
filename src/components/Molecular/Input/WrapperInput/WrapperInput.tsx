import { Input, InputProps } from '@/components/Atom/Input/Input';
import type { ElementType, ReactNode } from 'react';

export type WrapperInputProps = {
  Wrapper?: ElementType<{ children: ReactNode }>;
} & InputProps;

export const WrapperInput = ({ Wrapper, ...rest }: WrapperInputProps) => {
  return (
    <>
      {Wrapper ? (
        <Wrapper>
          <Input {...rest} />
        </Wrapper>
      ) : (
        <Input {...rest} />
      )}
    </>
  );
};
