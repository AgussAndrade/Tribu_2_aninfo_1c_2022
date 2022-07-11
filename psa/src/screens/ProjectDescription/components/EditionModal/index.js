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
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import { Project } from "../../../Project";
import { useEffect } from "react";
import {
  SelectText,
  SelectContainer,
} from "../../../Project/components/NewProjectModal/styled";

export const EditionModal = (props) => {
  const { open, onClose, titulo, proyecto, listEmployees, setUpdate } = props;
  const nombre = proyecto.nombre;

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [dateStart, setDateStart] = useState("");
  const [dateFinish, setDateFinish] = useState("");
  const [leaderID, setLeaderID] = useState(-1);
  const [state, setState] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  let newProject = {
    estado: proyecto.estado,
    fechaFin: proyecto.fechaFin,
    fechaInicio: proyecto.fechaInicio,
    id: proyecto.id,
    legajoLider: proyecto.legajoLider,
    nombre: proyecto.nombre,
  };


  const saveInput = () => {
    if (name && description && dateStart && dateFinish &&( leaderID != -1)) {
      newProject = {
        estado: state,
        fechaFin: dateFinish,
        fechaInicio: dateStart,
        legajoLider: leaderID,
        descripcion: description,
        nombre: name,
      };

      fetch("https://moduloproyectos.herokuapp.com/proyectos/" + proyecto.id, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newProject),
      })
        .then(() => setUpdate())
        .catch(() => navigate("/error"));
      handleClose();
    } else {
      if (name && description && dateStart && dateFinish && state && (leaderID!=-1)) {
        setErrorMessage("Ingrese un líder válido");
      } else {
        setErrorMessage("Rellene todos los campos");
      }
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
          <Title>{titulo}</Title>
        </TitleContainer>
        <FormContainer autoComplete="off">
          <StyledTextInputContainer>
            <Text>Nombre:</Text>
            <Input
              type="text"
              placeholder={proyecto.nombre}
              onChange={(e) => setName(e.target.value)}
            />
          </StyledTextInputContainer>
          <StyledTextInputContainer>
            <Text>Estado:</Text>
            <DropDownList onChange={(e) => setState(e.target.value)}>
              <option disabled hidden selected>
                Seleccionar...
              </option>
              <option value="Sin empezar">Sin empezar</option>
              <option value="En curso">En curso</option>
              <option value="Terminado">Terminado</option>
              <option value="En pausa">En pausa</option>
            </DropDownList>
          </StyledTextInputContainer>
          <StyledTextInputContainer>
            <Text>Fecha de creacion:</Text>
            <Date
              placeholder={proyecto.fechaInicio}
              onChange={(e) => setDateStart(e.target.value)}
            ></Date>
          </StyledTextInputContainer>
          <StyledTextInputContainer>
            <Text>Fecha estimada de fin:</Text>
            <Date
              placeholder={proyecto.fechaFin}
              onChange={(e) => setDateFinish(e.target.value)}
            ></Date>
          </StyledTextInputContainer>
          <SelectContainer>
            <SelectText> Lider: </SelectText>
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
              placeholder={proyecto.descripcion}
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
            <ModalButton onClick={handleClose} color={colors.lightBlue}>
              Cancelar
            </ModalButton>
          </ButtonContainer>
        </Buttons>
      </ModalContainer>
    </Overlay>
  );
};
