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
                    {projectsCountData.map(item => (<ItemProjectsCount key={item.item} count={item.count} item={item.item}/>))}
                </FlexContentContainer>
            </ContentContainer>
        </ProjectsCountStyled>
    );
};

const ProjectsCountStyled = styled.section`
  background-color: ${(props)=>props.theme.colors.projectCountBG};
  margin: 0 0 176px 0;

  ${(props) => props.theme.media.medium} {
    margin: 0 0 107px 0;
  }
`





