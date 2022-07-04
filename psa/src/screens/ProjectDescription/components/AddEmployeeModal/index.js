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
  Close,
  DeleteEmployeeMessageContainer,
  AddEmployeeMessageContainer
} from "./styled";
import { colors } from "../../../../utils/colors";
import Select from "react-select";
import { useNavigate } from "react-router-dom";

export const AddEmployeeModal = (props) => {
  const { open, onClose, listEmployees, tarea } = props;
  const [errorEmployeeMessage, setErrorEmployeeMessage] = useState("");

const [employee, setEmployee] = useState("");
const navigate = useNavigate();
  
const handleConfirm = () => {
    console.log("El vlaor es ", employee.value);
    if(!(tarea.empleados.includes(employee.value)) && (employee.value != undefined)){
     fetch("https:moduloproyectos.herokuapp.com/tareas/" + tarea.id + "/empleados/" + employee.value, {
         method: "PUT",
         headers: { "Content-Type": "application/json" },
       }).then(() => window.location.reload())
         .catch(() => navigate("/error"));
         setErrorEmployeeMessage("");
         onClose();
    }
        else if(employee.value == undefined){
            setErrorEmployeeMessage("Ingrese un empleado");
        }
      else{
        setErrorEmployeeMessage("El empleado ya esta en la tarea");
    }
    
}

const handleDelete = () => {
    if((tarea.empleados.includes(employee.value))){
    fetch("https:moduloproyectos.herokuapp.com/tareas/" + tarea.id + "/empleados/" + employee.value, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      }).then(() => window.location.reload())
        .catch(() => navigate("/error"));
        setErrorEmployeeMessage("");
        onClose();
    }
    else if(employee.value == undefined){
        setErrorEmployeeMessage("Ingrese un empleado");
    }
    else{

        setErrorEmployeeMessage("El empleado no esta en la tarea");
    }

}

const handleCancelar = () => {
    setErrorEmployeeMessage("");
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
              <Close onClick={handleCancelar}>
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
        <AddEmployeeMessageContainer> {errorEmployeeMessage}</AddEmployeeMessageContainer>
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
