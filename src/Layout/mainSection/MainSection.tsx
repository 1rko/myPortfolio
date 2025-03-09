import React from 'react';
import {ContentContainer} from "../../Components/ContentContainer";
import {FlexContainer} from "../../Components/FlexContainer";
import {MainSectionStyled} from "./MainSection.styled";
import {SectionTitle} from "../../Components/sectionTitle/SectionTitle";
import {ImgPhotoStyled} from "./ImgPhotoStyled";
import {ButtonPrimary} from "../../Components/buttonPrimary/ButtonPrimary";
import {Icon} from "../../Components/Icon";

export const MainSection = () => {
    return (
        <MainSectionStyled>
            <ContentContainer>
                <FlexContainer justifyContent={'space-between'}>
                    <div>
                        <span>Привет</span>
                        <SectionTitle title={'Я'}/>
                        <SectionTitle title={'Ирина Шкирандо'} color={'primary'}/>
                        <p>я Frontend-разработчик</p>
                        <ButtonPrimary title={'Download CV'}/>
                    </div>
                    <>
                        <ImgPhotoStyled src={''} alt={'Фото'}/>
                        <Icon iconId={'triangle'} width={'621'} height={'692'} viewBox={'0 0 621 692'}/>
                    </>
                </FlexContainer>
            </ContentContainer>
        </MainSectionStyled>
    );
};



