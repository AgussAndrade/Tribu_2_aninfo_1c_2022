import React from "react";
import {
  ButtonContainer,
  ModalButton,
  ModalContainer,
  Overlay,
  FormContainer,
  Title,
  TitleContainer,
  Buttons,
  StyledTextInputContainer,
  Input,
  Text,
  DropDownList,
  Date,
  DescriptionContainer,
  DescriptionInput,
} from "./styled";
import { colors } from "../../../../utils/colors";
import { useState } from "react";

export const Modal = (props) => {
  const { open, onClose } = props;
  
  const ticket =
  {
    ID: "T001",
    nombre: "Proyecto: Ultimo ejemplo",
    descripcion:"asdfasdf",
    responsable: "Yo",
    severidad: "S4",
    fechaDeInicio:"",
    fechaDeFin:"",
    cliente:"ASDF",
    producto:"",
    version:"",
    tareas: "10",
    estado: "cerrado",
    vencimiento: "En 10 días"
  }
  if (!open) return null;
  return (
    <Overlay>
      <ModalContainer>
        <TitleContainer>
          <Title>Información del ticket</Title>
        </TitleContainer>

        <FormContainer autoComplete="off">

        <StyledTextInputContainer>
            <Text>Id del ticket: {ticket.ID}</Text>
        </StyledTextInputContainer>

          <StyledTextInputContainer>
            <Text>Nombre del ticket: {ticket.nombre}</Text>
          </StyledTextInputContainer>

          <StyledTextInputContainer>
            <Text>Descripcion: {ticket.descripcion}</Text>
          </StyledTextInputContainer>
          
          <StyledTextInputContainer>
            <Text>Responsable: {ticket.responsable}</Text>
          </StyledTextInputContainer>

          <StyledTextInputContainer>
            <Text>Estado: {ticket.estado}</Text>
          </StyledTextInputContainer>

          <StyledTextInputContainer>
            <Text>Severidad: {ticket.severidad}</Text>
          </StyledTextInputContainer>
          
          <StyledTextInputContainer>
            <Text>Fecha de inicio: {ticket.fechaDeInicio}</Text>
          </StyledTextInputContainer>

          <StyledTextInputContainer>
            <Text>Vencimento: {ticket.fechaDeFin}</Text>
          </StyledTextInputContainer>
          
          <StyledTextInputContainer>
            <Text>Cliente: {ticket.cliente}</Text>
          </StyledTextInputContainer>

          <StyledTextInputContainer>
            <Text>Producto: {ticket.producto}</Text>
          </StyledTextInputContainer>

          <StyledTextInputContainer>
            <Text>Version: {ticket.version}</Text>
          </StyledTextInputContainer>

          <StyledTextInputContainer>
            <Text>Tareas: {ticket.tareas}</Text>
          </StyledTextInputContainer>
          
          <StyledTextInputContainer>
            <Text>Areas: {ticket.cliente}</Text>
          </StyledTextInputContainer>
          
        </FormContainer>
        <Buttons>
          <ButtonContainer>
            <ModalButton onClick={onClose} color={colors.lightBlue}>
              Cerrar
            </ModalButton>
          </ButtonContainer>
        </Buttons>
      </ModalContainer>
    </Overlay>
  );
};
