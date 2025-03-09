import React from 'react';
import {ContentContainer} from "../../Components/ContentContainer";
import {FlexContainer} from "../../Components/FlexContainer";
import {ProjectsCountStyled} from "./ProjectsCount.styled";
import {ItemProjectsCount} from "./itemProjectsCount/ItemProjectsCount";

export const ProjectsCount = () => {
    return (
        <ProjectsCountStyled>
            <ContentContainer>
                <FlexContainer justifyContent={'space-around'}>
                    <ItemProjectsCount/>
                    <ItemProjectsCount/>
                    <ItemProjectsCount/>
                </FlexContainer>
            </ContentContainer>
        </ProjectsCountStyled>
    );
};





