import React from "react";
import { useNavigate } from "react-router-dom";
import {
  PrincipalContainer,
  OptionsContainer,
  ButtonNewProyect,
  BodyContainer,
  Input,
  InputContainer,
} from "./styled";
import { TopBar } from "../../components/TopBar";
import { GenericButton } from "../../components/GenericButton";
import { colors } from "../../utils/colors";
import { useState } from "react";
import { SupportCard} from "./components/SupportCard";

export const SupportTicketViews = () => {
  const [searchTerm, setSerchTerm] = useState("");
  const proyectos = [
    {
      nombre: "El inventario no se actualiza correctamente",
      estado: "Desarrollo",
      severidad: "CRITICO",
      responsable: "Yo",
      tarea1: [
        {
          nombre: "Nombre1",
          descripcion: "Esta es la descripcion de tarea 1",
          fechaCreacion: "fecha1",
        },
      ],
    },
    {
      nombre: "El inventario no se actualiza correctamente",
      estado: "Desarrollo",
      severidad: "CRITICO",
      responsable: "Yo",
      tarea2: [
        {
          nombre: "Nombre2",
          descripcion: "Esta es la descripcion de tarea 2",
          fechaCreacion: "fecha2",
        },
      ],
    },
    {
      nombre: "El inventario no se actualiza correctamente",
      estado: "Desarrollo",
      severidad: "CRITICO",
      responsable: "Yo",
      tarea3: [
        {
          nombre: "Nombre3",
          descripcion: "Esta es la descripcion de tarea 3",
          fechaCreacion: "fecha3",
        },
      ],
    },
    {
      nombre: "El inventario no se actualiza correctamente",
      estado: "Desarrollo",
      severidad: "CRITICO",
      responsable: "Yo",
      tarea4: [
        {
          nombre: "Nombre4",
          descripcion: "Esta es la descripcion de tarea 4",
          fechaCreacion: "fecha4",
        },
      ],
    },
    {
      nombre: "El inventario no se actualiza correctamente",
      estado: "Desarrollo",
      severidad: "CRITICO",
      responsable: "Yo",
      tarea5: [
        {
          nombre: "Nombre5",
          descripcion: "Esta es la descripcion de tarea 5",
          fechaCreacion: "fecha5",
        },
      ],
    },
  ];

  const Cards = () => {
    return proyectos
      .filter((val) => {
        if (searchTerm == "") return val;
        else if (
          val.nombre.toLocaleLowerCase().includes(searchTerm.toLowerCase())
        )
          return val;
      })
      .map((proyecto) => (
        <SupportCard
          nombreProyecto={proyecto.nombre}
          estadoProyecto={proyecto.estado}
          severidadProyecto={proyecto.severidad}
          responsableProyecto={proyecto.responsable}
          onClick={() => {
            navigate("#");
          }}
        />
      ));
  };

  const navigate = useNavigate();
  return (
    <PrincipalContainer>
      <TopBar buttonSelected={"Proyectos"} />
      <OptionsContainer>
        <InputContainer>
          <Input
            type="text"
            placeholder="Buscar Ticket..."
            onChange={(event) => {
              setSerchTerm(event.target.value);
            }}
          />
        </InputContainer>
        <ButtonNewProyect>
          <GenericButton
            name={"Nuevo proyecto"}
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