import React from 'react';
import {FlexContainer} from "../../../Components/FlexContainer";
import {WorksItemStyled} from "./WorksItem.styled";

export const WorksItem = () => {
    return <WorksItemStyled>
        <FlexContainer flexDirection={'column'}>
            <img src={''} alt={'work'}/>
            <h3>Project title</h3>
            <p>UI, Art drection</p>
        </FlexContainer>
    </WorksItemStyled>;
}

