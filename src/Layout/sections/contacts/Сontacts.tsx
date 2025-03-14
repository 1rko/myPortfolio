import React from 'react';
import {ContentContainer} from "../../../Components/ContentContainer";
import {FlexContainer} from "../../../Components/FlexContainer";
import styled from "styled-components";
import {ButtonStyled} from "../../../Components/Button.styled";
import map from "../../../Assets/icons/Testimony/Mapsicle Map.png";

export const Contacts = () => {
    return (
        <ContactsStyled>
            <ContentContainer>
                <ContactsSectionTitle> Get in Touch</ContactsSectionTitle>
                <FlexContainer justifyContent={'space-between'}>
                    <FormStyled>
                        <FlexContainer flexDirection={'column'} alignItems={'start'}>

                            <label htmlFor="address">Your Email Adress</label>
                            <input type="text" id="address" name="address" placeholder="something@website.com"/>

                            <label htmlFor="subject">Subject</label>
                            <input type="text" id="subject" name="subject" placeholder="Question about your article"/>

                            <textarea id="message" name="message" placeholder="Your message starts with…"></textarea>

                            <ButtonSubmitStyled type="submit">Send</ButtonSubmitStyled>
                        </FlexContainer>
                    </FormStyled>
                    <MapStyled src={map} alt={'Map'}></MapStyled>
                </FlexContainer>
            </ContentContainer>
        </ContactsStyled>
    );
};

export const ContactsStyled = styled.section`
  margin: 100px 0 160px;
`

export const ContactsSectionTitle = styled.div`
  font-family: ${(props) => props.theme.fonts.primary};

  font-weight: 700;
  font-size: 48px;
  line-height: 87%;
  color: ${(props) => props.theme.colors.secondary};
  transform: translateX(40%);
  margin: 0 0 80px;
`

export const FormStyled = styled.form`
  font-family: ${(props) => props.theme.fonts.primary};
  font-weight: 400;
  font-size: 16px;
  color: ${(props) => props.theme.colors.nine};
  max-width: 523px;
  width: 100%;

  input, textarea {
    border: 1px solid ${(props) => props.theme.colors.third};
    padding: 13px;
    box-sizing: border-box;

    &::placeholder {
      font-family: ${(props) => props.theme.fonts.primary};
      font-weight: 400;
      font-size: 18px;
      color: ${(props) => props.theme.colors.nine};
      opacity: 0.6;
    }

    &:focus-visible {
      outline: none; /* Убираем стандартный outline */
      border: 2px solid ${(props) => props.theme.colors.eight};
    }
  }

  input {
    width: 524px;
    height: 50px;
  }

  textarea {
    width: 524px;
    height: 176px;
    margin: 56px 0 40px;
    resize: none;
  }

  label {
    margin-bottom: 7px;
  }

  input + label {
    margin-top: 33px;
  }
`
export const ButtonSubmitStyled = styled(ButtonStyled)`

`

export const MapStyled = styled.img`
  width: 512px;
  height: 506px;
`







