import React, { useState } from "react";
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

export const EditionModal = (props) => {
  const { open, onClose, titulo, defaultVal } = props;

  const proyecto = {
    nombre: "Proyecto: Prueba de titulo",
    descripcion:
      "Cuando hablamos del Adress space nos referimos a la abstraccion que provee el kernel del sistema operativo al proceso sobre la memoria de la computadora. Este representa el estado completo de la memoria de un proceso y esta compuesto por cuatro secciones: code, data, heap y stack",
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
  };

  const [name, setName] = useState(proyecto.nombre);
  const [description, setDescription] = useState(proyecto.descripcion);
  const [dateStart, setDateStart] = useState(proyecto.fechaCreacion);
  const [dateFinish, setDateFinish] = useState(proyecto.fechaFin);
  const [state, setState] = useState(proyecto.estado);

  const saveInput = () => {
    let newProject = {
      nombre: name,
      descripcion: description,
      estado: state,
      fechaCreacion: dateStart,
      fechaFin: dateFinish,
    };
    console.log(newProject);
    onClose();
  };

  const defaultValue = (aux) => {
    return defaultVal? aux: null;
  };

  const defaultValueEstado = (aux) =>{
    return defaultVal? aux: "Sin empezar";
  };

  if (!open) return null;
  return (
    <Overlay>
      <ModalContainer>
        <TitleContainer>
          <Title>{titulo}</Title>
        </TitleContainer>
        <FormContainer autoComplete="off">
          <StyledTextInputContainer>
            <Text>Nombre:</Text>
            <Input
              type="text"
              defaultValue={defaultValue(proyecto.nombre)}
              onChange={(e) => setName(e.target.value)}
            />
          </StyledTextInputContainer>
          <StyledTextInputContainer>
            <Text>Estado:</Text>
            <DropDownList
              defaultValue={defaultValueEstado(proyecto.estado)}
              onChange={(e) => setState(e.target.value)}
            >
              <option value="En curso">En curso</option>
              <option value="Terminado">Terminado</option>
              <option value="En pausa">En pausa</option>
              <option value="Sin empezar">Sin empezar</option>
            </DropDownList>
          </StyledTextInputContainer>
          <StyledTextInputContainer>
            <Text>Fecha de creacion:</Text>
            <Date
              defaultValue={defaultValue(proyecto.fechaCreacion)}
              onChange={(e) => setDateStart(e.target.value)}
            ></Date>
          </StyledTextInputContainer>
          <StyledTextInputContainer>
            <Text>Fecha estimada de fin:</Text>
            <Date
              defaultValue={defaultValue(proyecto.fechaFin)}
              onChange={(e) => setDateFinish(e.target.value)}
            ></Date>
          </StyledTextInputContainer>
          <StyledTextInputContainer>
            <Text>Descripcion:</Text>
          </StyledTextInputContainer>
          <DescriptionContainer>
            <DescriptionInput
              type="text"
              defaultValue={defaultValue(proyecto.descripcion)}
              onChange={(e) => setDescription(e.target.value)}
            ></DescriptionInput>
          </DescriptionContainer>
        </FormContainer>
        <Buttons>
          <ButtonContainer>
            <ModalButton onClick={saveInput} color={colors.lightBlue}>
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
