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

export const ProjectCard = (props) => {
    const {nombreProyecto, descripcionProyecto, fechaInicio, estadoProyecto,fechaEstimadaFin, lider, onClick} = props;
    return(
        <CardContainer>
          <CardTextContainer>
            <TitleText>
            	{nombreProyecto}
            </TitleText>
            <ProjectInfoText>
                {estadoProyecto}
            </ProjectInfoText>
            <ProjectInfoText>
            	{descripcionProyecto}
            </ProjectInfoText>
            <ProjectInfoText>
            	{fechaInicio}
            </ProjectInfoText>
            <ProjectInfoText>
            	{fechaEstimadaFin}
            </ProjectInfoText>
            <ProjectInfoText>
            	{lider}
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