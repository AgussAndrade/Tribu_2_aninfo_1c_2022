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
  const { open, onClose } = props;

  const ticket = {
    ID: "T001",
    nombre: "Proyecto: Ultimo ejemplo",
    descripcion:"asdfasdf",
    responsable: "Yo",
    severidad: "S4",
    fechaDeInicio:"",
    fechaDeFin:"",
    cliente:"ASDF",
    producto:"",
    version:"",
    tareas: "10",
    estado: "cerrado",
  };

  const [name, setName] = useState(ticket.nombre);
  const [description, setDescripcion] = useState(ticket.descripcion);
  const [responsiable, setResponsable] = useState(ticket.responsable);
  const [state, setEstado] = useState(ticket.estado);
  const [severity, setSeveridad] = useState(ticket.severidad);
  const [expired, setFechaVencimiento] = useState(ticket.vencimiento);
  const [client, setCliente] = useState(ticket.cliente);
  const [tasks, setTareas] = useState(ticket.tareas);
   
  const saveInput = () => {
    let newTicket = {
      nombre: name,
      tareas: tasks,
      estado: state,
      severidad: severity,
      responsable: responsiable,
      vencimiento: expired,
    };
    console.log(newTicket);
    onClose();
  };

  if (!open) return null;
  return (
    <Overlay>
      <ModalContainer>
        <TitleContainer>
          <Title>Editar ticket</Title>
        </TitleContainer>

        <FormContainer autoComplete="off">
          
          <StyledTextInputContainer>
            <Text>Nombre del ticket:</Text>
            <Input
              type="text"
              defaultValue={ticket.nombre}
              onChange={(e) => setName(e.target.value)}
            />
          </StyledTextInputContainer>

          <StyledTextInputContainer>
            <Text>Descripcion:</Text>
          </StyledTextInputContainer>
          <DescriptionContainer>
            <DescriptionInput
              type="text"
              defaultValue={ticket.descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
            ></DescriptionInput>
          </DescriptionContainer>


          <StyledTextInputContainer>
            <Text>Responsable:</Text>
            <Input
              type="text"
              defaultValue={ticket.responsable}
              onChange={(e) => setResponsable(e.target.value)}
            />
          </StyledTextInputContainer>

          <StyledTextInputContainer>
            <Text>Estado:</Text>
            <DropDownList
              defaultValue={ticket.estado}
              onChange={(e) => setEstado(e.target.value)}
            >
              <option value="Abierto">Abierto</option>
              <option value="Cerrado">Cerrado</option>
              <option value="En proceso">En proceso</option>
            </DropDownList>
          </StyledTextInputContainer>

          <StyledTextInputContainer>
            <Text>Severidad:</Text>
            <DropDownList
              defaultValue={ticket.severidad}
              onChange={(e) => setSeveridad(e.target.value)}
            >
              <option value="S1">S1</option>
              <option value="S2">S2</option>
              <option value="S3">S3</option>
              <option value="S4">S4</option>
              </DropDownList>
          </StyledTextInputContainer>
          
          <StyledTextInputContainer>
            <Text>Vencimento:</Text>
            <Date
              defaultValue={ticket.vencimiento}
              onChange={(e) => setFechaVencimiento(e.target.value)}
            ></Date>
          </StyledTextInputContainer>
          
          <StyledTextInputContainer>
            <Text>Cliente:</Text>
            <Input
              type="text"
              defaultValue={ticket.cliente}
              onChange={(e) => setCliente(e.target.value)}
            />
          </StyledTextInputContainer>
          
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
