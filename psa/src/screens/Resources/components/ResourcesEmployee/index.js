import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { PrincipalContainer } from "../../../Home/styled";
import { TopBar } from "../../../../components/TopBar";

export const ResourcesEmployee = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const date = location.state?.date;
  const name = location.state?.name;
  console.log(location);
  return (
    <PrincipalContainer>
      <TopBar buttonSelected={"Recursos"}/>
      <p>
          Esta es la vista de un empleado.{name}{date}
          Debe tener pestañas para Administración de horas y Perfil de empleado
      </p>
    </PrincipalContainer>
  );
};