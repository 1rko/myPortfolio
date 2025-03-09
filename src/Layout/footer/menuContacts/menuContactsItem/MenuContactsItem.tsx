import React from 'react';
import {MenuContactsItemStyled} from "./MenuContactsItem.styled";
import {Icon} from "../../../../Components/Icon";

type MenuContactsItemPropsType = {
    iconId?: string
    iconWidth?: string | undefined
    iconHeight?: string | undefined
    iconViewBox?: string | undefined
    data: string
}

export const MenuContactsItem = ({
                                     iconId,
                                     iconWidth = '24',
                                     iconHeight = '23',
                                     iconViewBox = '0 0 24 23',
                                     data
                                 }: MenuContactsItemPropsType) => {
    return (
        <MenuContactsItemStyled>
            <a href={''}>
                {iconId && <Icon iconId={iconId} width={iconWidth} height={iconHeight} viewBox={iconViewBox}/>}
                <span>{data}</span>
            </a>
        </MenuContactsItemStyled>

    );
};



