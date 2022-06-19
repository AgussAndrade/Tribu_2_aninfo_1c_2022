import React from "react";
import { LogoContainer, Icon } from "./styled";
import psa_logo from "../../utils/icons/psa_logo.png";

export const PsaLogo = () => {
  return (
    <LogoContainer>
        <Icon src={psa_logo} />
    </LogoContainer>
  );
};