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
  ErrorMessageContainer,
} from "./styled";
import { colors } from "../../../../utils/colors";
import { render } from "@testing-library/react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const NewTaskModal = (props) => {
  const { open, onClose, projectId } = props;

  const [errorMessage, setErrorMessage] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [dateStart, setDateStart] = useState("");
  const [state, setState] = useState("");

  const navigate = useNavigate();

  let newTask = {
    estado: "",
    fechaInicio: "",
    nombre: "",
    description: "",
    // tareas: [
    //   {
    //     descripcion: "",
    //     empleados: [0],
    //     estado: "",
    //     id: 0,
    //     idProyecto: 0,
    //     idTicket: 0,
    //     nombre: "",
    //   },
    // ],
  };


  const saveInput = () => {
    if (
      name &&
      description &&
      dateStart &&
      state
    ) {
      newTask = {
        estado: state,
        fechaInicio: dateStart,
        id: 0,
        nombre: name,
      };

      fetch("https:moduloproyectos.herokuapp.com/proyectos/"+projectId+"/tareas", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newTask),
      })
        .then(() => window.location.reload())
        .catch(() => navigate("/error"));
      handleClose();
    } else {
      setErrorMessage("Rellene todos los campos");

      newTask = {
        estado: state,
        fechaInicio: dateStart,
        id: 0,
        nombre: name,
      };
      if (!name) setName("");
      if (!state) setState("");
      if (!dateStart) setDateStart("");
      if (!description) setDescription("");
    }
  };

  const handleClose = () => {
    setErrorMessage("");
    setState("");
    setDateStart("");
    setDescription("");
    setName("");
    onClose();
  };

  if (!open) return null;
  return (
    <Overlay>
      <ModalContainer>
        <TitleContainer>
          <Title>Crear tarea</Title>
        </TitleContainer>
        <FormContainer autoComplete="off">
          <StyledTextInputContainer>
            <Text>Nombre:</Text>
            <Input type="text" onChange={(e) => setName(e.target.value)} />
          </StyledTextInputContainer>
          <StyledTextInputContainer>
            <Text>Estado:</Text>
            <DropDownList onChange={(e) => setState(e.target.value)}>
              <option value="En curso">En curso</option>
              <option value="Terminado">Terminado</option>
              <option value="En pausa">En pausa</option>
              <option value="Sin empezar">Sin empezar</option>
            </DropDownList>
          </StyledTextInputContainer>
          <StyledTextInputContainer>
            <Text>Fecha de creacion:</Text>
            <Date onChange={(e) => setDateStart(e.target.value)}></Date>
          </StyledTextInputContainer>
          <StyledTextInputContainer>
            <Text>Descripcion:</Text>
          </StyledTextInputContainer>
          <DescriptionContainer>
            <DescriptionInput
              type="text"
              onChange={(e) => setDescription(e.target.value)}
            ></DescriptionInput>
          </DescriptionContainer>
          <ErrorMessageContainer>{errorMessage}</ErrorMessageContainer>
        </FormContainer>
        <Buttons>
          <ButtonContainer>
            <ModalButton onClick={handleClose} color={colors.lightBlue}>
              Cancelar
            </ModalButton>
          </ButtonContainer>
          <ButtonContainer>
            <ModalButton onClick={saveInput} color={colors.lightBlue}>
              Guardar
            </ModalButton>
          </ButtonContainer>
        </Buttons>
      </ModalContainer>
    </Overlay>
  );
};
