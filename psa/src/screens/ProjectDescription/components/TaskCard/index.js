import React, { useState } from "react";
import {
  CardContainer,
  CardTextContainer,
  TitleText,
  ProjectInfoText,
  EditProjectContainer,
  DeleteButtonContainer,
} from "./styled";
import { colors } from "../../../../utils/colors";
import { GenericButton } from "../../../../components/GenericButton";
import { DeleteButton } from "../../../../components/DeleteButton";

export const TaskCard = (props) => {
  const { nombreTarea, descripcionTarea, fechaCreacion, estado, onClick } =
    props;
  const [deleteTask, setDeleteTask] = useState(false);

  return (
    <CardContainer>
      <CardTextContainer>
        <TitleText>{nombreTarea}</TitleText>
        <ProjectInfoText>{descripcionTarea}</ProjectInfoText>
        <ProjectInfoText>{fechaCreacion}</ProjectInfoText>
        <ProjectInfoText>{estado}</ProjectInfoText>
      </CardTextContainer>
      <EditProjectContainer>
        <DeleteButtonContainer>
          <DeleteButton setDelete={setDeleteTask} optionText={"tarea"} />
        </DeleteButtonContainer>
        <GenericButton
          name={"Editar"}
          onClick={onClick}
          color={colors.lightBlue}
        ></GenericButton>
      </EditProjectContainer>
    </CardContainer>
  );
};
