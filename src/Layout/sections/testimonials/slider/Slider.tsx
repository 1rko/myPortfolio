import React from 'react';
import {ContentContainer} from "../../../../Components/ContentContainer";
import {FlexContainer} from "../../../../Components/FlexContainer";
import ava from "../../../../Assets/icons/Testimony/Rectangle 124.webp";
import bg from "../../../../Assets/icons/texture background.svg";
import styled from "styled-components";
import {Icon} from "../../../../Components/Icon";
import {Ratio} from "./Ratio";

export const Slider = () => {
    return (
            <SliderWrapper>
                <Icon iconId={'quo'} width={'110'} height={'86'} viewBox={'0 0 110 86'}/>
                <FlexContainer flexDirection={'column'} alignItems={'center'}>
                    <ClientPhoto src={ava} alt={'Фото клиента'}/>
                    <ClientsNameStyled> Adams Ademola</ClientsNameStyled>
                    <ClientsCategoryStyled> Happy Client</ClientsCategoryStyled>
                    <ClientTestimoneStyled> “Everyone working in the office is very knowledgeable about all types of
                        dental work and options for your individual needs.” </ClientTestimoneStyled>
                    <Ratio starsCount={5}/>
                </FlexContainer>
            </SliderWrapper>
    );
};

export const SliderWrapper = styled.div`
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
`

export const ClientPhoto = styled.img`
  border-radius: 50%;
  width: 104px;
  height: 104px;
  margin-bottom: 20px;
`

export const ClientsNameStyled = styled.span`
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

