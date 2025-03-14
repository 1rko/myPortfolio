import React from 'react';
import {ContentContainer} from "../../../Components/ContentContainer";
import {FlexContainer} from "../../../Components/FlexContainer";
import {WorksItem} from "./worksItem/WorksItem";
import img1 from "../../../Assets/icons/projectsImg/Rectangle 1181.webp";
import img2 from "../../../Assets/icons/projectsImg/Rectangle 1181(2).webp";
import img3 from "../../../Assets/icons/projectsImg/Rectangle 1181(3).webp";
import img4 from "../../../Assets/icons/projectsImg/Rectangle 1181(4).webp";
import img5 from "../../../Assets/icons/projectsImg/Rectangle 11812.webp";
import img6 from "../../../Assets/icons/projectsImg/Rectangle 11813.webp";
import styled from "styled-components";

const worksArray = [
    {
        src: img1,
        alt: 'work',
        title: 'Project title',
        description: 'UI, Art drection'
    },
    {
        src: img2,
        alt: 'work',
        title: 'Project title',
        description: 'UI, Art drection'
    },
    {
        src: img3,
        alt: 'work',
        title: 'Project title',
        description: 'UI, Art drection'
    },
    {
        src: img4,
        alt: 'work',
        title: 'Project title',
        description: 'UI, Art drection'
    },
    {
        src: img5,
        alt: 'work',
        title: 'Project title',
        description: 'UI, Art drection'
    },
    {
        src: img6,
        alt: 'work',
        title: 'Project title',
        description: 'UI, Art drection'
    }
]

export const Works = () => {
    return (
        <WorksStyled>
            <ContentContainer>
                <SectionTitleStyled>Latest Works</SectionTitleStyled>
                <FlexContainer justifyContent={'space-around'} wrap={'wrap'} >
                    {worksArray.map(item => (
                        <WorksItem
                            title={item.title}
                            src={item.src}
                            alt={item.alt}
                            description={item.description}
                        />
                    ))}
                </FlexContainer>
            </ContentContainer>
        </WorksStyled>
    );
};

export const WorksStyled = styled.section`
    margin: 176px 0 195px 0;
`

export const SectionTitleStyled = styled.h2`
  font-family:  ${(props) => props.theme.fonts.primary};
  font-weight: 700;
  font-size: 48px;
  line-height: 120%;
  color: ${(props) => props.theme.colors.secondary};
  transform: translateX(40%);
  margin: 0 0 74px;
`


