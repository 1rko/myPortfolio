import {ContentContainer} from "../../../Components/ContentContainer";
import {FlexContentContainer} from "../../../Components/FlexContentContainer";
import {Slider} from "./slider/Slider";
import styled from "styled-components";

export const Testimonials = () => {
    return (
        <TestimonialsStyled id={'testimonials'}>
            <ContentContainer>
                <FlexContentContainer alignItems={'center'} justifyContent={'center'}>
                    <TestimonialWrapper>
                        <Slider/>
                    </TestimonialWrapper>
                </FlexContentContainer>
            </ContentContainer>
        </TestimonialsStyled>
    );
};

export const TestimonialsStyled = styled.section`
  background-color: ${(props) => props.theme.colors.projectCountBG};
  margin: 0 0 100px;

  ${(props) => props.theme.media.medium} {
    margin: 0 0 60px;
  }
`

export const TestimonialWrapper = styled.div`
  padding: 90px 0 110px 0;
`



