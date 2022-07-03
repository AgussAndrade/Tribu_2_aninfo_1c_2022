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
import { Project } from "../../../Project";

export const EditionModal = (props) => {
  const { open, onClose, titulo, proyecto, listEmployees } = props;
  console.log(proyecto);
  console.log(proyecto.nombre);
  const nombre = proyecto.nombre;
  const [name, setName] = useState(nombre);
  const [description, setDescription] = useState("proyecto.descripcion");
  const [dateStart, setDateStart] = useState("proyecto.fechaInicio");
  const [dateFinish, setDateFinish] = useState(proyecto.fechaFin);
  const [leaderID, setLeaderID] = useState(proyecto.leaderID);
  const [state, setState] = useState(proyecto.estado);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();



  console.log(name);
  console.log(description);
  console.log(dateStart);
  console.log(dateFinish);
  console.log(state);
  console.log(leaderID);

  let newProject = {
    estado: proyecto.estado,
    fechaFin: proyecto.fechaFin,
    fechaInicio: proyecto.fechaInicio,
    id: proyecto.id,
    legajoLider: proyecto.legajoLider,
    nombre: proyecto.nombre,
  };

  const checkLeaderId = () => {
    let value = false;
    console.log("La lista de empleados es ");
    
    listEmployees.forEach((empleado) => {
      if (empleado.legajo == leaderID) {
        console.log("entras aca mauqina?");
        value = true;
      }
    });
    return value;
  };

  const saveInput = () => {
    console.log("Print en save");
    console.log("lider id en save", leaderID);
    if (
      name &&
      description &&
      dateStart &&
      dateFinish &&
      state &&
      checkLeaderId()
    ) {
      newProject = {
        estado: state,
        fechaFin: dateFinish,
        fechaInicio: dateStart,
        legajoLider: leaderID,
        nombre: name,
      };
      console.log(newProject);
      console.log("https:moduloproyectos.herokuapp.com/proyectos/" + proyecto.id);
      fetch("https:moduloproyectos.herokuapp.com/proyectos/" + proyecto.id, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newProject),
      })
        // .then(() => window.location.reload())
        .catch(() => navigate("/error"));
      handleClose();
    } else {
      if(name &&
        description &&
        dateStart &&
        dateFinish &&
        state && leaderID){
        setErrorMessage("Ingrese un ID valido");
      }
      else{
        setErrorMessage("Rellene todos los campos");
      }
      console.log("Esto es ",proyecto.legajoLider);

      
      if (proyecto.nombre != name) setName(proyecto.nombre);
      if (proyecto.estado !=state) setState(proyecto.estado);
      if (proyecto.fechaFin != dateFinish) setDateFinish(proyecto.fechaFin);
      if (proyecto.fechaInicio != dateStart) setDateStart(proyecto.fechaInicio);
      if (!description) setDescription(proyecto.descripcion); //cambiar descripcion
      if (proyecto.legajoLider != leaderID) setLeaderID(proyecto.legajoLider);
       
    }
  };

  const handleClose = () => {
    setErrorMessage("");
    setState(proyecto.estado);
    setDateFinish(proyecto.fechaFin);
    setDateStart(proyecto.fechaInicio);
    setDescription(proyecto.descripcion);;
    setName(proyecto.nombre);
    setLeaderID(proyecto.legajoLider);
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
              defaultValue={proyecto.fechaInicio}
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
            <Text>Legajo lider:</Text>
            <Input type="text" onChange={(e) => setLeaderID(e.target.value)} defaultValue={proyecto.legajoLider} />
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
          <ErrorMessageContainer>{errorMessage}</ErrorMessageContainer>
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
