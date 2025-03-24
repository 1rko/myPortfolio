import {Icon} from "../../../../Components/Icon";
import styled from "styled-components";
import {font} from "../../../../Common/font";
import {myTheme} from "../../../../Styles/MyTheme.styled";

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
  position: relative;

  & a {
    ${font({family: myTheme.fonts.secondary, weight: 500, fMin: 24, fMax: 24, color: myTheme.colors.menuItemText})}

    position: relative;
    top: 0;
    transition: top 0.3s ease-in-out;

    &:hover {
      top: -5px;
    }

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


