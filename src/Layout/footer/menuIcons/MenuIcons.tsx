import {FlexContentContainer} from "../../../Components/FlexContentContainer";
import {Icon} from "../../../Components/Icon";
import styled from "styled-components";
import {myTheme} from "../../../Styles/MyTheme.styled";

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
            <FlexContentContainer gap={'10px'} justifyContent={'space-between'}>
                {menuIcons.map((item) => (
                        <a href={''} key={item.iconId}>
                            <Icon
                                  iconId={item.iconId}
                            />
                        </a>
                    )
                )}
            </FlexContentContainer>
        </MenuIconsStyled>
    );
};

const MenuIconsStyled = styled.div`
  position: relative;

  & a {
    position: relative;
    top: 0;
    transition: ${myTheme.animations.transition};
    
    &:hover {
      top: -5px;
    }
  }
  
  ${FlexContentContainer} {
    ${(props) => props.theme.media.medium} {
      gap: 10px;
    }
  }
`



