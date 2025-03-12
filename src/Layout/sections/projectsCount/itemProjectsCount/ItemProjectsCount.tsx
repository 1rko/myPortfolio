import React from 'react';
import {ContentContainer} from "../../../../Components/ContentContainer";
import {FlexContainer} from "../../../../Components/FlexContainer";
import {ItemProjectsCountStyled} from "./ItemProjectsCount.styled";

type ItemProjectsCountPropsType={
    count: number
    item: string
}

export const ItemProjectsCount = ({count, item}:ItemProjectsCountPropsType) => {
    return (
        <ItemProjectsCountStyled>
            <ContentContainer>
                <FlexContainer flexDirection={'column'}>
                    <span>{count}</span>
                    <h2>{item}</h2>
                </FlexContainer>
            </ContentContainer>
        </ItemProjectsCountStyled>
    );
};





