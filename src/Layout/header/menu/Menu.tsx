import React from "react";
import {StyledMenu} from "./Menu.styled";
import {menuItemsProps} from "../Header";

export const Menu = ({menuItems}: menuItemsProps) => {
    return <nav>
        <StyledMenu>
            {menuItems.map(item => <li><a href={''}>{item}</a></li>)}
        </StyledMenu>
    </nav>
}