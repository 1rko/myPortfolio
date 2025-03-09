import React from 'react';
import {ContentContainer} from "../../Components/ContentContainer";
import {FlexContainer} from "../../Components/FlexContainer";
import {TestimonialsStyled} from "./Testimonials.styled";
import {Icon} from "../../Components/Icon";
import {Slider} from "./slider/Slider";

export const Testimonials = () => {
    return (
        <TestimonialsStyled>
            <ContentContainer>
                <FlexContainer>
                    <div>
                        <Icon iconId={''}/>
                        <Slider/>
                    </div>
                </FlexContainer>
            </ContentContainer>
        </TestimonialsStyled>
    );
};



