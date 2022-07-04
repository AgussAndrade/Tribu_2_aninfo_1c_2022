import React, { useState } from "react";
import {
  BodyContainer,
  InputContainer,
  TextContainer,
  DropDownList,
  ModalContainer,
  TitleContainer,
  Overlay,
  Title,
  SelectContainer,
  ButtonContainer,
  ModalButton,
  Buttons,
  CloseContainer,
  Close
} from "./styled";
import { colors } from "../../../../utils/colors";
import Select from "react-select";
import { useNavigate } from "react-router-dom";

export const AddEmployeeModal = (props) => {
  const { open, onClose, listEmployees, tarea } = props;
  

const [employee, setEmployee] = useState("");
const navigate = useNavigate();
  
const handleConfirm = () => {
    
     fetch("https:moduloproyectos.herokuapp.com/tareas/" + tarea.id + "/empleado/" + employee.value, {
         method: "PUT",
         headers: { "Content-Type": "application/json" },
       }).then(() => window.location.reload())
         .catch(() => navigate("/error"));
      onClose();
}

const handleDelete = () => {
    
    fetch("https:moduloproyectos.herokuapp.com/tareas/" + tarea.id + "/empleados/" + employee.value, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      }).then(() => window.location.reload())
        .catch(() => navigate("/error"));
     onClose();
}

if (!open) return null;
  return (
    <Overlay>
      <ModalContainer>
        <TitleContainer>
            <Title>
                Editar empleado
            </Title>
            <CloseContainer>
              <Close onClick={onClose}>
                x
              </Close>
            </CloseContainer>
        </TitleContainer>
        <SelectContainer>
        <Select
          options={listEmployees.map((empleado) => ({
            label: empleado.Nombre + " " + empleado.Apellido,
            value: empleado.legajo,
          }))}
          onChange={(empleado) => setEmployee(empleado)}
        />
        </SelectContainer>
        <Buttons>
        <ButtonContainer>
            <ModalButton onClick={handleDelete} color={colors.lightBlue}> 
                Eliminar
            </ModalButton>
            </ButtonContainer>
            <ButtonContainer>
            <ModalButton onClick={handleConfirm} color={colors.lightBlue}> 
                Confirmar
            </ModalButton>
            </ButtonContainer>
        </Buttons>
      </ModalContainer>
    </Overlay>
  );
};
