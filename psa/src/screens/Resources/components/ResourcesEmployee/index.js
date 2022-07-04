import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { PrincipalContainer } from "../../../Home/styled";
import { TopBar } from "../../../../components/TopBar";
import { ResourcesHoursForm } from "../ResourcesHoursForm";
import { ResourcesHoursTable } from "../ResourcesHoursTable";
import { Container, FormControl } from "./styled";

export const ResourcesEmployee = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const date = location.state?.date;
  const id = location.state?.id;
  const name = location.state?.name;

  return (
    <PrincipalContainer>
      <TopBar buttonSelected={"Recursos"}/>
      <Container>
        Administracion Horas
      </Container>
      <ResourcesHoursForm legajo={id} name={name} date={date}></ResourcesHoursForm>
      <ResourcesHoursTable legajo={id} date={date}></ResourcesHoursTable>
    </PrincipalContainer>
  );
};