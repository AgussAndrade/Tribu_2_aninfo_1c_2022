import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { PrincipalContainer } from "../../../Home/styled";
import { TopBar } from "../../../../components/TopBar";
import { ResourcesHoursForm } from "../ResourcesHoursForm";
import { ResourcesHoursTable } from "../ResourcesHoursTable";
import { Container, FormControl } from "./styled";

export const ResourcesEmployee = (props) => {
  const [reload,setReload] = useState(0);
  const [boolReload, setBoolReload] = useState(true) 

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
      <ResourcesHoursForm reload={reload} setReload={setReload} legajo={id} name={name} date={date}></ResourcesHoursForm>
      <ResourcesHoursTable reload={reload} setReload={setReload} toggleReload={() => setBoolReload(!boolReload)} legajo={id} date={date}></ResourcesHoursTable>
    </PrincipalContainer>
  );
};