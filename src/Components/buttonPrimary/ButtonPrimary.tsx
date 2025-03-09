import React from 'react';
import {ButtonPrimaryStyled} from "./ButtonPrimary.styled";

type ButtonPrimaryPropsType = {
    title: string
}

export const ButtonPrimary = ({title}: ButtonPrimaryPropsType) => {
    return (
        <ButtonPrimaryStyled href={'#'}>
            {title}
        </ButtonPrimaryStyled>
    );
};
