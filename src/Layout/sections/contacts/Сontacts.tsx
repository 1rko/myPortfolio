import React from 'react';
import {ContentContainer} from "../../../Components/ContentContainer";
import {FlexContainer} from "../../../Components/FlexContainer";
import {СontactsStyled} from "./Сontacts.styled";
import {SectionTitle} from "../../../Components/sectionTitle/SectionTitle";
import {Icon} from "../../../Components/Icon";

export const Contacts = () => {
    return (
        <СontactsStyled>
            <ContentContainer>
                <SectionTitle title={'Get in Touch'}/>
                <FlexContainer justifyContent={'space-around'}>
                    <form>
                        <FlexContainer flexDirection={'column'}>
                            <span> Your Email Adress</span>
                            <input/>
                            <span> Subject</span>
                            <input/>
                            <textarea/>
                            <input type={'Submit'}/>
                            <Icon iconId={'quotes'} width={'110'} height={'86'} viewBox={'0 0 110 86'}/>
                        </FlexContainer>
                    </form>
                    <div>Карта</div>
                </FlexContainer>
            </ContentContainer>
        </СontactsStyled>
    );
};



