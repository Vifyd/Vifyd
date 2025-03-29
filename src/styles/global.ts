import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  /* Reset */
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body {
    width: 100%;
    height: 100%;
    font-family: 'Pretendard', 'Noto Sans KR', sans-serif;
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme?.colors.gray900};
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
    font-family: inherit;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;
