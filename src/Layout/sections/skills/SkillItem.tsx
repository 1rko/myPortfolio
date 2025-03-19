import React from 'react';
import {Icon} from "../../../Components/Icon";
import {ProgressLine} from "../../../Components/ProgressLine";
import {FlexContentContainer} from "../../../Components/FlexContentContainer";
import styled from "styled-components";

type SkillPropsType = {
    icon?: string | undefined
    img?: {
        src: string | undefined,
        alt: string
    }
    value: number
}

export const SkillItem = ({icon, img, value}: SkillPropsType) => {
    return (
        <FlexContentContainer justifyContent={'start'} gap={'10px'} alignItems={'center'}>
            {icon && <Icon iconId={icon} width={'120'} height={'120'} viewBox={'0 0 120 120'}/>}
            {img && <ImgIconStyled src={img.src} alt={img.src}/>}
            <ProgressLine value={value}/>
        </FlexContentContainer>
    )
};

const ImgIconStyled = styled.img`
  width: 45px;
  height: 45px;
`