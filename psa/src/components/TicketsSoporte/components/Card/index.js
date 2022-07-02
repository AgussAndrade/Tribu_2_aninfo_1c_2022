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
    const {nombreProyecto, tareas, estado, severidad, responsable, vencimiento} = props;
    const navigate = useNavigate();
    return(
        <Container>
          <CardTextContainer>
            <TitleText>
            	{nombreProyecto}
            </TitleText>
            <DescriptionText>
            	Tareas: {tareas} | 
              
            	Estado: {estado} | 
              
            	Severidad {severidad} | 
            
            	Responsable: {responsable} | 
            </DescriptionText>
            <DescriptionText>
            	Vencimiento: {vencimiento} 
            </DescriptionText>
          </CardTextContainer>
          <ButtonContainer>
            <GenericButton
              name={"Info ampliada"}
              onClick={()=>{navigate('/support')}}
              color = {colors.lightBlue}
            ></GenericButton>
            <GenericButton
              name={"Editar ticket"}
              onClick={()=>{navigate('/support')}}
              color = {colors.lightBlue}
            ></GenericButton>
            <GenericButton
              name={"Derivar ticket"}
              onClick={()=>{navigate('/support/pantallaDerivarTicket')}}
              color = {colors.lightBlue}
            ></GenericButton>
            <GenericButton
              name={"Cerrar ticket"}
              onClick={()=>{navigate('/support')}}
              color = {colors.red}
            ></GenericButton>
          </ButtonContainer>
        </Container>
    );
}
/*<ButtonContainer>
  <RegularButton buttonSelected={buttonSelected === 'Abrir ticket'} name = {'Abrir ticket'} onClick = {()=>{navigate('/support/pantallaCrearTicket')}}/>
  <RegularButton primary name = {'Ver tickets'} onClick = {()=>{navigate('/support/pantallaVerTickets')}}/>
</ButtonContainer> */