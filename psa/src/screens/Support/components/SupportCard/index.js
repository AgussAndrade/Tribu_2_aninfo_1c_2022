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
    const {nombreProducto, descripcionProducto, versionId, idProducto, versionProducto, onClick} = props;
    
    return(
        <CardContainer>
          <CardTextContainer>
            <TitleText>
            	{nombreProducto}
            </TitleText>
            <DescriptionText>
            	{descripcionProducto} | id: {versionId} | version: {versionProducto}
            </DescriptionText>
          </CardTextContainer>
          <ButtonContainer>
            <GenericButton
              name={"Ver Tickets"}
              onClick={() => {
                
                navigate("/support/ticketViews/" + versionId);
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