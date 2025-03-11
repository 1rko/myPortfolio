import React from 'react';
import {ContentContainer} from "../../../Components/ContentContainer";
import {FlexContainer} from "../../../Components/FlexContainer";
import {WorksStyled} from "./Works.styled";
import {WorksItem} from "./worksItem/WorksItem";
import {SectionTitle} from "../../../Components/sectionTitle/SectionTitle";

export const Works = () => {
    return (
        <WorksStyled>
            <ContentContainer>
                <SectionTitle title={'Latest Works'}/>
                <FlexContainer justify-content={'space-between'} wrap={'wrap'} gap={'10px'}>
                    <WorksItem/>
                    <WorksItem/>
                    <WorksItem/>
                    <WorksItem/>
                    <WorksItem/>
                    <WorksItem/>

                </FlexContainer>
            </ContentContainer>
        </WorksStyled>
    );
};



