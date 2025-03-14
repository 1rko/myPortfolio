import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    position: relative;

    font-family: ${(props) => props.theme.fonts.primary};
    
    & a{
      text-decoration: none;
    }
    
    & li {
      list-style-type: none;
    }
  }
`;