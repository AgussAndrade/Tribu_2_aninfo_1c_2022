import React from "react";
import { TopBar } from "../../../components/TopBar";
import { useNavigate } from "react-router-dom";
import { ProductosSoporte } from "../../../components/ProductosSoporte";
import { RegularButton } from "../../../components/RegularButton";
import { ButtonContainer, Container , Text, TextContainer } from "../PantallaCrearTicket/styled";
import  FlavorForm from "../../../components/Formularios/FlavorForm";


export const PantallaCrearTicket = (props) =>{

    const navigate = useNavigate()
    const {buttonSelected} = props;
    return(
        <div>
            <p><TopBar buttonSelected={"Soporte"}/></p>
            <TextContainer>
            <Text>
            Creación del ticket para el proyecto X
            </Text>
            </TextContainer>
            <FlavorForm/>
            <ButtonContainer>
                <RegularButton name = {'Cancelar'} onClick = {()=>{navigate('/support/PantallaVerTickets')}}/>
                <RegularButton name = {'Crear ticket'} onClick = {()=>{navigate('/support/PantallaVerTickets')}}/>
            </ButtonContainer>
            
        </div>
    )
    
}