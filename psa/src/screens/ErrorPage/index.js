import React from "react";
import { useNavigate } from "react-router-dom";
import { GenericButton } from "../../components/GenericButton";
import { colors } from "../../utils/colors";
import { PrincipalContainer } from "../Project/styled";
import { BackButton, ErrorMessage, ErrorMessageContainer } from "./styled";

export const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <ErrorMessageContainer>
      <ErrorMessage>
        Lo sentimos, ocurrió un error. Intente de nuevo en unos minutos
      </ErrorMessage>
      <BackButton>
        <GenericButton
          color={colors.lightBlue}
          name={"Volver"}
          onClick={() => navigate("/")}
        />
      </BackButton>
    </ErrorMessageContainer>
  );
};
