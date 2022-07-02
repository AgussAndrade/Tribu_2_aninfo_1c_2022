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
    const {nombreProyecto, descripcionProyecto, ticketsAbiertos,ticketsCerrados, onClick} = props;
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
          <TicketsInfo>
            <TicketsInfo>
              Tickets Abiertos:{ticketsAbiertos}
            </TicketsInfo>
            Tickets Cerrados:{ticketsCerrados}
          </TicketsInfo>
          <ButtonContainer>
            <GenericButton
              name={"Ver Tickets"}
              onClick={onClick}
              color = {colors.lightBlue}
            ></GenericButton>
            <GenericButton
              name={"Abrir Ticket"}
              onClick={onClick}
              color = {colors.lightBlue}
            ></GenericButton>
          </ButtonContainer>  


        </CardContainer>
    );
}