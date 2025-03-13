import React from 'react';
import {Icon} from "../../../../Components/Icon";
import styled from "styled-components";

type RatioPropsType = {
    starsCount: number
}

export const Ratio = ({starsCount}: RatioPropsType) => {
    let r = []
    for (let i = 0; i < starsCount; i++) {
        r.push(<Icon iconId={'star'} width={'26'} height={'26'} viewBox={'0 0 26 26'}/>)
    }
    return (
        <RatioStyled>
            {r}
        </RatioStyled>
    );
};

export const RatioStyled = styled.div`
  svg+svg  {
   margin-left: 6px;
  }
`