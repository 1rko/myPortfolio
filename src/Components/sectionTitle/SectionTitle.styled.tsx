import styled from "styled-components";
import {font} from "../../Common/font"
import {myTheme} from "../../Styles/MyTheme.styled";

type SectionTitleStyledPropsType = {
    color?: string
}

export const SectionTitleStyled = styled.h2<SectionTitleStyledPropsType>`
  ${font({family: myTheme.fonts.secondary, weight: 700, fMin: 32, fMax: 50, color: myTheme.colors.titleDarkText})}
  margin: 20px 0;

  & span {
    color: ${(props) => props.theme.colors.primary};
    text-align: center;
  }

  ${(props) => props.theme.media.medium} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`


