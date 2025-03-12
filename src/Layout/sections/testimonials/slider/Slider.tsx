import React from 'react';
import {ContentContainer} from "../../../../Components/ContentContainer";
import {FlexContainer} from "../../../../Components/FlexContainer";
import ava from "../../../../Assets/icons/Testimony/Rectangle 124.webp";
import styled from "styled-components";

export const Slider = () => {
    return (
        <SliderStyled>
            <ContentContainer>
                <SliderWrapper>
                    <FlexContainer flexDirection={'column'} alignItems={'center'}>
                        <ClientPhoto src={ava} alt={'Фото клиента'}/>
                        <ClientsNameStyled> Имя клиента</ClientsNameStyled>
                        <ClientsCategoryStyled> Счастливый клиент</ClientsCategoryStyled>
                        <ClientTestimoneStyled> Отзыв </ClientTestimoneStyled>
                        <Ratio src={''} alt={'Рейтинг'}/> //Звездочки
                    </FlexContainer>
                </SliderWrapper>
            </ContentContainer>
        </SliderStyled>
    );
};

export const SliderStyled = styled.article`
  background-color: ${(props) => props.theme.colors.fourth};
`

export const SliderWrapper = styled.div`
background-color: #fff;    
  border-bottom-right-radius: 50%;
  border-top-left-radius: 50%;
  padding: 52px 57px;
`

export const ClientPhoto = styled.img`
  border-radius: 50%;
  width: 104px;
  height: 104px;
`

export const ClientsNameStyled = styled.span`

`

export const ClientsCategoryStyled = styled.span`

`

export const ClientTestimoneStyled = styled.p`

`

export const Ratio = styled.img`

`

