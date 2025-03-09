import React from 'react';
import {FlexContainer} from "../../../Components/FlexContainer";
import {MenuIconsStyled} from "./MenuIcons.styled";
import {Icon} from "../../../Components/Icon";

export const MenuIcons = () => {
    return (
        <MenuIconsStyled>
            <FlexContainer>
                 <Icon iconId={'twitter'}/>
                 <Icon iconId={'instagram'}/>
                 <Icon iconId={'snapchat'}/>
                 <Icon iconId={'facebook'}/>
                 <Icon iconId={'youtube'}/>
            </FlexContainer>
        </MenuIconsStyled>
    );
};



