import React from 'react';
import {ContentContainer} from "../../../Components/ContentContainer";
import {FlexContainer} from "../../../Components/FlexContainer";
import {Slider} from "./slider/Slider";
import styled from "styled-components";

export const Testimonials = () => {
    return (
        <TestimonialsStyled>
            <ContentContainer>
                <FlexContainer alignItems={'center'} justifyContent={'center'}>
                    <TestimonialWrapper>
                        <Slider/>
                    </TestimonialWrapper>
                </FlexContainer>
            </ContentContainer>
        </TestimonialsStyled>
    );
};

export const TestimonialsStyled = styled.section`
  background-color: ${(props) => props.theme.colors.fourth};
`

export const TestimonialWrapper = styled.div`
  padding: 90px 0 110px 0;
`



