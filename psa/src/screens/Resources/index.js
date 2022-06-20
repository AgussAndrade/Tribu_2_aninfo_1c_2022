import React from "react";
import { ButtonIcon } from "../../components/ButtonIcon";
import { ButtonsContainer, PrincipalContainer, BodyContainer } from "./styled";
import { TopBar } from "../../components/TopBar";
import { useNavigate } from "react-router-dom";
import { HomePresentation } from "../../components/HomePresentation";

export const Resources = () => {
  const navigate = useNavigate();

  return (
    <TopBar buttonSelected={"Recursos"}/>
  );
};
