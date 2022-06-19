import React from "react";
import { ButtonContainer, ButtonCustom, Icon} from "./styled";
import user_icon from "../../utils/icons/user_icon.png";
export const UserIconButton = () => {
  return (
    <ButtonContainer>
      <ButtonCustom>
        <Icon src={user_icon} />
      </ButtonCustom>
    </ButtonContainer>
  );
};