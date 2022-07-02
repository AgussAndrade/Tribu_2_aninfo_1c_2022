import React from "react";
import { useNavigate } from "react-router-dom";
import { GenericButton } from "../GenericButton";
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

export const Modal = (props) => {
  const { open, onClose } = props;
  const navigate = useNavigate();

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
            <Input type="text" />
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
            <DescriptionInput>
              
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
