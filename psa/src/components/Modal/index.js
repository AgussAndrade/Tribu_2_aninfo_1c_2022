import React from "react";
import { useNavigate } from "react-router-dom";
import { ModalContainer, Overlay } from "./styled";

export const Modal = (props) => {
  const { open, onClose } = props;
  const navigate = useNavigate();
  
  if (!open) return null;
  return (
    <Overlay>
    <ModalContainer>
      <p>Esto es soporte</p>
      <button onClick={() => navigate(-1)}>Volver</button>
      <button onClick={onClose}>Cerrar pop up</button>
    </ModalContainer>
    </Overlay>
  );
};
