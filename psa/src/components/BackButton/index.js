import React from "react";
import { useNavigate } from "react-router-dom";
import back from "../../utils/icons/back.png";
import { ButtonContainer, Icon, IconContainer } from "./styled";

export const BackButton = () => {
  const navigate = useNavigate();

  return (
    <ButtonContainer onClick={() => navigate(-1)}>
      <IconContainer>
        <Icon src={back} />
      </IconContainer>
    </ButtonContainer>
  );
};
