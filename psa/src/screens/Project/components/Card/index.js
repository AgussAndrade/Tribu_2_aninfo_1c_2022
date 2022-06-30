import React from "react";
import { useNavigate } from "react-router-dom";
import {
  CardContainer,
  CardTextContainer,
  TitleText,
  DescriptionText,
  InfoProjectContainer
} from "./styled";
import { colors } from "../../../../utils/colors"
import { GenericButton } from "../../../../components/GenericButton"

export const Card = (props) => {
    const {nombreProyecto, descripcionProyecto, onClick} = props;
		const navigate = useNavigate();
    return(
        <CardContainer>
          <CardTextContainer>
            <TitleText>
            	{nombreProyecto}
            </TitleText>
            <DescriptionText>
            	{descripcionProyecto}
            </DescriptionText>
          </CardTextContainer>
          <InfoProjectContainer>
            <GenericButton
              name={"Informacion"}
              onClick={onClick}
              color = {colors.lightBlue}
            ></GenericButton>
          </InfoProjectContainer>
        </CardContainer>
    );
}