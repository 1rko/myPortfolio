import {MenuContactsItem} from "./menuContactsItem/MenuContactsItem";
import styled from "styled-components";

const menuContacts = [
    {data: '+37529216365', iconId: 'phone'},
    {data: 'irkoabc@gmail.com', iconId: 'mail'},
    {data: 'Minsk', iconId: 'where'},
]

export const MenuContacts = () => {
    return (
        <MenuContactsStyled>
          {/*  <FlexContentContainer justifyContent={'space-between'} wrap={'wrap'}>*/}
                {menuContacts.map((item, index) => (
                    <MenuContactsItem key={index}
                                      iconId={item.iconId}
                                      iconWidth={"24"} iconHeight={"23"} iconViewBox={'0 0 24 23'}
                                      data={item.data}
                    />
                ))}
           {/* </FlexContentContainer>*/}
        </MenuContactsStyled>
    );
};

const MenuContactsStyled = styled.ul`
  display:flex;
  justify-content: space-between;
  
  width: 100%;
  padding: 0;
  color: ${(props) => props.theme.colors.menuItemText};

  & li {
    position: relative;
  }

  & li:first-child > a:after {
    content: '|';

    position: absolute;
    right: -60px;
  }

  & li:last-child > a:before {
    content: '|';

    position: absolute;
    left: -60px;
  }

  & li:first-child > a:after,
  & li:last-child > a:before{
    ${(props) => props.theme.media.medium} {
      left: -5000px;
    }
  }

  ${(props) => props.theme.media.medium} {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 11px;
  }
`

