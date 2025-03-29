// src/components/Button/Button.tsx
import styled from 'styled-components';

export const Button = styled.button<{ variant?: 'primary' | 'secondary' }>`
  padding: 8px 16px;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  background-color: ${({ theme, variant }) =>
    variant === 'secondary' ? theme.colors.gray100 : theme.colors.primary};
  color: white;
`;
