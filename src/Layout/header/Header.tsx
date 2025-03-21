import React, {useEffect, useRef, useState} from 'react';
import {Menu} from "./Menu";
import {ContentContainer} from "../../Components/ContentContainer";
import {FlexContentContainer} from "../../Components/FlexContentContainer";
import styled from "styled-components";
import {MobileMenu} from "./MobileMenu";
import {Link, animateScroll as scroll} from 'react-scroll';

export const menuItems = [
    {title: 'Home', linkId: 'home'},
    {title: 'About', linkId: 'about'},
    {title: 'Latest Works', linkId: 'works'},
    {title: 'Testimonials', linkId: 'testimonials'},
    {title: 'Contact', linkId: 'contact'}
]

export type menuItemType = {
    title: string
    linkId: string
}

export type menuPropsType = {
    menuItems: Array<menuItemType>
}

export const Header = () => {

    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    return (
        <StyledHeader>
            <ContentContainer>
                <FlexContentContainer justifyContent={'space-between'}>
                    <Link
                        smooth={true} // Плавная прокрутка
                        onClick={scrollToTop}
                    >
                        <LogoStyled>IRKO</LogoStyled>
                    </Link>
                    <Menu menuItems={menuItems}/>
                    <MobileMenu menuItems={menuItems}></MobileMenu>
                </FlexContentContainer>
            </ContentContainer>
        </StyledHeader>
    )
};

const StyledHeader = styled.header`
  background-color: ${(props) => props.theme.colors.primary};
  height: 100px;
  box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.05);
  z-index: 9999;
  width: 100%;

  position: fixed;
  top: 0;
  left: 0;

  & a {
    cursor: pointer;
  }
`

const LogoStyled = styled.h2`
  font-family: ${(props) => props.theme.fonts.headerLogo};
  font-weight: 400;
  font-style: normal;
  font-size: 36px;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.menuItemText};
`
