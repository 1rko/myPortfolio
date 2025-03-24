import {StatusType} from "./Works";
import styled from "styled-components";
import {myTheme} from "../../../Styles/MyTheme.styled";
import {font} from "../../../Common/font";

export type TabsItemPropsType = {
    title: string
    id: StatusType
    tabClick: (status: StatusType) => void
}

export const TabItem = ({title, id, tabClick}: TabsItemPropsType) => {
    return (
        <S_TabButton href={'#'} onClick={() => tabClick(id)}>
            <li key={id}>{title}</li>
        </S_TabButton>
    );
};

type S_TabButtonPropsType={
    onClick: ()=>void
}

const S_TabButton = styled.button<S_TabButtonPropsType>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  ${font({weight: 400, fMin: 20, fMax: 24, color: myTheme.colors.titleDarkText})};
  white-space: nowrap;
  cursor: pointer;
  z-index: 0;

  &::before {
    content: '';
    width: 115%;
    height: 15px;
    border-radius: 10px;
    position: absolute;
    bottom: -6px;
    left: -4px;
    background-color: ${myTheme.colors.projectCountBG};
    z-index: -9;
  }
  
  transform: translateY(0);
  box-shadow: none;
  transition: ${myTheme.animations.transition};

  &:hover{
    transform: translateY(-3px);
   /* box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);*/
    &::before {
      bottom: 0;
    }
  }
`