import type { ElementType, ReactNode } from 'react';
import { Input, InputProps } from '../Input';

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
