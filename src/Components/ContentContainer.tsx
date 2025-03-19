import styled from "styled-components";

export const ContentContainer = styled.div`
  max-width: 1140px;
  width: 100%;
  height: 100%;
  border: 2px solid green;
  position: relative;
  margin: 0 auto;
  box-sizing: border-box;

  @media (max-width: 1140px) {
        padding: 0 15px;
  }
`