import React from "react";

import {
  CardContainer,
  CardTextContainer,
  TitleText,
  DescriptionText,
  InfoProjectContainer
} from "./styled";
import { colors } from "../../../../utils/colors"
import { GenericButton } from "../../../../components/GenericButton"

export const Card = (props) => {
    const {nombreProyecto, descripcionProyecto, onClick} = props;

    return(
        <CardContainer>
          <CardTextContainer>
            <TitleText>
            	{nombreProyecto}
            </TitleText>
            <DescriptionText>
            	{descripcionProyecto}
            </DescriptionText>
          </CardTextContainer>
          <InfoProjectContainer>
            <GenericButton
              name={"Información"}
              onClick={onClick}
              color = {colors.lightBlue}
            ></GenericButton>
          </InfoProjectContainer>
        </CardContainer>
    );
}