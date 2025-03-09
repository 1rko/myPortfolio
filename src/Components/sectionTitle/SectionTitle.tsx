import React from 'react';
import {SectionTitleStyled} from "./SectionTitle.styled";

type SectionTitleProps = {
    title: string
    color?:string
}

export const SectionTitle = ({title, color}: SectionTitleProps) => {
    return (
        <SectionTitleStyled color={color}>
            {title}
        </SectionTitleStyled>
    );
};



