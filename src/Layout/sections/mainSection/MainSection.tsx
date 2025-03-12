import React from 'react';
import {ContentContainer} from "../../../Components/ContentContainer";
import {FlexContainer} from "../../../Components/FlexContainer";
import {MainSectionStyled} from "./MainSection.styled";
import {SectionTitle} from "../../../Components/sectionTitle/SectionTitle";
import {ImgPhotoStyled} from "./ImgPhotoStyled";
import {ButtonPrimary} from "../../../Components/buttonPrimary/ButtonPrimary";
import {Icon} from "../../../Components/Icon";
import portfolioPhoto from "../../../Assets/myPhoto.jpg";
import styled from "styled-components";
import iconsSprite from "../../../Assets/icons/Rectangle 396.svg"
import {SectionTitleStyled} from "../../../Components/sectionTitle/SectionTitle.styled";
import {ButtonStyled} from "../../../Components/Button.styled";

export const MainSection = () => {
    return (
        <MainSectionStyled>
            <ContentContainer>
                <FlexContainer justifyContent={'space-between'} gap={'240px'}>
                    <div>
                        <SubtitleStyled>Hello,</SubtitleStyled>
                        <SectionTitleStyled>I’m <span>Daniella Adams</span></SectionTitleStyled>
                        <SectionMainTitle>I’m a Graphics Designer,Designng has become my everyday affair. masting
                            styles,grids cant be less interesting.</SectionMainTitle>
                        <ButtonStyled>Download CV</ButtonStyled>
                    </div>
                    <StyledBackground>
                        <ImgPhotoStyled src={portfolioPhoto} alt={'Фото'}/>
                        {/*<img src={iconsSprite} alt={''}/>*/}
                        {/*<Icon iconId={'triangle'} width={'50'} height={'50'} viewBox={'0 0 50 50 '}/>*/}
                    </StyledBackground>
                </FlexContainer>
            </ContentContainer>
            <BgcImg src={iconsSprite} alt={''}/>
        </MainSectionStyled>
    );
};

export const SubtitleStyled = styled.span`
  font-family: "Nunito Sans", sans-serif;;
  font-weight: 400;
  font-size: 28px;
  color: #000;
`

export const SectionMainTitle = styled.h2`
  /*  font-family: var(--font-family);*/
  font-weight: 400;
  font-size: 24px;
  letter-spacing: 0.06em;
  text-transform: lowercase;
  color: ${(props) => props.theme.colors.secondary};
  margin-bottom: 40px;
`

export const StyledBackground = styled.div`
  position: relative;
  width: 50%;
  height: 100%;
`

export const BgcImg = styled.img`
  position: absolute;
  right: 0;
  left: 50%;
  top: 130px;
  width: 50%;
  height: 692px;
  object-fit: cover;
  object-position: left;
  z-index: -9999;
`

