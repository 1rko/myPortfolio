import React from "react";
import {menuPropsType} from "./Header";
import styled, {css} from "styled-components";
import {Link, animateScroll as scroll} from 'react-scroll';
import {font} from "../../Common/font";
import {myTheme} from "../../Styles/MyTheme.styled";

export const Menu = ({menuItems}: menuPropsType) => {
    return <nav>
        <StyledMenu>
            {menuItems.map(item =>
                <li>
                    <StyledLink
                        key={item.linkId}
                        to={`${item.linkId}`}
                        activeClass="active"
                        spy={true}
                        smooth={true} // Плавная прокрутка
                        duration={500} // Длительность анимации
                        offset={-100}
                    >{item.title}</StyledLink>
                </li>)}
        </StyledMenu>
    </nav>
}

// Стили для меню
const StyledMenu = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;

  & li {
    margin-left: 60px;

    & + li {
      margin-left: 60px;
    }
  }

  ${(props) => props.theme.media.large} {
    display: none;
  }
`;

// Стили для ссылок
const StyledLink = styled(Link)`
  ${font({weight: 400, fMin: 24, fMax: 24, color: myTheme.colors.menuItemText})}
  position: relative;
  white-space: nowrap;
  text-decoration: none;

  &::before {
    content: '';
    width: 24px;
    height: 6px;
    border-radius: 55px;
    position: absolute;
    bottom: -8px;
    left: -24px;
    background-color: ${(props) => props.theme.colors.menuItemText};
    display: none;
  }
  
  &:hover,&.active {
    font-weight: 700;

    &::before {
      display: block;
    }
  }
`;

/*
export const StyledMenu = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;

  & li {
    margin-left: 60px;

    & a {
      font-family: ${(props) => props.theme.fonts.main};
      font-weight: 400;
      font-size: 24px;
      color: ${(props) => props.theme.colors.menuItemText};
      position: relative;
      white-space: nowrap;

      &::before {
        content: '';
        width: 24px;
        height: 6px;
        border-radius: 55px;
        position: absolute;
        bottom: -8px;
        left: -24px;
        background-color: #fff;: ${(props) => props.theme.colors.menuItemText};

        display: none;
      }

      & ${(props) => (props.isActive && css`
        font-weight: 700;
        color: red;

        & ::before {
          display: block;
        }
      `)}
    ;
    }


    /!*& a:hover {
      font-weight: 700;

      &::before {
        display: block;
      }
    }*!/

    & + li {
      margin-left: 60px;
    }
  }


  ${(props) => props.theme.media.large} {
    display: none;
  }

  /* Условные стили для активного состояния */
/* ${(props) =>
         props.isActive &&
         css`
           font-weight: 700;

           &::before {
             display: block;
           }
         `}*/

