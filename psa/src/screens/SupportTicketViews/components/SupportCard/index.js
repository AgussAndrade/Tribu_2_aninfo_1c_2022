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
    const {nombreProyecto, tareasProyecto, estadoProyecto, severidadProyecto,responsableProyecto, vencimientoProyecto,  derivateOnClick} = props;
    return(
        <CardContainer>
          <CardTextContainer>
            <TitleText>
            	{nombreProyecto}
            </TitleText>
            <DescriptionText>
            	Tareas: {tareasProyecto} | 
              
            	Estado: {estadoProyecto} | 
              
            	Severidad {severidadProyecto} | 
            
            	Responsable: {responsableProyecto} 
            </DescriptionText>
            <DescriptionText>
            	Vencimiento: {vencimientoProyecto} 
            </DescriptionText>
          </CardTextContainer>
          <ButtonContainer>
            <GenericButton
              name={"Editar Ticket"}
              onClick={derivateOnClick}
              color = {colors.lightBlue}
            ></GenericButton>
            <GenericButton
              name={"Derivar Ticket"}
              onClick={derivateOnClick}
              color = {colors.lightBlue}
            ></GenericButton>
            <GenericButton
              name={"Info Ampliada"}
              onClick={derivateOnClick}
              color = {colors.lightBlue}
            ></GenericButton>
            <GenericButton
              name={"Cerrar Ticket"}
              onClick={derivateOnClick}
              color = {colors.red}
            ></GenericButton>
          </ButtonContainer>  


        </CardContainer>
    );
}