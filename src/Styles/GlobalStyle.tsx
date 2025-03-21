import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    position: relative;

    font-family: ${(props) => props.theme.fonts.main};
    
    & span, h1, h2, h2, a, p{
      caret-color: transparent;   //убирает мигающий курсор на тексте
    }

    & a {
      text-decoration: none;
    }

    & li {
      list-style-type: none;
    }

    & button {
      /* Сброс отступов и границ */
      border: none;

      /* Сброс фона и шрифта */
      background: none;
      font-family: inherit;
      font-size: inherit;
      color: inherit;
    }
  }
`;