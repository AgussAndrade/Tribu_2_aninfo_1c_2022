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

export const NewProjectModal = (props) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [dateStart, setDateStart] = useState("");
  const [dateFinish, setDateFinish] = useState("");
  const [state, setState] = useState("");
  let newProject = {
    estado: "",
    fechaFin: "",
    fechaInicio: "",
    id: 0,
    legajoLider: 0,
    nombre: "",
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
  const { open, onClose } = props;

  const saveInput = () => {
    if (name && description && dateStart && dateFinish && state) {
      newProject = {
        estado: state,
        fechaFin: dateFinish,
        fechaInicio: dateStart,
        id: 0,
        legajoLider: 0,
        nombre: name,
      };

      fetch("https:moduloproyectos.herokuapp.com/proyectos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newProject),
      });
      handleClose();
    } else {
      setErrorMessage("Rellene todos los campos");
      
      newProject = {
        estado: state,
        fechaFin: dateFinish,
        fechaInicio: dateStart,
        id: 0,
        legajoLider: 0,
        nombre: name,
      };
      if(!name){
        setName("");

      }
      
      if(!state) setState("");
      if(!dateFinish) setDateFinish("");
      if(!dateStart) setDateStart("");
      if(!description) setDescription("");
    }
  };

  const handleClose = () => {
    setErrorMessage("");
    setState("");
    setDateFinish("");
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
          <Title>Crear proyecto</Title>
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
            <Text>Fecha estimada de fin:</Text>
            <Date onChange={(e) => setDateFinish(e.target.value)}></Date>
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
