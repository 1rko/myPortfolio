import styled from "styled-components";

export const MenuContactsStyled = styled.ul`
  & li + li {
    margin-left: 20px;
  }
  
  & li + li:before {
    content: '|';
    font-family: "Nunito", sans-serif;
    font-weight: 500;
    font-size: 24px;
    color: #f8eeef;
  }
`

