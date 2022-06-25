import React from "react";
import { useNavigate } from "react-router-dom";
import { PrincipalContainer } from "../../../Home/styled";
import { TopBar } from "../../../../components/TopBar";

export const ResourcesEmployee = () => {
  const navigate = useNavigate();
  return (
    <PrincipalContainer>
      <TopBar buttonSelected={"Recursos"}/>
      <p>
          Esta es la vista de un empleado. 
          Debe tener pestañas para Administración de horas y Perfil de empleado
      </p>
    </PrincipalContainer>
  );
};