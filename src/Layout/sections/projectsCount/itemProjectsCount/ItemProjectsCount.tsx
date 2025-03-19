import React from 'react';
import {ContentContainer} from "../../../../Components/ContentContainer";
import {FlexContentContainer} from "../../../../Components/FlexContentContainer";
import {ItemProjectsCountStyled} from "./ItemProjectsCount.styled";

type ItemProjectsCountPropsType={
    count: number
    item: string
}

export const ItemProjectsCount = ({count, item}:ItemProjectsCountPropsType) => {
    return (
        <ItemProjectsCountStyled>
                <FlexContentContainer flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
                    <span>{count}</span>
                    <h2>{item}</h2>
                </FlexContentContainer>
        </ItemProjectsCountStyled>
    );
};





