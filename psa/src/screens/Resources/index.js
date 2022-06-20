import React from "react";
import { useNavigate } from "react-router-dom";
import { PrincipalContainer } from "../Home/styled";
import { TopBar } from "../../components/TopBar";
import { Button } from "./styled";
import { ResourcesInput } from "./components/ResourcesInput";
import { ResourcesSelect } from "./components/ResourcesSelect";

export const Resources = () => {
  const navigate = useNavigate();

  return (
    <PrincipalContainer>
      <TopBar buttonSelected={"Recursos"}/>
      <ResourcesInput label="Ingrese nombre del Empleado:" />
      <ResourcesSelect label="Ingrese fecha:"/>
      <Button
        onClick={() => {
          navigate("/resources/employee");
        }}>
        Continuar
      </Button>
    </PrincipalContainer>
  );
};
