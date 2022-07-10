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
  SelectContainer,
  SelectText,
} from "./styled";
import { colors } from "../../../../utils/colors";
import { render } from "@testing-library/react";
import Select from "react-select";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const NewProjectModal = (props) => {
  const { open, onClose, listEmployees, setUpdate } = props;

  const [errorMessage, setErrorMessage] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [dateStart, setDateStart] = useState("");
  const [dateFinish, setDateFinish] = useState("");
  const [leaderID, setLeaderID] = useState(-1);
  const [state, setState] = useState("");
  const navigate = useNavigate();

  let newProject = {
    estado: "",
    descripcion: "",
    fechaFin: "",
    fechaInicio: "",
    id: 0,
    legajoLider: -1,
    nombre: "",
  };

  const checkLeaderId = () => {
    let value = false;
    listEmployees.forEach((empleado) => {
      if (empleado.legajo == leaderID) {
        value = true;
      }
    });

    return value;
  };

  const saveInput = () => {
    if (name && description && dateStart && dateFinish && (leaderID != -1)) {
      newProject = {
        estado: state,
        descripcion: description,
        fechaFin: dateFinish,
        fechaInicio: dateStart,
        id: 0,
        legajoLider: leaderID,
        nombre: name,
      };

      fetch("https://moduloproyectos.herokuapp.com/proyectos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newProject),
      })
        .then(() => setUpdate())
        .catch(() => navigate("/error"));
      handleClose();
    } else {
      if (name && description && dateStart && dateFinish && state && leaderID) {
        setErrorMessage("Ingrese un ID valido");
      } else {
        setErrorMessage("Rellene todos los campos");
      }

      newProject = {
        estado: state,
        fechaFin: dateFinish,
        fechaInicio: dateStart,
        id: 0,
        legajoLider: leaderID,
        nombre: name,
      };
      if (!name) setName("");
      if (!state) setState("");
      if (!dateFinish) setDateFinish("");
      if (!dateStart) setDateStart("");
      if (!description) setDescription("");
      if (leaderID == -1) setLeaderID(-1);
    }
  };

  const handleClose = () => {
    setErrorMessage("");
    setState("");
    setDateFinish("");
    setDateStart("");
    setDescription("");
    setName("");
    setLeaderID(-1);
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
              <option disabled hidden selected>Seleccionar...</option>
              <option value="Sin empezar">Sin empezar</option>
              <option value="En curso">En curso</option>
              <option value="Terminado">Terminado</option>
              <option value="En pausa">En pausa</option>
            </DropDownList>
          </StyledTextInputContainer>
          <StyledTextInputContainer>
            <Text>Fecha de creación:</Text>
            <Date onChange={(e) => setDateStart(e.target.value)}></Date>
          </StyledTextInputContainer>
          <StyledTextInputContainer>
            <Text>Fecha estimada de fin:</Text>
            <Date onChange={(e) => setDateFinish(e.target.value)}></Date>
          </StyledTextInputContainer>
            <SelectContainer>
            <SelectText>Lider:</SelectText>
              <Select
                options={listEmployees.map((empleado) => ({
                  label: empleado.Nombre + " " + empleado.Apellido,
                  value: empleado.legajo,
                }))}
                onChange={(e) => setLeaderID(e.value)}

              />
            </SelectContainer>
          <StyledTextInputContainer>
            <Text>Descripción:</Text>
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
