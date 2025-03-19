import React from 'react';
import {FlexContentContainer} from "../../../Components/FlexContentContainer";
import {Icon} from "../../../Components/Icon";
import styled from "styled-components";

const menuIcons = [
    {iconId: 'twitter'},
    {iconId: 'instagram'},
    {iconId: 'snapchat'},
    {iconId: 'facebook'},
    {iconId: 'youtube'}
]

export const MenuIcons = () => {
    return (
        <MenuIconsStyled>
            <FlexContentContainer gap={'20px'}>
                {menuIcons.map((item, index) => (
                        <Icon key={index}
                              iconId={item.iconId}
                        />
                    )
                )}
            </FlexContentContainer>
        </MenuIconsStyled>
    );
};

const MenuIconsStyled = styled.section`
  ${FlexContentContainer} {
    ${(props) => props.theme.media.medium} {
      gap: 10px;
    }
  }
`



