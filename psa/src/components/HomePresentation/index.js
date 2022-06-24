import React from "react";
import { PresentationContainer, Icon, Text, TextContainer } from "./styled";
import home_icon from "../../utils/icons/home_icon.png";

export const HomePresentation = () =>{
    return(
        <PresentationContainer>
            <Icon src={home_icon} />
            <TextContainer>
            <Text>
            Avanzar rápido, mantener la coordinación y optimizar el desarrollo todos juntos
            </Text>
            </TextContainer>
        </PresentationContainer>
    );
};

