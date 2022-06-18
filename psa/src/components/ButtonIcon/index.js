import React from "react";
import { ButtonContainer, ButtonCustom, Icon } from "./styled";
import project_icon from "../../utils/icons/project_icon.png";

export const ButtonIcon = (props) => {
	const {img, name} = props
  return (
    <ButtonContainer>
      <ButtonCustom>
        {name}
        <Icon src={img} />
      </ButtonCustom>
    </ButtonContainer>
  );
};
