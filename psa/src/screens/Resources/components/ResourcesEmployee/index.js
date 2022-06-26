import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { PrincipalContainer } from "../../../Home/styled";
import { TopBar } from "../../../../components/TopBar";
import { ResourcesHoursForm } from "../ResourcesHoursForm";
import { ResourcesHoursTable } from "../ResourcesHoursTable";

export const ResourcesEmployee = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const date = location.state?.date;
  const name = location.state?.name;
  return (
    <PrincipalContainer>
      <TopBar buttonSelected={"Recursos"}/>
      <p>
        Esta es la vista del empleado {name} para la fecha {date}.
      </p>
      <p>
        Debe tener pestañas para Administración de horas y Perfil de empleado
      </p>
      <ResourcesHoursForm date={date}></ResourcesHoursForm>
      <ResourcesHoursTable></ResourcesHoursTable>
    </PrincipalContainer>
  );
};