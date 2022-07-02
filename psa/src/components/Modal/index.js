import React from "react";
import { useNavigate } from "react-router-dom";
import { GenericButton } from "../GenericButton";
import { ButtonContainer, ModalContainer, Overlay, TextContainer, Title, TitleContainer } from "./styled";
import { colors } from "../../utils/colors";

export const Modal = (props) => {
  const { open, onClose } = props;
  const navigate = useNavigate();
  
  if (!open) return null;
  return (
    <Overlay>
    <ModalContainer>
      <TitleContainer>
        <Title>
        Editar proyecto
        </Title>
      </TitleContainer>
      <TextContainer>
        otro
      </TextContainer>
      <ButtonContainer>
        {/* <GenericButton>
          name={"Editar"}
          color = {colors.gre2}
          onClick={onClose}
        </GenericButton>
        <GenericButton>
          name={"Editar"}
          color = {colors.gre2}
          onClick={onClose}
        </GenericButton> */}
        <button onClick={() => navigate(-1)}>Volver</button>
        <button onClick={onClose}>Cerrar pop up</button>
      </ButtonContainer>
    </ModalContainer>
    
    </Overlay>
  );
};
