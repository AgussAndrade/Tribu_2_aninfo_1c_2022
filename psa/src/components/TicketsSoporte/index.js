import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  PrincipalContainer,
  OptionsContainer,
  ButtonNewProyect,
  BodyContainer,
  Input,
  InputContainer,
} from "./styled";
import { Card } from "./components/Card";
import { GenericButton } from "../../components/GenericButton";
import { colors } from "../../utils/colors";

export const TicketsSoporte = (props) => {
  const [searchTerm, setSerchTerm] = useState("");
  const tickets = [
    {
      ID: "T001",
      nombre: "La interfaz se congela",
      descripcion:"asdfasdf",
      responsable: "Miguel Suporti",
      estado: "cerrado",
      severidad: "S4",
      fechaDeInicio:"",
      fechaDeFin:"",
      vencimiento: "En 10 días",
      cliente:"ASDF",
      producto:"",
      version:"",
      tareas: "10",
      estado: "cerrado",
      
    },
    {
      ID: "T002",
      nombre: "El inventario no se actualiza correctamente",
      descripcion:"asdfasdf",
      responsable: "Miguel Suporti",
      tareas: "15",
      estado: "cerrado",
      severidad: "S2",
      fechaDeInicio:"",
      fechaDeFin:"",
      vencimiento: "En 10 días",
      cliente:"ASDF",
      producto:"",
      version:"",
      estado: "Abierto",
    },
    {
      ID: "T003",
      nombre: "Falla de seguridad en el producto X",
      descripcion:"asdfasdf",
      responsable: "Roberto Problemi",
      tareas: "15",
      estado: "cerrado",
      severidad: "S1",
      fechaDeInicio:"",
      fechaDeFin:"",
      vencimiento: "Vencido",
      cliente:"ASDF",
      producto:"",
      version:"",
      estado: "Abierto",
    },
    {
      ID: "T004",
      nombre: "La aplicación se cierra de manera inesperada",
      descripcion:"asdfasdf",
      responsable: "Maria Jose Astrada",
      tareas: "8",
      estado: "en progreso",
      severidad: "S3",
      fechaDeInicio:"",
      fechaDeFin:"",
      vencimiento: "En 15 días",
      cliente:"ASDF",
      producto:"",
      version:"",
      estado: "Abierto",
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
          nombreTicket={tickets.nombre}
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
            onClick={() => {navigate("/");}}
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
