import React from 'react';
import {Icon} from "./Icon";
import {ProgressLine} from "./progressLine/ProgressLine";
import {FlexContainer} from "./FlexContainer";
import styled from "styled-components";
import imgFigma from "../Assets/icons/Figma Icon.png";

type SkillPropsType = {
    icon?: string | undefined
    img?: {
        src: string | undefined,
        alt: string
    }
    value: number
}

export const Skill = ({icon, img, value}: SkillPropsType) => {
    return (
        <FlexContainer justifyContent={'start'} gap={'10px'} alignItems={'end'}>
            {icon && <Icon iconId={icon} width={'50'} height={'50'} viewBox={'0 -10 50 50'}/>}
            {img && <ImgIconStyled src={img.src} alt={img.src}/>}
            <ProgressLine value={value}/>
        </FlexContainer>
    );
};

export const ImgIconStyled = styled.img`
  width: 45px;
  height: 45px;
`