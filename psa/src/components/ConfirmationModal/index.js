import React from "react";
import { colors } from "../../utils/colors";
import {
  ModalContainer,
  TitleContainer,
  Title,
  Overlay,
  TextContainer,
  ModalButton,
  ButtonContainer,
  Buttons,
} from "./styled";

export const ConfirmationModal = (props) => {
  const { open, actionText, titleText, onClose, onAccept} = props;
  if (!open) return null;

  return (
    <Overlay>
      <ModalContainer>
        <TitleContainer>
          <Title>{titleText}</Title>
        </TitleContainer>
        <TextContainer>
          <p>¿Está seguro que quiere {actionText}?</p>
        </TextContainer>
        <Buttons>
          <ButtonContainer>
            <ModalButton onClick={onAccept} color={colors.red}>
              Confirmar
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
