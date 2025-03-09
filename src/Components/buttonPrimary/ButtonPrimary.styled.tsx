import styled from "styled-components";

export const ButtonPrimaryStyled = styled.a`
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: 18px;
  padding: 19px 57px;
  width: 223px;
  height: 65px;
  color: ${(props) => props.theme.colors.third};
  cursor: pointer;
  
`

