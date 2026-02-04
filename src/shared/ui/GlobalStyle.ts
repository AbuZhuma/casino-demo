import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * { box-sizing: border-box; }
  html, body { height: 100%; }
  body {
    margin: 0;
    background: ${({ theme }) => (theme as any)?.palette?.background?.default ?? "#0b1220"};
  }
  p{
    margin: 0;
  }
`;
