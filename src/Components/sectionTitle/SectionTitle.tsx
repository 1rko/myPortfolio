import React from 'react';
import {SectionTitleStyled} from "./SectionTitle.styled";

type SectionTitleProps = {
    title: string
    subtitle?:string
    color?:string
}

export const SectionTitle = ({title, subtitle, color}: SectionTitleProps) => {
    return (
        <SectionTitleStyled color={color}>
            {title}
            <span>{subtitle}</span>
        </SectionTitleStyled>
    );
};



