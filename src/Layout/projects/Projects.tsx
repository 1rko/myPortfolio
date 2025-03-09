import React from 'react';
import {ContentContainer} from "../../Components/ContentContainer";
import {FlexContainer} from "../../Components/FlexContainer";
import {ProjectsStyled} from "./Projects.styled";

export const Projects = () => {
    return (
        <ProjectsStyled>
            <ContentContainer>
                <FlexContainer>
                    Количество проектов
                </FlexContainer>
            </ContentContainer>
        </ProjectsStyled>
    );
};



