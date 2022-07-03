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
    estado: "En curso",
    fechaCreacion: "2013-01-08",
    fechaFin: "2017-02-09",
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
          <ButtonContainer>
            <ModalButton onClick={onClose} color={colors.lightBlue}>
              Cancelar
            </ModalButton>
          </ButtonContainer>
      </ModalContainer>
    </Overlay>
  );
};
