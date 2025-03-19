import React from 'react';
import {ContentContainer} from "../../../Components/ContentContainer";
import portfolioPhoto from "../../../Assets/myPhoto.jpg";
import styled from "styled-components";
import {SectionTitleStyled} from "../../../Components/sectionTitle/SectionTitle.styled";
import {ButtonStyled} from "../../../Components/Button.styled";
import {SkillItem} from "./SkillItem";
import imgFigma from "../../../Assets/icons/Figma Icon.png"
import triangle2 from "../../../Assets/icons/Rectangle 398.svg"
import {FlexContentContainer} from "../../../Components/FlexContentContainer";

const skillsArray = [
    {
        icon: 'gsap',
        value: 99
    },
    {
        icon: 'bootstrap',
        value: 80
    },
    {
        icon: 'git',
        value: 90
    },
    {
        icon: 'react',
        value: 95
    },
    {
        icon: 'sass',
        value: 94
    },
    {
        icon: 'redux',
        value: 96
    },
    {
        icon: 'github',
        value: 98
    },
    {
        icon: 'css',
        value: 99
    },
    {
        icon: 'html',
        value: 96
    },
    {
        icon: 'js',
        value: 98
    },
    {
        icon: 'tailwind',
        value: 90
    },
    {
        icon: 'vscode',
        value: 50
    }
]

const imgF = {
    src: imgFigma as string | undefined,
    alt: 'figma'
}

export const Skills = () => {

    return (
        <SkillsStyled id={'about'}>
            <ContentContainer>
                <FlexContentContainer justifyContent={'space-around'} alignItems={'start'} gap={'20px'} wrap={'wrap'}>
                    <ImgBgcStyled>
                        <ImgPhotoForSkillsStyled  src={portfolioPhoto} alt={'Фото'}/>
                        <BgcTriangle2Styled src={triangle2} alt={'triangle'}/>
                    </ImgBgcStyled>

                    <SkillsTitleArea>
                        <SkillsSectionTitle>I am amazing Frontend Developer</SkillsSectionTitle>
                        <SkillsDescription>I’m a highly skilled frontend developer with a passion for crafting seamless, user-centric web experiences. With expertise in modern technologies like React, JavaScript, and CSS, I deliver visually stunning and highly functional interfaces. Known for attention to detail, clean code, and a collaborative mindset, I am the go-to professional for turning ideas into exceptional digital solutions.</SkillsDescription>
                        <FlexContentContainer justifyContent={'start'} gap={'20px'}>
                            <ButtonStyled>Download CV</ButtonStyled>
                            <ButtonSecondary>View Portfolio</ButtonSecondary>
                        </FlexContentContainer>
                    </SkillsTitleArea>
                </FlexContentContainer>

                <SkillsWrapperStyled>
                    <FlexContentContainer justifyContent={'center'} gap={'40px'} wrap={'wrap'} margin={'60px 0'}>

                        {skillsArray.map((item, index) => (
                            <SkillItem key={index} icon={item.icon} value={item.value}/>))}

                    </FlexContentContainer>
                </SkillsWrapperStyled>

            </ContentContainer>
        </SkillsStyled>
    )
        ;
};

export const SkillsStyled = styled.section`
  ${(props) => props.theme.colors.third};
  margin-bottom: 215px;

  & ${FlexContentContainer} {
    ${(props) => props.theme.media.medium} {
      justify-content: center;
      align-items: center;
    }
  }
`

const ImgBgcStyled = styled.div`
  position: relative;
`

const BgcTriangle2Styled = styled.img`
  position: absolute;
  bottom: -50px;
  right: -49px;
  z-index: -9999;

  ${(props) => props.theme.media.small} {
    width: 302px;
    bottom: -38px;
    right: -38px;
  }
`

const ImgPhotoForSkillsStyled = styled.img`
  border: 1px solid #000;
  border-radius: 20px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);

  width: 100%;
  max-width: 361px;
  min-width: 280px;
  max-height: 452px;
  min-height: 352px;
  object-fit: cover;

  ${(props) => props.theme.media.small} {
    width: 280px;
  }
`

export const SkillsTitleArea = styled.div`
  max-width: 600px;

  & ${FlexContentContainer} {
    ${(props) => props.theme.media.large} {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
  
  ${(props) => props.theme.media.large} {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

export const SkillsSectionTitle = styled(SectionTitleStyled)`
  max-width: 520px;
  text-transform: capitalize;
  ${(props) => props.theme.media.small} {
    margin-top: 87px;
  }
`

const SkillsDescription = styled.h2`
  font-weight: 400;
  font-size: 24px;
  letter-spacing: 0.06em;
  color: ${(props) => props.theme.colors.secondary};
  margin-bottom: 40px;
`

export const SkillsWrapperStyled = styled.div`
  width: 100%;
`

export const ButtonSecondary = styled(ButtonStyled)`
  background-color: ${(props) => props.theme.colors.menuItemText};
  color: ${(props) => props.theme.colors.primary};
  border: 1px solid ${(props) => props.theme.colors.primary}
`






