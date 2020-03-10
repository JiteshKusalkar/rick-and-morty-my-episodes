import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

export const FlexWrapper = styled.div`
  width: 100%;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.4);
  display: flex;
`;

export const Img = styled.img`
  width: 200px;
  height: 200px;
`;

export const Headline = styled.h1`
  font-size: 30px;
  font-weight: 300;
  text-align: center;
`;

export const Header = styled.h2`
  font-weight: 300;
`;
