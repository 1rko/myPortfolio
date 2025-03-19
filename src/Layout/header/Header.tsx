import React from 'react';
import {Menu} from "./Menu";
import {ContentContainer} from "../../Components/ContentContainer";
import {FlexContentContainer} from "../../Components/FlexContentContainer";
import styled from "styled-components";
import {MobileMenu} from "./MobileMenu";
import { Link } from 'react-scroll';

const menuItems = [
    {title: 'Home', link: 'home'},
    {title: 'About', link: 'about'},
    {title: 'Latest Works', link: 'works'},
    {title: 'Testimonials', link: 'testimonials'},
    {title: 'Contact', link: 'contact'}
]

export type menuItemsProps = typeof menuItems

export const Header = () => {
    return (
        <StyledHeader>
            <ContentContainer>
                <FlexContentContainer justifyContent={'space-between'}>
                    <Link
                        to={`home`}
                        smooth={true} // Плавная прокрутка
                        duration={500} // Длительность анимации
                        offset={-100}
                    ><LogoStyled>IRKO</LogoStyled></Link>

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
  
  & a{
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
