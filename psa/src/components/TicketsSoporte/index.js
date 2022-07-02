import React from "react";
import { useNavigate } from "react-router-dom";
import {
  PrincipalContainer,
  OptionsContainer,
  Container,
  ButtonNewProyect,
  BodyContainer,
  Input,
  InputContainer,
} from "./styled";
import { Card } from "./components/Card";
import { TopBar } from "../../components/TopBar";
import { GenericButton } from "../../components/GenericButton";
import { colors } from "../../utils/colors";
import { useState } from "react";

export const TicketsSoporte = (props) => {
  const [searchTerm, setSerchTerm] = useState("");
  const {titulo} = props
  const tickets = [
    {
      nombre: "Proyecto: Prueba de titulo",
      tareas: "10",
      estado: "cerrado",
      severidad: "Alta",
      responsable: "Yo",
      vencimiento: "En 10 días"
      //seguir agregando datos faltantes
      
    },
    {
      nombre: "Proyecto: Aprobar aninfo",
      tareas: "10",
      estado: "cerrado",
      severidad: "Alta",
      responsable: "Yo",
      vencimiento: "En 10 días"
    },
    {
      nombre: "Proyecto: Ejemplo para filtrar",
      tareas: "10",
      estado: "cerrado",
      severidad: "Alta",
      responsable: "Yo",
      vencimiento: "En 10 días"
    },
    {
      nombre: "Proyecto: Dividir por dos cifras",
      tareas: "10",
      estado: "cerrado",
      severidad: "Alta",
      responsable: "Yo",
      vencimiento: "En 10 días"
    },
    {
      nombre: "Proyecto: Ultimo ejemplo",
      tareas: "10",
      estado: "cerrado",
      severidad: "Alta",
      responsable: "Yo",
      vencimiento: "En 10 días"
    },
  ];

  const Cards = () => {
    return tickets
      .filter((val) => {
        if (searchTerm == "") return val;
        else if (
          val.nombre.toLocaleLowerCase().includes(searchTerm.toLowerCase())
        )
          return val;
      })
      .map((tickets) => (
        <Card
          nombreProyecto={tickets.nombre}
          tareas={tickets.tareas}
          estado={tickets.estado}
          severidad={tickets.severidad}
          responsable={tickets.responsable}
          vencimiento={tickets.vencimiento}
          
        />
      ));
  };

  const navigate = useNavigate();
  return (
    <PrincipalContainer>
      <OptionsContainer>
        <InputContainer>
          <Input
            type="text"
            placeholder="Buscar ticket"
            onChange={(event) => {
              setSerchTerm(event.target.value);
            }}
          />
        </InputContainer>
        <ButtonNewProyect>
          <GenericButton
            name={"Volver"}
            onClick={() => {
              navigate("/");
            }}
            color={colors.lightBlue}
          ></GenericButton>
        </ButtonNewProyect>
      </OptionsContainer>
      <BodyContainer>
        <Cards />
      </BodyContainer>
    </PrincipalContainer>
  );
};
