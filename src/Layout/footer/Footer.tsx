import React from 'react';
import {FlexContentContainer} from "../../Components/FlexContentContainer";
import {ContentContainer} from "../../Components/ContentContainer";
import {MenuIcons} from "./menuIcons/MenuIcons";
import {MenuContacts} from "./menuContacts/MenuContacts";
import styled from "styled-components";

export const Footer = () => {
    return (
        <StyledFooter>
            <ContentContainer>
                <nav>
                    <FlexContentContainer flexDirection={'column'} gap={'36px'} alignItems={'center'} justifyContent={'center'}>
                        <MenuContacts/>
                        <MenuIcons/>
                    </FlexContentContainer>
                </nav>
            </ContentContainer>
        </StyledFooter>
    )
};

const StyledFooter = styled.footer`
  min-height: 232px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.colors.primary};

  & nav {
    width: 100%;
  }

  & ${ContentContainer} {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  ${(props) => props.theme.media.medium} {
    padding: 89px 43px 96px 45px;
  }
`





