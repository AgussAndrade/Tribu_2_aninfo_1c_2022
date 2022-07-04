import React, { useEffect } from "react";
import {
  CardContainer,
  CardTextContainer,
  TitleText,
  DescriptionText,
  ButtonContainer,
} from "./styled";
import { colors } from "../../../../utils/colors";
import { GenericButton } from "../GenericButton/index";
import {EditFormTicket} from "../../../Support/components/EditFormTicket";
import {DerivateTicketForm} from "../../../Support/components/DerivateTicketForm";
import { UseFetch } from "../../../../components/UseFetch";
import { SOPORTE_URL } from "../../../../utils/apiUrls";


export const SupportCard = (props) => {
    const {nombreTicket, tareasTicket, estadoTicket, severidadTicket,responsableTicket, vencimientoTicket,  openModal, setCurrentForm, ticketId, setCurrentTitleModal, setModalSize} = props;
    const closeTicket = () => {
      
      const body = { 
        estado: "cerrado"
      }
      const config = {
        body: body, 
        method: "PUT", 
        headers: { "Content-Type": "application/json" },
      } 
      const propsConfig = {
        url: SOPORTE_URL + "soporte/ticket/" + ticketId,
        config: config
      }

      const {data: ticket, isPending, error} = UseFetch(propsConfig)

      if (error){
        console.log(error)
      } else {
        window.location.reload()
      }
    }

    return(
        <CardContainer>
          <CardTextContainer>
            <TitleText>
            	{nombreTicket}
            </TitleText>
            <DescriptionText>
            	Tareas: {tareasTicket} | 
              
            	Estado: {estadoTicket} | 
              
            	Severidad {severidadTicket} | 
            
            	Responsable: {responsableTicket} 
            </DescriptionText>
            <DescriptionText>
            	Vencimiento: {vencimientoTicket} 
            </DescriptionText>
          </CardTextContainer>
          <ButtonContainer>
            <GenericButton
              name={"Editar Ticket"}
              onClick={ () => {
                  setCurrentForm(<EditFormTicket readOnly = {false}/>);
                  setCurrentTitleModal("Editar ticket")
                  openModal(true);
                  setModalSize("lg")
              }}
              color = {colors.lightBlue}
            ></GenericButton>
            <GenericButton
              name={"Derivar Ticket"}
              onClick={() => {
                  setCurrentForm(<DerivateTicketForm/>)
                  setCurrentTitleModal("Derivar ticket");
                  setModalSize("md")
                  openModal(true)
              }}
              color = {colors.lightBlue}
            ></GenericButton>
            <GenericButton
              name={"Info Ampliada"}
              onClick={() => {
                  setCurrentForm(<EditFormTicket readOnly = {true}/>)
                  setCurrentTitleModal("Info ampliada")
                  openModal(true)
              }}
              color = {colors.lightBlue}
            ></GenericButton>
            <GenericButton
              name={"Cerrar Ticket"}
              onClick={() => {
                closeTicket()
            }}
              color = {colors.red}
            ></GenericButton>
          </ButtonContainer>  


        </CardContainer>
    );
}