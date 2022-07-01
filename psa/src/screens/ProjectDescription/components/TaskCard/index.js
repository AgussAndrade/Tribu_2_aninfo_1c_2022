import React from "react";
import {
  CardContainer,
  CardTextContainer,
  TitleText,
  ProjectInfoText,
  EditProjectContainer
} from "./styled";
import { colors } from "../../../../utils/colors"
import { GenericButton } from "../../../../components/GenericButton"

export const TaskCard = (props) => {
    const {nombreTarea, descripcionTarea, fechaCreacion, estado, onClick} = props;
    return(
        <CardContainer>
          <CardTextContainer>
            <TitleText>
            	{nombreTarea}
            </TitleText>
            <ProjectInfoText>
            	{descripcionTarea}
            </ProjectInfoText>
            <ProjectInfoText>
            	{fechaCreacion}
            </ProjectInfoText>
            <ProjectInfoText>
            	{estado}
            </ProjectInfoText>
          </CardTextContainer>
          <EditProjectContainer>
            <GenericButton
              name={"Editar"}
              onClick={onClick}
              color = {colors.lightBlue}
            ></GenericButton>
          </EditProjectContainer>
        </CardContainer>
    );
}