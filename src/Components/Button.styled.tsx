import styled from "styled-components";

export const ButtonStyled = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: 18px;
  width: 223px;
  height: 65px;
  font-weight: 400;
  font-size: 20px;
  color: ${(props) => props.theme.colors.menuItemText};
  cursor: pointer;
`

