import React from "react";
import { PresentationContainer, Icon } from "./styled";
import home_icon from "../../utils/icons/home_icon.png";

export const HomePresentation = () =>{
    return(
        <PresentationContainer>
            <Icon src={home_icon} />
        </PresentationContainer>
    );
};

