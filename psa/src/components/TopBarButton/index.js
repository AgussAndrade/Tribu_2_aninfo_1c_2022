import React from "react";
import { ButtonContainer, StyledButton } from "./styled";

export const TopBarButton = (props) => {
  const {buttonSelected, name, onClick} = props;

  return (
    <ButtonContainer>
        {buttonSelected ?
         <StyledButton onClick={onClick} selected>{name}</StyledButton> :
         <StyledButton onClick={onClick}>{name}</StyledButton>}
    </ButtonContainer>
    )
};
