import React, { useState, useEffect } from "react";

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
import { EditionModal } from "../EditionModal";
import { Modal } from "../Modal";

export const Card = (props) => {
    const {nombreTicket, tareas, estado, severidad, responsable, vencimiento} = props;
    const navigate = useNavigate();
    const [searchTerm, setSerchTerm] = useState("");
  
    const [showModal, setShowModal] = useState(false);
  
  
    const [items, setItems] = useState({});
    const [error, setError] = useState("");
/*
    useEffect(() => {
      fetch("https://moduloproyectos.herokuapp.com/proyectos", {
        method: "GET",
      } )
        .then(res => res.json())
        .then(
          (result) => {
            setItems(result);
            console.log( "res" + result)
          },
          (error) => {
            setError(error);
          }
        )
    }, []);
    <Modal open={showModal} onClose={() => setShowModal(false)} 
    //Necesito tener los 2 modal a la vez pero no se como />
    */
    return(
        <Container>
          <EditionModal open={showModal} onClose={() => setShowModal(false)} />
          <Modal open={showModal} onClose={() => setShowModal(false)} />
    
          <CardTextContainer>
            <TitleText>
            	{nombreTicket}
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
              
              onClick={() => Modal.setShowModal(true)}
              color = {colors.lightBlue}
            ></GenericButton>

            <GenericButton
              name={"Editar ticket"}
              onClick={() => EditionModal.setShowModal(true)}
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