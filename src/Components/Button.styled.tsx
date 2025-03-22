import styled from "styled-components";
import {myTheme} from "../Styles/MyTheme.styled";

export const ButtonStyled = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  
  background-color: ${myTheme.colors.primary};
  border-radius: 18px;
  width: 223px;
  height: 65px;
  font-weight: 400;
  font-size: 20px;
  color: ${myTheme.colors.menuItemText};
  cursor: pointer;
  transform: translateY(0);
  box-shadow: none;
  transition: ${myTheme.animations.transition};
  
  &:hover{
    transform: translateY(-5px);
    box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  }
`

