import React from 'react';
import {ContentContainer} from "../../Components/ContentContainer";
import {FlexContainer} from "../../Components/FlexContainer";
import {SkillsStyled} from "./Skills.styled";
import {SectionTitle} from "../../Components/sectionTitle/SectionTitle";

export const Skills = () => {
    return (
        <SkillsStyled>
            <ContentContainer>
                <FlexContainer>
                    <img src={''} alt={'Фото'}/>
                    <SectionTitle title={'I am a creative Graphic & UI Designer'}/>
                    <p>описание скиллов</p>
                </FlexContainer>
            </ContentContainer>
        </SkillsStyled>
    );
};



