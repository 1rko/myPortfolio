import React from 'react';
import {ContentContainer} from "../../../Components/ContentContainer";
import {FlexContentContainer} from "../../../Components/FlexContentContainer";
import styled from "styled-components";
import {ButtonStyled} from "../../../Components/Button.styled";
import map from "../../../Assets/icons/Testimony/Mapsicle Map.png";
import {font} from "../../../Common/font"
import {myTheme} from "../../../Styles/MyTheme.styled";

export const Contacts = () => {
    return (
        <ContactsStyled id={'contact'}>
            <ContentContainer>
                <ContactsSectionTitle> Get in Touch</ContactsSectionTitle>
                <FlexContentContainer justifyContent={'space-between'} wrap={'wrap'} gap={'50px'}>
                    <FormStyled>
                        <FlexContentContainer flexDirection={'column'} alignItems={'start'}>

                            <label htmlFor="address">Your Email Adress</label>
                            <Field type="text" id="address" name="address" placeholder="something@website.com"/>

                            <label htmlFor="subject">Subject</label>
                            <Field type="text" id="subject" name="subject" placeholder="Question about your article"/>

                            <Field as='textarea' id="message" name="message"
                                   placeholder="Your message starts with…"></Field>

                            <ButtonSubmitStyled type="submit">Send</ButtonSubmitStyled>
                        </FlexContentContainer>
                    </FormStyled>
                    <MapStyled src={map} alt={'Map'}></MapStyled>
                </FlexContentContainer>
            </ContentContainer>
        </ContactsStyled>
    );
};

export const ContactsStyled = styled.section`
  margin: 0 0 160px;

  ${(props) => props.theme.media.medium} {
    margin: 0 0 74px;
  }
`

export const ContactsSectionTitle = styled.div`
  ${font({weight: 700, lineHeight: 0.87, fMin: 28, fMax: 48, color: myTheme.colors.titleDarkText})}
  white-space: nowrap;
  transform: translateX(40%);
  margin: 0 0 80px;

  ${(props) => props.theme.media.medium} {
    text-transform: uppercase;
  }
`

export const FormStyled = styled.form`
  font-family: ${(props) => props.theme.fonts.main};
  font-weight: 400;
  font-size: 16px;
  color: ${(props) => props.theme.colors.fieldLabel};
  max-width: 523px;
  width: 100%;

  label {
    margin-bottom: 7px;
  }

  input + label {
    margin-top: 33px;
  }

    /*input, textarea {
    border: 1px solid ${(props) => props.theme.colors.menuItemText};
    padding: 13px;
    box-sizing: border-box;


    &::placeholder {
      font-family: ${(props) => props.theme.fonts.primary};
      font-weight: 400;
      font-size: 18px;
      color: ${(props) => props.theme.colors.fieldLabel};
      opacity: 0.6;
    }

    &:focus-visible {
      outline: 2px solid ${(props) => props.theme.colors.activeFieldBorder};
    }
  }

  input {
    width: 524px;
    height: 50px;
  }
  */

  textarea {
    ${(props) => props.theme.media.medium} {
      width: 350px;
      height: 120px;
    }
    
    ${(props) => props.theme.media.small} {
      width: 100%;
      height: 105px;
    }
  }
`

const Field = styled.input`
  border: 1px solid ${(props) => props.theme.colors.fieldBorder};
  padding: 13px;
  box-sizing: border-box;

  width: 524px;
  height: 50px;

  &::placeholder {
    font-family: ${(props) => props.theme.fonts.main};
    font-weight: 400;
    font-size: 18px;
    color: ${(props) => props.theme.colors.fieldLabel};
    opacity: 0.6;
  }

  &:focus-visible {
    outline: 2px solid ${(props) => props.theme.colors.activeFieldBorder};
  }

  /* Общие медиазапросы для всех типов полей */
  ${(props) => props.theme.media.medium} {
    width: 350px;
    height: 40px;
  }

  ${(props) => props.theme.media.small} {
    width: 100%;
    height: 30px;
  }

  /* Стили для textarea */
  ${(props) =>
    props.as === 'textarea' &&
    `
    width: 524px;
    height: 176px;
    margin: 56px 0 40px;
    resize: none;
  `}
`;

export const ButtonSubmitStyled = styled(ButtonStyled)`
  ${(props) => props.theme.media.small} {
    margin: 0 auto;
  }
`

export const MapStyled = styled.img`
  width: 512px;
  height: 506px;
  @media screen and (max-width: 520px){
    width: 100%;
    height: 100%;
  }
`







