import styled from "styled-components";

type SectionTitleStyledPropsType={
    color?:string
}

export const SectionTitleStyled= styled.h2<SectionTitleStyledPropsType> `
  font-family: 'Nunito';
  font-weight: 700;
  font-size: 48px;
  line-height: 87%;
  text-align: center;
  color: ${(props)=>(props.color==='primary')?props.theme.colors.primary:props.theme.colors.secondary}
`

