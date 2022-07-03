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
import {EditFormTicket} from "../../../Support/components/EditFormTicket";
import {DerivateTicketForm} from "../../../Support/components/DerivateTicketForm";

export const SupportCard = (props) => {
    const {nombreProyecto, tareasProyecto, estadoProyecto,
        severidadProyecto,responsableProyecto, vencimientoProyecto,  openModal, setCurrentForm} = props;
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
              onClick={ () => {
                  setCurrentForm(<EditFormTicket />);
                  openModal(true);
              }}
              color = {colors.lightBlue}
            ></GenericButton>
            <GenericButton
              name={"Derivar Ticket"}
              onClick={() => {
                  setCurrentForm(<DerivateTicketForm/>)
                  openModal(true)
              }}
              color = {colors.lightBlue}
            ></GenericButton>
            <GenericButton
              name={"Info Ampliada"}
              onClick={() => {
                  setCurrentForm(<EditFormTicket/>)
                  openModal(true)
              }}
              color = {colors.lightBlue}
            ></GenericButton>
            <GenericButton
              name={"Cerrar Ticket"}
              onClick={() => {
                setCurrentForm(<EditFormTicket/>)
                openModal(true)
            }}
              color = {colors.red}
            ></GenericButton>
          </ButtonContainer>  


        </CardContainer>
    );
}