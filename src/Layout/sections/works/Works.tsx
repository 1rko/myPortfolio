import React, {useState} from 'react';
import {ContentContainer} from "../../../Components/ContentContainer";
import {FlexContentContainer} from "../../../Components/FlexContentContainer";
import {WorksItem} from "./worksItem/WorksItem";
import img1 from "../../../Assets/icons/projectsImg/Rectangle 1181.webp";
import img2 from "../../../Assets/icons/projectsImg/Rectangle 1181(2).webp";
import img3 from "../../../Assets/icons/projectsImg/Rectangle 1181(3).webp";
import img4 from "../../../Assets/icons/projectsImg/Rectangle 1181(4).webp";
import img5 from "../../../Assets/icons/projectsImg/Rectangle 11812.webp";
import img6 from "../../../Assets/icons/projectsImg/Rectangle 11813.webp";
import styled from "styled-components";
import {myTheme} from "../../../Styles/MyTheme.styled";
import {font} from "../../../Common/font";
import {Tabs} from "./Tabs";
import {TabsItemPropsType} from "./TabItem";
import {AnimatePresence, motion} from "framer-motion"

const worksArray = [
    {
        src: img1,
        alt: 'work',
        title: 'Project title',
        description: 'UI, Art drection',
        type: 'react',
        id: 1
    },
    {
        src: img2,
        alt: 'work',
        title: 'Project title',
        description: 'UI, Art drection',
        type: 'landing',
        id: 2
    },
    {
        src: img3,
        alt: 'work',
        title: 'Project title',
        description: 'UI, Art drection',
        type: 'spa',
        id: 3
    },
    {
        src: img4,
        alt: 'work',
        title: 'Project title',
        description: 'UI, Art drection',
        type: 'landing',
        id: 4
    },
    {
        src: img5,
        alt: 'work',
        title: 'Project title',
        description: 'UI, Art drection',
        type: 'react',
        id: 5
    },
    {
        src: img6,
        alt: 'work',
        title: 'Project title',
        description: 'UI, Art drection',
        type: 'spa',
        id: 6
    }
]

const tabsItems = [
    {
        title: 'All',
        id: 'all'
    },
    {
        title: 'SPA',
        id: 'spa'
    },
    {
        title: 'React',
        id: 'react'
    },
    {
        title: 'Landing Page',
        id: 'landing'
    }
] as Array<TabsItemPropsType>

export type StatusType = 'all' | 'spa' | 'react' | 'landing'

export const Works = () => {
    let [status, setStatus] = useState('all' as StatusType)

    let works = worksArray;

    if (status !== 'all') {
        works = worksArray.filter(item => item.type == status)
    }

    const changeStatusHandler = (status: StatusType) => {
        setStatus(status)
    }

    return (
        <WorksStyled id={'works'}>
            <ContentContainer>
                <SectionTitleStyled>Latest Work</SectionTitleStyled>
                <Tabs tabsItems={tabsItems} tabClick={changeStatusHandler}/>
                <FlexContentContainer justifyContent={'space-around'} wrap={'wrap'} gap={'45px'}>

                    <AnimatePresence>
                        {works.map(item => (
                            <motion.div
                                key={item.id}
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                exit={{opacity: 0}}
                                layout>

                                <WorksItem
                                    key={item.id}
                                    title={item.title}
                                    src={item.src}
                                    alt={item.alt}
                                    description={item.description}
                                />
                            </motion.div>
                        ))}
                    </AnimatePresence>

                </FlexContentContainer>
            </ContentContainer>
        </WorksStyled>
    );
};

const WorksStyled = styled.section`
  margin: 0 0 195px 0;

  ${(props) => props.theme.media.medium} {
    margin: 0 0 112px 0;
  }
`

export const SectionTitleStyled = styled.h2`
  ${font({weight: 700, lineHeight: 1.11, fMin: 38, fMax: 48, color: myTheme.colors.titleDarkText})}
  white-space: nowrap;
  margin: 0;

  display: inline-block; //центрирование 
  position: relative;
  left: 50%;
  transform: translateX(-50%);
`


