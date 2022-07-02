import React from "react";
import {
  CardContainer,
  CardTextContainer,
  TitleText,
  DescriptionText,
  ButtonContainer,
  TicketsInfo,
  GenericTextBox
} from "./styled";
import { colors } from "../../../../utils/colors";
import { GenericButton } from "../GenericButton/index";

export const SupportCard = (props) => {
    const {nombreProyecto, estadoProyecto, severidadProyecto,responsableProyecto, onClick} = props;
    return(
        <CardContainer>
          <CardTextContainer>
            <TitleText>
            	{nombreProyecto}
            </TitleText>
            <DescriptionText>
              {estadoProyecto}
            </DescriptionText>
            <DescriptionText>
            {severidadProyecto}
            </DescriptionText>
            <DescriptionText>
            {responsableProyecto}
            </DescriptionText>
          </CardTextContainer>
          <ButtonContainer>
            <GenericButton
              name={"Editar Ticket"}
              onClick={onClick}
              color = {colors.lightBlue}
            ></GenericButton>
            <GenericButton
              name={"Derivar Ticket"}
              onClick={onClick}
              color = {colors.lightBlue}
            ></GenericButton>
            <GenericButton
              name={"Info Ampliada"}
              onClick={onClick}
              color = {colors.lightBlue}
            ></GenericButton>
            <GenericButton
              name={"Cerrar Ticket"}
              onClick={onClick}
              color = {colors.lightBlue}
            ></GenericButton>
          </ButtonContainer>  


        </CardContainer>
    );
}