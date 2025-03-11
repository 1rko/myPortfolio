import React from 'react';
import {StyledHeader} from "./Header.styled"
import {Menu} from "./menu/Menu";
import {ContentContainer} from "../../Components/ContentContainer";
import {FlexContainer} from "../../Components/FlexContainer";

const menuItems = ['Home', 'About', 'Latest Works', 'Testimonials', 'Contact']

export type menuItemsProps = typeof menuItems

export const Header = () => {
    return (
        <StyledHeader>
            <ContentContainer>
                <FlexContainer justifyContent={'space-between'}  >
                    <a href=''>
                        <h2>DAMADAMS</h2>
                    </a>
                    <Menu menuItems={menuItems}/>
                </FlexContainer>
            </ContentContainer>
        </StyledHeader>
    )
        ;
};


