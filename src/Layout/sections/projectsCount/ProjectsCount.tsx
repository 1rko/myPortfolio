import React from 'react';
import {ContentContainer} from "../../../Components/ContentContainer";
import {FlexContainer} from "../../../Components/FlexContainer";
import {ProjectsCountStyled} from "./ProjectsCount.styled";
import {ItemProjectsCount} from "./itemProjectsCount/ItemProjectsCount";

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
                <FlexContainer justifyContent={'space-around'} alignItems={'center'}>
                    {projectsCountData.map(item => (<ItemProjectsCount count={item.count} item={item.item}/>))}
                </FlexContainer>
            </ContentContainer>
        </ProjectsCountStyled>
    );
};





