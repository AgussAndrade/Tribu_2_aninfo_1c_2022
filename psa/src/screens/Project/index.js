import React from "react";
import { useNavigate } from "react-router-dom";
import {
  PrincipalContainer,
  OptionsContainer,
  ButtonNewProyect,
  BodyContainer,
} from "./styled";
import {Card} from "./components/Card"
import { TopBar } from "../../components/TopBar";
import { GenericButton } from "../../components/GenericButton";
import { colors } from "../../utils/colors";

export const Project = () => {
  const navigate = useNavigate();
  return (
    <PrincipalContainer>
      <TopBar buttonSelected={"Proyectos"} />
      <OptionsContainer>
        <ButtonNewProyect>
          <GenericButton
            name={"Nuevo proyecto"}
            onClick={() => {
              navigate("/support");
            }}
            color = {colors.lightBlue}
          ></GenericButton>
        </ButtonNewProyect>
      </OptionsContainer>
      <BodyContainer>
        <Card nombreProyecto = {"Titulo: Prueba 1"} descripcionProyecto = {"Descripcion: La prueba 1 es esta"} onClick ={() => {
              navigate("/");
            }}/>
        
        <Card nombreProyecto = {"Titulo: Prueba 2"} descripcionProyecto = {"Descripcion: La prueba 2 es esta"} onClick ={() => {
              navigate("/");
            }}/>
        <Card nombreProyecto = {"Titulo: Prueba 3"} descripcionProyecto = {"Descripcion: La prueba 3 es esta"} onClick ={() => {
              navigate("/");
            }}/>
        <Card nombreProyecto = {"Titulo: Prueba 4"} descripcionProyecto = {"Descripcion: La prueba 4 es esta"} onClick ={() => {
              navigate("/");
            }}/>
        <Card nombreProyecto = {"Titulo: Prueba 5"} descripcionProyecto = {"Descripcion: La prueba 5 es esta"} onClick ={() => {
              navigate("/");
            }}/>
        <Card nombreProyecto = {"Titulo: Prueba 6"} descripcionProyecto = {"Descripcion: La prueba 6 es esta"} onClick ={() => {
              navigate("/");
            }}/>
        <Card nombreProyecto = {"Titulo: Prueba 7"} descripcionProyecto = {"Descripcion: La prueba 7 es esta"} onClick ={() => {
              navigate("/");
            }}/>
      </BodyContainer>
    </PrincipalContainer>
  );
};
