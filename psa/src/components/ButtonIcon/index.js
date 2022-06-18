import React from "react";
import { ButtonContainer, ButtonCustom, Icon } from "./styled";

export const ButtonIcon = (props) => {
	const {img, name, onClick} = props
  return (
    <ButtonContainer>
      <ButtonCustom onClick= {onClick}>
        {name}
        <Icon src={img} />
      </ButtonCustom>
    </ButtonContainer>
  );
};
