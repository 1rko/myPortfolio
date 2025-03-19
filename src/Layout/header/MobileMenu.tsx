import React, {useState} from "react";
import {menuItemsProps} from "./Header";
import styled, {css} from "styled-components";
import {Menu} from "./Menu";

export const MobileMenu = ({menuItems}: menuItemsProps) => {
    let [isOpen, setIsOpen] = useState(false)

    const onClickHandler = () => {
        setIsOpen((value) => !value)
    }

    return <StyledMobileMenu>
        <BurgerButton isOpen={isOpen} onClick={onClickHandler}>
            <span></span>
        </BurgerButton>

        <StyledMobileMenuWrapper isOpen={isOpen} onClick={() => {
            setIsOpen(false)
        }}>
            <Menu menuItems={menuItems}/>
        </StyledMobileMenuWrapper>
    </StyledMobileMenu>

}

const StyledMobileMenu = styled.div`
  display: none;

  ${(props) => props.theme.media.medium} {
    display: block;
  }
`

const BurgerButton = styled.button`
  position: relative;
  width: 70px;
  height: 100px;
  right: -15px;
  z-index: 999999;

  & span {
    display: inline-block;
    width: 20px;
    height: 2px;
    background-color: #fff;

    position: relative;

    transition: background-color ease-in-out 0.5s;

    ${(props) => props.isOpen && css <{ isOpen: boolean }>`
      background-color: rgba(255, 255, 255, 0);
    `}
    &::before {
      content: '';
      display: block;
      width: 20px;
      height: 2px;
      background-color: #fff;

      position: absolute;
      transform: translateY(-7px);
      transition: transform ease-in-out 0.5s;

      ${(props) => props.isOpen && css <{ isOpen: boolean }>`
        transform: rotate(-45deg);
      `}
    }

    &::after {
      content: '';
      display: block;
      width: 20px;
      height: 2px;
      background-color: #fff;

      position: absolute;
      transform: translateY(7px);
      transition: transform ease-in-out 0.5s;

      ${(props) => props.isOpen && css <{ isOpen: boolean }>`
        transform: rotate(45deg);
      `}
    }
  }
`

const StyledMobileMenuWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 999;

  width: 100vw;
  height: 100vh;
  overflow: hidden;

  transform: scale(0);

  background-color: ${(props) => props.theme.colors.primary + 'BB'};
  transition: transform ease-in-out 0.5s;


  ${(props) => props.isOpen && css <{ isOpen: boolean }>`
    transform: scale(1);
  `}
  & ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & li {
      text-align: center;
      margin: 0 0 20px;

      & a {
        font-weight: 400;
        font-size: 36px;
      }
    }
  }
`