import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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
    const navigate = useNavigate();
    const {nombreProducto, descripcionProducto, idProducto, ticketsAbiertos,ticketsCerrados, onClick} = props;
    
    return(
        <CardContainer>
          <CardTextContainer>
            <TitleText>
            	{nombreProducto}
            </TitleText>
            <DescriptionText>
            	{descripcionProducto} | id: {idProducto}
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
              onClick={() => {
                
                navigate("/support/ticketViews");
              }}
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