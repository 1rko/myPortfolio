import styled from "styled-components";

type SectionTitleStyledPropsType = {
    color?: string
}

export const SectionTitleStyled = styled.h2<SectionTitleStyledPropsType>`
  font-family: 'Nunito';
  font-weight: 700;
  font-size: 48px;
  line-height: 120%;
  color: ${(props) => props.theme.colors.secondary};
  margin: 20px 0;

  & span {
    color: ${(props) => props.theme.colors.primary }
  }
`

