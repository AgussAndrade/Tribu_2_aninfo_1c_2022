import React from "react";
import { ButtonContainer, ButtonCustom, Icon, IconContainer } from "./styled";

export const ButtonIcon = (props) => {
  const { img, name, onClick } = props;
  return (
    <ButtonContainer>
      <ButtonCustom onClick={onClick}>
        {name}
        <IconContainer>
          <Icon src={img} />
        </IconContainer>
      </ButtonCustom>
    </ButtonContainer>
  );
};
