import React from "react";
import { ButtonContainer, StyledButton } from "./styled";

export const TopBarButton = (props) => {
  const { name, onClick} = props;
  return (
    <ButtonContainer>
        <StyledButton onClick={onClick}>{name}</StyledButton>
    </ButtonContainer>
    )
};
