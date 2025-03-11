import React from 'react';
import {ContentContainer} from "../../../../Components/ContentContainer";
import {FlexContainer} from "../../../../Components/FlexContainer";
import {SliderStyled} from "./Slider.styled";
import {Icon} from "../../../../Components/Icon";

export const Slider = () => {
    return (
        <SliderStyled>
            <ContentContainer>
                <FlexContainer>
                    <div>
                        <img src={''} alt={'Фото клиента'}/>
                        <span> Имя клиента</span>
                        <span> Счастливый клиент</span>
                        <p> Отзыв </p>
                        <img src={''} alt={'Рейтинг'}/> //Звездочки
                    </div>
                </FlexContainer>
            </ContentContainer>
        </SliderStyled>
    );
};



