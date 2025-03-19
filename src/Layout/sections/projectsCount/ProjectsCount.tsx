import React from 'react';
import {ContentContainer} from "../../../Components/ContentContainer";
import {FlexContentContainer} from "../../../Components/FlexContentContainer";
import {ItemProjectsCount} from "./itemProjectsCount/ItemProjectsCount";
import styled from "styled-components";

const projectsCountData = [
    {
        count: 81,
        item: 'HAPPY CUSTOMERS'
    },
    {
        count: 97,
        item: 'Completed Projects'
    },
    {
        count: 50,
        item: 'Awards Won'
    }

]

export const ProjectsCount = () => {
    return (
        <ProjectsCountStyled>
            <ContentContainer>
                <FlexContentContainer justifyContent={'space-around'} gap={'15px'}>
                    {projectsCountData.map(item => (<ItemProjectsCount count={item.count} item={item.item}/>))}
                </FlexContentContainer>
            </ContentContainer>
        </ProjectsCountStyled>
    );
};

const ProjectsCountStyled = styled.section`
  min-height: 244px;
  background-color: ${(props)=>props.theme.colors.fourth}
`





