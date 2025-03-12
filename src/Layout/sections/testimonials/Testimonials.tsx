import React from 'react';
import {ContentContainer} from "../../../Components/ContentContainer";
import {FlexContainer} from "../../../Components/FlexContainer";
import {Icon} from "../../../Components/Icon";
import {Slider} from "./slider/Slider";
import styled from "styled-components";

export const Testimonials = () => {
    return (
        <TestimonialsStyled>
            <ContentContainer>
                <FlexContainer alignItems={'center'}>
                    <div>
                        <Icon iconId={'quote'}/>
                        <Slider/>
                    </div>
                </FlexContainer>
            </ContentContainer>
        </TestimonialsStyled>
    );
};

export const TestimonialsStyled = styled.section`
  background-color: ${(props) => props.theme.colors.fourth};
`



