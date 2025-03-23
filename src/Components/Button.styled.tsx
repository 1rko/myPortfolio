import styled from "styled-components";
import {myTheme} from "../Styles/MyTheme.styled";

export const ButtonStyled = styled.button`
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
  
  &:active {
    transform: translateY(2px); /* Смещение вниз */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); /* Тень для эффекта "утопления" */
  }
  
  ${(props) => props.theme.media.small} {
    margin: 0 auto;
  }
`

