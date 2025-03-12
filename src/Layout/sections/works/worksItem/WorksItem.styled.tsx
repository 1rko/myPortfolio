import styled from "styled-components";

export const WorksItemStyled = styled.section`
  color: ${(props) => props.theme.colors.fifh};

  img {
    height: 330px;
    width: 330px;
    margin: 0 0 25px;
    
  }

  h3 {
    font-weight: 600;
    font-size: 20px;
    line-height: 150%;
    margin: 0 0 10px;
  }

  p {
    font-family: "Nunito Sans", sans-serif;
    font-weight: 400;
    font-size: 17px;
    line-height: 159%;
    margin: 0 0 47px;
  }
`

