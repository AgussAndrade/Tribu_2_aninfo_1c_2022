import React, { useState } from "react";
import {
  CardContainer,
  CardTextContainer,
  TitleText,
  ProjectInfoText,
  EditProjectContainer,
  DeleteButtonContainer,
  Buttons,
} from "./styled";
import { colors } from "../../../../utils/colors";
import { GenericButton } from "../../../../components/GenericButton";
import { DeleteButton } from "../../../../components/DeleteButton";

export const TaskCard = (props) => {
  const { tarea, onClick } = props;
  const [deleteTask, setDeleteTask] = useState(false);

  return (
    <CardContainer>
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
        <EditProjectContainer>
          <GenericButton
            name={"Editar"}
            onClick={onClick}
            color={colors.lightBlue}
          ></GenericButton>
        </EditProjectContainer>
      </Buttons>
    </CardContainer>
  );
};
