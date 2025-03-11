import React from 'react';
import {ProgressLineStyled} from "./ProgressLine.styled";
import styled from "styled-components";

type ProgressLineStyledProps = {
    value: number
}

export const ProgressLine = ({value}: ProgressLineStyledProps) => {
    return (
        <ProgressLineStyled>
            <ProgressValueStyled value={value}>{value + '%'}</ProgressValueStyled>
            <ProgressContainerStyled>
                <ProgressBarStyled value={value}></ProgressBarStyled>
            </ProgressContainerStyled>
        </ProgressLineStyled>
    );
};

export const ProgressContainerStyled = styled.div`
  width: 210px;
  height: 8px;
  background-color: #C4C4C4;
  border-radius: 5px;
  overflow: hidden;
`

type ProgressBarStyledProps = {
    value: number
}

export const ProgressBarStyled = styled.div<ProgressBarStyledProps>`
  width: ${props => (props.value) + '%'};
  height: 100%;
  background-color: ${(props) => props.theme.colors.primary};
  transition: width 0.3s ease;`

export const ProgressValueStyled = styled.div<ProgressBarStyledProps>`
  position: absolute;
  top: -30px;
  left: ${props => (props.value-5) + '%'};
  
`

