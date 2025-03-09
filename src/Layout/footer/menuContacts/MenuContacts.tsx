import React from 'react';
import {FlexContainer} from "../../../Components/FlexContainer";
import {MenuContactsStyled} from "./MenuContacts.styled";
import {MenuContactsItem} from "./menuContactsItem/MenuContactsItem";

export const MenuContacts = () => {
    return (
        <MenuContactsStyled>
            <FlexContainer justifyContent={'space-between'}>
                <MenuContactsItem iconId={'phone'}
                                  iconWidth={"24"} iconHeight={"23"} iconViewBox={'0 0 24 23'}
                                  data={'+37529216365'}
                />

                <MenuContactsItem iconId={'mail'}
                                  iconWidth={"24"} iconHeight={"23"} iconViewBox={'0 0 24 23'}
                                  data={'irkoabc@gmail.com'}
                />

                <MenuContactsItem data={'г.Минск'}/>
            </FlexContainer>
        </MenuContactsStyled>
    );
};



