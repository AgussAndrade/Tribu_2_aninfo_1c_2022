import React from "react";
import { ButtonCustom } from "./styled";

export const GenericButton = (props) => {
    const {color, name, onClick} = props;
    return(
        <ButtonCustom onClick={onClick} color ={color}>
            {name}
        </ButtonCustom>
    )
}