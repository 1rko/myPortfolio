import React from "react";
import {menuItemsProps} from "./Header";
import styled from "styled-components";
import { Link, animateScroll as scroll } from 'react-scroll';

export const Menu = ({menuItems}: menuItemsProps) => {
    return <nav>
        <StyledMenu>

            {menuItems.map(item =>
                <li>
                    <Link
                        to={`${item.link}`}
                        smooth={true} // Плавная прокрутка
                        duration={500} // Длительность анимации
                        offset={-100}
                    >{item.title}</Link>
                </li>)}

        </StyledMenu>
    </nav>
}

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
    }

    & a:hover {
      font-weight: 700;

      &::before {
        display: block;
      }
    }

    & + li {
      margin-left: 60px;
    }
  }


  ${(props) => props.theme.media.medium} {
    display: none;
  }
`