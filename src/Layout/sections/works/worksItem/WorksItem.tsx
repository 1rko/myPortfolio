import React from 'react';
import {FlexContainer} from "../../../../Components/FlexContainer";
import {WorksItemStyled} from "./WorksItem.styled";

type WorksItemPropsType = {
    src: string
    alt:string
    title: string
    description: string
}

export const WorksItem = ({src, alt, title, description}: WorksItemPropsType) => {
    return <WorksItemStyled>
        <FlexContainer flexDirection={'column'} alignItems={'start'} >
            <img src={src} alt={alt}/>
            <h3>{title}</h3>
            <p>{description}</p>
        </FlexContainer>
    </WorksItemStyled>;
}

