import React from 'react';
import {ContentContainer} from "../../../Components/ContentContainer";
import {FlexContentContainer} from "../../../Components/FlexContentContainer";
import portfolioPhoto from "../../../Assets/myPhoto.jpg";
import styled from "styled-components";
import triangle from "../../../Assets/icons/Rectangle 396@2x.png"
import {ButtonStyled} from "../../../Components/Button.styled";
import {SectionTitleStyled} from "../../../Components/sectionTitle/SectionTitle.styled";
import {font} from "../../../Common/font"
import {myTheme} from "../../../Styles/MyTheme.styled";


export const MainSection = () => {
    return (
        <MainSectionStyled id={'home'}>
            <ContentContainer>
                <FlexContentContainer justifyContent={'space-around'} wrap={'wrap-reverse'} gap={'87px'}>
                    <MainSectionContentWrapper>
                        <SubtitleStyled>Hello,</SubtitleStyled>
                        <SectionTitleStyled>I’m <span>Irina Shkirando</span></SectionTitleStyled>
                        <SectionMainTitle>I’m Best of The BEST Frontend Developer </SectionMainTitle>
                        <ButtonStyled>Download CV</ButtonStyled>
                    </MainSectionContentWrapper>
                    <ImgPhotoAndBackgroundWrapper>
                        {/* <ImgPhotoStyled/>*/}
                        <PhotoImg src={portfolioPhoto} alt={'Фото'}/>
                        <BcgImg src={triangle} alt={'Фон'}/>
                        {/*<StyledBackground/>*/}
                    </ImgPhotoAndBackgroundWrapper>
                </FlexContentContainer>
            </ContentContainer>
            {/*<PhotoImg src={triangle} alt={''}/>*/}
        </MainSectionStyled>
    );
};

const MainSectionStyled = styled.section`
  margin-top: 200px;
  margin-bottom: 138px;


  & ${FlexContentContainer} {
    ${(props) => props.theme.media.medium} {
      justify-content: center;
      align-items: center;
      flex-wrap: wrap-reverse;
    }
  }
`

const MainSectionContentWrapper = styled.section`
  width: 480px;
  height: 100%;

  ${(props) => props.theme.media.medium} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

const SubtitleStyled = styled.span`
  ${font({weight: 400, fMin: 28, fMax: 28, color: '#000'})}
`

const SectionMainTitle = styled.h2`
  ${font({weight: 400, fMin: 18, fMax: 24, color: myTheme.colors.mainText})}
  letter-spacing: 0.06em;
  margin-bottom: 40px;

  ${(props) => props.theme.media.medium} {
    text-align: center;
  }
`

const ImgPhotoAndBackgroundWrapper = styled.div`
  position: relative;
`

/*const StyledBackground = styled.div`
  position: absolute;
  top: -64px;
  right: -127px;
  background-image: url("data:image/svg+xml,%3csvg%20width='621'%20height='692'%20viewBox='0%200%20621%20692'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M360.942%20300.848L621%200V692H0L360.942%20300.848Z'%20fill='%23FB3F5C'%20fill-opacity='0.5'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  /!*min-height: 376px;
  max-width: 621px;
  width: 100%;*!/
  
  width: 621px;
  height: 692px;
  z-index: -9999;

  /!*${(props) => props.theme.media.medium} {
    width: 590px;
    height: 530px;
  }*!/

  ${(props) => props.theme.media.small} {
    width: 307px;
    height: 376px;
  }
  
`*/

const PhotoImg = styled.img`
  position: relative;
  top: -8px;
  right: 0;
  z-index: 0;

  border: 1px solid #000;
  border-radius: 20px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);

  width: 100%;
  //max-width: 432px;
  min-width: 200px;
  max-height: 541px;
  min-height: 300px;
  object-fit: cover;

  ${(props) => props.theme.media.large} {
    position: static;
  }

  ${(props) => props.theme.media.small} {
    width: 200px;
  }
`


const BcgImg = styled.img`
  position: absolute;
  //top: -64px;
  right: -127px;
  left: -27px;
  bottom: -19px;
  z-index: -9999;

  max-width: 621px;
  max-height: 692px;
  width: 140%;

  //min-height: 376px;
  //min-height: 692px;
  object-fit: cover;

  ${(props) => props.theme.media.large} {
    //position: static;
  }

  ${(props) => props.theme.media.small} {
    max-height: 376px;
    bottom: -20px;
    width: 140%;
  }
`


