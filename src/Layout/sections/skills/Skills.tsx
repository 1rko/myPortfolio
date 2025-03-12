import React from 'react';
import {ContentContainer} from "../../../Components/ContentContainer";
import {FlexContainer} from "../../../Components/FlexContainer";
import {ImgPhotoStyled} from "../mainSection/ImgPhotoStyled";
import portfolioPhoto from "../../../Assets/myPhoto.jpg";
import styled from "styled-components";
import {SectionMainTitle} from "../mainSection/MainSection";
import {SectionTitleStyled} from "../../../Components/sectionTitle/SectionTitle.styled";
import {ButtonStyled} from "../../../Components/Button.styled";
import {Skill} from "../../../Components/Skill";
import imgFigma from "../../../Assets/icons/Figma Icon.png"
import triangle2 from "../../../Assets/icons/Rectangle 398.svg"

const imgF = {
    src: imgFigma as string | undefined,
    alt: 'figma'
}

export const Skills = () => {
    return (
        <SkillsStyled>
            <ContentContainer>
                <FlexContainer justifyContent={'space-between'} alignItems={'start;'} gap={'220'}>
                    <ImgBgcStyled>
                        <ImgPhotoForSkillsStyled src={portfolioPhoto} alt={'Фото'}/>
                        <BgcTriangle2Styled src={triangle2} alt={'triangle'}/>
                    </ImgBgcStyled>
                    <SkillsWrapperStyled>
                        <SkillsSectionTitle>I am a creative Graphic & UI Designer</SkillsSectionTitle>
                        <SkillsDescription>I’m a Graphics Designer,Designng has become my everyday affair. masting
                            styles,grids cant be less interesting,Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry.</SkillsDescription>
                        <FlexContainer justifyContent={'start'} gap={'20px'}>
                            <ButtonStyled>Download CV</ButtonStyled>
                            <ButtonSecondary>View Portfolio</ButtonSecondary>
                        </FlexContainer>
                        <FlexContainer justifyContent={'start'} gap={'20px'} wrap={'wrap'} margin={'40px 0'}>
                            <Skill icon={'photoshop'} value={50}/>
                            <Skill icon={'ai'} value={80}/>
                            <Skill img={imgF} value={70}/>
                        </FlexContainer>
                    </SkillsWrapperStyled>
                </FlexContainer>
            </ContentContainer>
        </SkillsStyled>
    );
};

export const SkillsStyled = styled.section`
  ${(props) => props.theme.colors.third};
  margin-bottom: 215px;
`

export const ImgPhotoForSkillsStyled = styled(ImgPhotoStyled)`
  width: 361px;
  height: 452px;
  position: static;
`

export const SkillsDescription = styled(SectionMainTitle)`

`

export const SkillsWrapperStyled = styled.div`
  max-width: 600px;
`

export const ButtonSecondary = styled(ButtonStyled)`
  background-color: ${(props) => props.theme.colors.third};
  color: ${(props) => props.theme.colors.primary};
  border: 1px solid ${(props) => props.theme.colors.primary}
`

export const SkillsSectionTitle = styled(SectionTitleStyled)`
  width: 520px;
  text-transform: capitalize;
`

export const ImgBgcStyled = styled.div`
 position: relative;
`

export const BgcTriangle2Styled = styled.img`
 position: absolute;
  top: 70px;
  left: 22px;
  z-index: -9999;
  
  
`


