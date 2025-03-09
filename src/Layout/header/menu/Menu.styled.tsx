import styled from "styled-components";

export const StyledMenu = styled.ul`
  font-family: "Nunito Sans", sans-serif; 
  font-weight: 400;
  font-size: 24px;
  color: ${(props)=>props.theme.colors.third};
  display: flex;
  justify-content: space-between;
  align-items: center;

  & li {
   
    & a {
      font-weight: 400;
      font-size: 24px;
      color: #f8eeef;
    }

    & a:hover {
      font-weight: 700;
    }
  }

  & li + li {
    margin-left: 60px;
  }
`