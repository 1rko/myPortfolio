import React from 'react';
import {ContentContainer} from "../../../../Components/ContentContainer";
import {FlexContentContainer} from "../../../../Components/FlexContentContainer";
import ava from "../../../../Assets/icons/Testimony/Rectangle 124.webp";
import bg from "../../../../Assets/icons/texture background.svg";
import styled from "styled-components";
import {Icon} from "../../../../Components/Icon";
import {Ratio} from "./Ratio";

const iconSize = {
    big: {
        width: '110',
        height: '86'
    },
    small: {
        width: '43',
        height: '35'
    }
}

export const Slider = () => {
    return (
        <SliderWrapper>
            <Icon iconId={'quobig'} width={iconSize.big.width} height={iconSize.big.height}
                  viewBox={`0 0 ${iconSize.big.width} ${iconSize.big.height}`}/>
            <Icon iconId={'quosmall'} width={iconSize.small.width} height={iconSize.small.height}
                  viewBox={`0 0 ${iconSize.small.width} ${iconSize.small.height}`}/>
            <FlexContentContainer flexDirection={'column'} alignItems={'center'}>
                <ClientPhotoWrapper>
                    <ClientPhoto src={ava} alt={'Фото клиента'}/>
                </ClientPhotoWrapper>
                <ClientsNameStyled> Adams Ademola</ClientsNameStyled>
                <ClientsCategoryStyled> Happy Client</ClientsCategoryStyled>
                <ClientTestimoneStyled> “Everyone working in the office is very knowledgeable about all types of
                    dental work and options for your individual needs.” </ClientTestimoneStyled>
                <Ratio starsCount={5}/>
            </FlexContentContainer>
        </SliderWrapper>
    );
};

const SliderWrapper = styled.div`
  background-color: #fff;
  background-image: url(${bg});
  border-radius: 140px 0;
  padding: 52px 57px;
  max-width: 726px;
  /* width: 100%;*/
  height: 100%;
  box-shadow: 0 54px 104px 0 rgba(0, 0, 0, 0.04);

  position: relative;

  & > svg {
    position: absolute;
    top: 65px;
    left: 80px;
  }

   & > svg:first-child {
    ${(props) => props.theme.media.medium} {
      display: none;
    }
  }

   & > svg:nth-child(2) {
    display: none;
    
    ${(props) => props.theme.media.medium} {
      display: block;
      top: 44px;
      left: 37px;
    }
  }

   ${(props) => props.theme.media.small} {
     padding: 30px 25px 25px;
   }
`

const ClientPhotoWrapper = styled.div`
  ${(props) => props.theme.media.small} {
    width: 74px; /* Размер контейнера */
    height: 74px;
    border-radius: 50%; /* Делаем контейнер круглым */
    overflow: hidden; /* Обрезаем всё, что выходит за пределы круга */
    position: relative;
  }
`

const ClientPhoto = styled.img`
  border-radius: 50%;
  width: 104px;
  height: 104px;
  margin-bottom: 20px;
  ${(props) => props.theme.media.small} {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Чтобы изображение заполнило контейнер */
    clip-path: inset(0 0 10% 0); /* Обрезаем нижние 25% */
  }
`

const ClientsNameStyled = styled.span`
  font-family: ${(props) => props.theme.fonts.third};
  font-weight: 600;
  font-size: 24px;
  line-height: 108%;
  text-align: center;
  color: ${(props) => props.theme.colors.six};
  margin-bottom: 4px;
`

export const ClientsCategoryStyled = styled.span`
  font-family: ${(props) => props.theme.fonts.third};
  font-weight: 400;
  font-size: 18px;
  line-height: 144%;
  text-align: center;
  color: ${(props) => props.theme.colors.primary};
  margin-bottom: 20px;
`

export const ClientTestimoneStyled = styled.p`
  font-family: ${(props) => props.theme.fonts.third};
  font-weight: 400;
  font-size: 18px;
  line-height: 144%;
  text-align: center;
  color: ${(props) => props.theme.colors.eight};
  margin: 0 0 12px;
`

