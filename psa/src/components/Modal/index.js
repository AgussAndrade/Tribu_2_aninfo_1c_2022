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
import { colors } from "../../utils/colors";
import { useState } from "react";

export const Modal = (props) => {
  const { open, onClose } = props;
  
  const proyecto =
    {
      nombre: "Proyecto: Prueba de titulo",
      descripcion: "Cuando hablamos del Adress space nos referimos a la abstraccion que provee el kernel del sistema operativo al proceso sobre la memoria de la computadora. Este representa el estado completo de la memoria de un proceso y esta compuesto por cuatro secciones: code, data, heap y stack",
      tarea1: [
        {
          nombre: "Nombre1",
          descripcion: "Esta es la descripcion de tarea 1",
          fechaCreacion: "fecha1",
        },
      ],
    }
  if (!open) return null;
  return (
    <Overlay>
      <ModalContainer>
        <TitleContainer>
          <Title>Editar proyecto</Title>
        </TitleContainer>
        <FormContainer>
          <StyledTextInputContainer>
            <Text>Nombre:</Text>
            <Input type="text" defaultValue={proyecto.nombre}/>
          </StyledTextInputContainer>
          <StyledTextInputContainer>
            <Text>Estado:</Text>
            <DropDownList>
              <option value="C">En curso</option>
              <option value="T">Terminado</option>
              <option value="P">En pausa</option>
            </DropDownList>
          </StyledTextInputContainer>
          <StyledTextInputContainer>
            <Text>Fecha de creacion:</Text>
            <Date></Date>
          </StyledTextInputContainer>
          <StyledTextInputContainer>
            <Text>Fecha estimada de fin:</Text>
            <Date></Date>
          </StyledTextInputContainer>
          <StyledTextInputContainer>
            <Text>Descripcion:</Text>
          </StyledTextInputContainer>
          <DescriptionContainer>
            <DescriptionInput type="text" defaultValue={proyecto.descripcion}>

            </DescriptionInput>
          </DescriptionContainer>
        </FormContainer>
        <Buttons>
          <ButtonContainer>
            <ModalButton onClick={onClose} color={colors.lightBlue}>
              Guardar
            </ModalButton>
          </ButtonContainer>
          <ButtonContainer>
            <ModalButton onClick={onClose} color={colors.lightBlue}>
              Cancelar
            </ModalButton>
          </ButtonContainer>
        </Buttons>
      </ModalContainer>
    </Overlay>
  );
};
