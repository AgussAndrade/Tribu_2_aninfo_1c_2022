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
import { useNavigate } from "react-router-dom";
import { ErrorMessageContainer } from "../EditionModal/styled";

export const EditionTaskModal = (props) => {
  const { open, onClose, tarea, id } = props;

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [dateStart, setDateStart] = useState("");
  const [state, setState] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const saveInput = () => {
    let newTask = {
      nombre: name,
      descripcion: description,
      estado: state,
      fechaCreacion: dateStart,
    };

    console.log("https:moduloproyectos.herokuapp.com/proyectos/" + id + "/tareas/"+ tarea.id)

    if (
      name &&
      description &&
      dateStart
    ) {     
      fetch("https:moduloproyectos.herokuapp.com/proyectos/" + id + "/tareas/"+ tarea.id, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newTask),
      })
      .then(() => window.location.reload())
        .catch(() => navigate("/error"));
      handleClose();
    } else {
        setErrorMessage("Rellene todos los campos");
      }
  };

  const handleClose = () => {
    setErrorMessage("");
    setState("");
    setDateStart("");
    setDescription("");;
    setName("");
    onClose();
  };

  if (!open) return null;
  return (
    <Overlay>
      <ModalContainer>
        <TitleContainer>
          <Title>Editar tarea</Title>
        </TitleContainer>
        <FormContainer autoComplete="off">
          <StyledTextInputContainer>
            <Text>Nombre:</Text>
            <Input
              type="text"
              placeholder={tarea.nombre}
              onChange={(e) => setName(e.target.value)}
            />
          </StyledTextInputContainer>
          <StyledTextInputContainer>
            <Text>Estado:</Text>
            <DropDownList
              placeholder={tarea.estado}
              onChange={(e) => setState(e.target.value)}
            >
              <option value="En curso">En curso</option>
              <option value="Terminado">Terminado</option>
              <option value="En pausa">En pausa</option>
            </DropDownList>
          </StyledTextInputContainer>
          <StyledTextInputContainer>
            <Text>Fecha de creacion:</Text>
            <Date
              placeholder={tarea.fechaCreacion}
              onChange={(e) => setDateStart(e.target.value)}
            ></Date>
          </StyledTextInputContainer>
          <StyledTextInputContainer>
            <Text>Descripcion:</Text>
          </StyledTextInputContainer>
          <DescriptionContainer>
            <DescriptionInput
              type="text"
              placeholder={tarea.descripcion}
              onChange={(e) => setDescription(e.target.value)}
            ></DescriptionInput>
          </DescriptionContainer>
          <ErrorMessageContainer>{errorMessage}</ErrorMessageContainer>
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
