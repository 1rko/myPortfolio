import React from 'react';
import {ContentContainer} from "../../../Components/ContentContainer";
import {FlexContainer} from "../../../Components/FlexContainer";
import {ItemProjectsCountStyled} from "./ItemProjectsCount.styled";

export const ItemProjectsCount = () => {
    return (
        <ItemProjectsCountStyled>
            <ContentContainer>
                <FlexContainer flexDirection={'column'}>
                    <span>81</span>
                    <h2>HAPPY CUSTOMERS</h2>
                </FlexContainer>
            </ContentContainer>
        </ItemProjectsCountStyled>
    );
};





