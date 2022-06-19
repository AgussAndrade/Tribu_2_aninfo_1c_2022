import React from "react";
import { PresentationContainer, Icon, Text } from "./styled";
import home_icon from "../../utils/icons/home_icon.png";

export const HomePresentation = () =>{
    return(
        <PresentationContainer>
            <Icon src={home_icon} />
            <Text>
            Avanzar rápido, mantener la coordinación y optimizar el desarrollo todos juntos
            </Text>
        </PresentationContainer>
    );
};

