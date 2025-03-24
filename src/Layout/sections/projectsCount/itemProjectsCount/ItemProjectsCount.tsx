import {FlexContentContainer} from "../../../../Components/FlexContentContainer";
import {font} from "../../../../Common/font";
import {myTheme} from "../../../../Styles/MyTheme.styled";
import styled from "styled-components";

type ItemProjectsCountPropsType = {
    count: number
    item: string
}

export const ItemProjectsCount = ({count, item}: ItemProjectsCountPropsType) => {
    return (
        <ItemProjectsCountStyled>
            <FlexContentContainer flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
                <span>{count + '+'}</span>
                <h2>{item}</h2>
            </FlexContentContainer>
        </ItemProjectsCountStyled>
    );
};

const ItemProjectsCountStyled = styled.div`

  text-transform: uppercase;
  padding: 55px 0 66px;
  text-align: center;

  & span, h2 {
    white-space: nowrap;

    ${(props) => props.theme.media.xlarge} {
      white-space: nowrap;
    }
  }

  span {
    ${font({family: myTheme.fonts.secondary, weight: 700, fMin: 12, fMax: 48, color: myTheme.colors.titleDarkText})}
  }

  h2 {
    ${font({family: myTheme.fonts.secondary, weight: 700, fMin: 11, fMax: 36, color: myTheme.colors.titleDarkText})}
  }

  ${(props) => props.theme.media.medium} {
    padding: 29px 0 27px;
  }
`



