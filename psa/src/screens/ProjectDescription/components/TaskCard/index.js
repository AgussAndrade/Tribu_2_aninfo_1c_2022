import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  CardContainer,
  CardTextContainer,
  TitleText,
  ProjectInfoText,
  EditProjectContainer,
  DeleteButtonContainer,
  Buttons,
  AddEmployeeContainer,
} from "./styled";
import { colors } from "../../../../utils/colors";
import { GenericButton } from "../../../../components/GenericButton";
import { DeleteButton } from "../../../../components/DeleteButton";
import { EditionTaskModal } from "../EditionTaskModal";


export const TaskCard = (props) => {
  const { tarea, id } = props;
  const [deleteTask, setDeleteTask] = useState(false);
  const [showModalTask, setShowModalTask] = useState(false);

  const navigate = useNavigate();
  const url = "https:moduloproyectos.herokuapp.com/proyectos/"+ id + "/tareas/" + tarea.id;

  useEffect(() => {
    if (deleteTask) {
      fetch(url, {
        method: "DELETE",
      })
      .then(() => window.location.reload())
      .catch(() => navigate("/error"));
    }
  }, [deleteTask]);

  return (
    <CardContainer>
      <EditionTaskModal
        open={showModalTask}
        onClose={() => setShowModalTask(false)}
        tarea= {tarea}
      />
      <CardTextContainer>
        <TitleText>{"Tarea: " + tarea.nombre}</TitleText>
        <ProjectInfoText>{"Descripción: " + tarea.descripcion}</ProjectInfoText>
        <ProjectInfoText>
          {"Fecha creación: " + tarea.fechaCreacion}
        </ProjectInfoText>
        <ProjectInfoText>{"Estado: " + tarea.estado}</ProjectInfoText>
      </CardTextContainer>
      <Buttons>
        <DeleteButtonContainer>
          <DeleteButton
            setDelete={setDeleteTask}
            optionText={"tarea"}
            icon={true}
          />
        </DeleteButtonContainer>
        <AddEmployeeContainer>
          <GenericButton
            name={"Agregar Empleado"}
            onClick={onClick}
            color={colors.lightBlue}
          ></GenericButton>
        </AddEmployeeContainer>
        <EditProjectContainer>
          <GenericButton
            name={"Editar"}
            onClick={() => setShowModalTask(true)}
            color={colors.lightBlue}
          ></GenericButton>
        </EditProjectContainer>
      </Buttons>
    </CardContainer>
  );
};
