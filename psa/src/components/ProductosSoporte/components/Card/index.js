import React from "react";
import {
  CardContainer,
  CardTextContainer,
  Container,
  TitleText,
  DescriptionText,
  ButtonContainer
} from "./styled";
import { colors } from "../../../../utils/colors"
import { GenericButton } from "../../../../components/GenericButton"
import { useNavigate } from "react-router-dom";

export const Card = (props) => {
    const {nombreProducto, ticketsAbiertos, ticketsCerrados, onClick} = props;
    const navigate = useNavigate();
    return(
        <Container>
          <CardTextContainer>
            <TitleText>
            	{nombreProducto}
            </TitleText>
            <DescriptionText>
            	{ticketsAbiertos}
            </DescriptionText>
            <DescriptionText>
            	{ticketsCerrados}
            </DescriptionText>
          </CardTextContainer>
          <ButtonContainer>
            <GenericButton
              name={"Abrir ticket"}
              onClick={()=>{navigate('/support/pantallaCrearTicket')}}
              color = {colors.lightBlue}
            ></GenericButton>
            <GenericButton
              name={"Ver ticket"}
              onClick={(nombreProducto)=>{navigate('/support/pantallaVerTickets')}}
              color = {colors.lightBlue}
            ></GenericButton>
          </ButtonContainer>
        </Container>
    );
}
/*<ButtonContainer>
  <RegularButton buttonSelected={buttonSelected === 'Abrir ticket'} name = {'Abrir ticket'} onClick = {()=>{navigate('/support/pantallaCrearTicket')}}/>
  <RegularButton primary name = {'Ver tickets'} onClick = {()=>{navigate('/support/pantallaVerTickets')}}/>
</ButtonContainer> */