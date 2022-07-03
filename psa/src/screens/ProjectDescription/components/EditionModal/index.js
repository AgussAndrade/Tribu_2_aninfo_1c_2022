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
  const { open, onClose, titulo, proyecto } = props;

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
              defaultValue={proyecto.nombre}
              onChange={(e) => setName(e.target.value)}
            />
          </StyledTextInputContainer>
          <StyledTextInputContainer>
            <Text>Estado:</Text>
            <DropDownList
              defaultValue={proyecto.estado}
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
              defaultValue={proyecto.fechaCreacion}
              onChange={(e) => setDateStart(e.target.value)}
            ></Date>
          </StyledTextInputContainer>
          <StyledTextInputContainer>
            <Text>Fecha estimada de fin:</Text>
            <Date
              defaultValue={proyecto.fechaFin}
              onChange={(e) => setDateFinish(e.target.value)}
            ></Date>
          </StyledTextInputContainer>
          <StyledTextInputContainer>
            <Text>Descripcion:</Text>
          </StyledTextInputContainer>
          <DescriptionContainer>
            <DescriptionInput
              type="text"
              defaultValue={proyecto.descripcion}
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
