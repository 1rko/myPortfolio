import React from 'react';
import {StyledFooter} from "./Footer.styled";
import {FlexContainer} from "../../Components/FlexContainer";
import {ContentContainer} from "../../Components/ContentContainer";
import {MenuIcons} from "./menuIcons/MenuIcons";
import {MenuContacts} from "./menuContacts/MenuContacts";

export const Footer = () => {
    return (
        <StyledFooter>
            <ContentContainer>
                <FlexContainer flexDirection={'column'} gap={'36px'}>
                    <nav>
                        <MenuContacts/>
                        <MenuIcons/>
                    </nav>
                </FlexContainer>
            </ContentContainer>
        </StyledFooter>
)
};




