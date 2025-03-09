import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: ${(props)=>props.theme.colors.primary};
  height: 100px;
  
  & h2{
    font-family: "Nova Mono", monospace;
    font-weight: 400;
    font-style: normal;
    font-size: 36px;
    text-transform: uppercase;
    color: ${(props)=>props.theme.colors.third};
  }
`