import React from 'react';
import {Icon} from "../../../../Components/Icon";
import styled from "styled-components";

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

const MenuContactsItemStyled = styled.li`
  & a {
    font-family: ${(props) => props.theme.fonts.secondary};
    font-weight: 500;
    font-size: 24px;
    color: ${(props) => props.theme.colors.menuItemText};

    & svg {
      margin-right: 20px;
    }

    ${(props) => props.theme.media.medium} {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 9px;
    }
  }
`


