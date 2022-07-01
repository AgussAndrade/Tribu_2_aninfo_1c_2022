import React from "react";
import {
  CardContainer,
  CardTextContainer,
  TitleText,
  DescriptionText,
  ButtonContainer
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
          <ButtonContainer>
            <GenericButton
              name={"Detalle"}
              onClick={onClick}
              color = {colors.lightBlue}
            ></GenericButton>
          </ButtonContainer>
        </CardContainer>
    );
}