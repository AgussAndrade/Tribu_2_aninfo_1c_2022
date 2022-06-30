import React from "react";
import { ButtonCustom } from "./styled";
import home_icon from "../../utils/icons/home_icon.png";

export const GenericButton = (props) => {
    const {color, name, onClick} = props;
    return(
        <ButtonCustom onClick={onClick} color ={color}>
            {name}
        </ButtonCustom>
    )
}