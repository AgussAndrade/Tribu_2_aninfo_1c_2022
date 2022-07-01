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
import { Card } from "./components/Card";
import { TopBar } from "../../components/TopBar";
import { GenericButton } from "../../components/GenericButton";
import { colors } from "../../utils/colors";
import { useState } from "react";

export const Project = () => {
  const [searchTerm, setSerchTerm] = useState("");
  const proyectos = [
    {
      nombre: "Proyecto: Prueba de titulo",
      descripcion: "Cuando hablamos del Adress space nos referimos a la abstraccion que provee el kernel del sistema operativo al proceso sobre la memoria de la computadora. Este representa el estado completo de la memoria de un proceso y esta compuesto por cuatro secciones: code, data, heap y stack",
      tarea1: [
        {
          nombre: "Nombre1",
          descripcion: "Esta es la descripcion de tarea 1",
          fechaCreacion: "fecha1",
        },
      ],
    },
    {
      nombre: "Proyecto: Aprobar aninfo",
      descripcion: "Esta es la descripcion2",
      tarea2: [
        {
          nombre: "Nombre2",
          descripcion: "Esta es la descripcion de tarea 2",
          fechaCreacion: "fecha2",
        },
      ],
    },
    {
      nombre: "Proyecto: Ejemplo para filtrar",
      descripcion: "Esta es la descripcion3",
      tarea3: [
        {
          nombre: "Nombre3",
          descripcion: "Esta es la descripcion de tarea 3",
          fechaCreacion: "fecha3",
        },
      ],
    },
    {
      nombre: "Proyecto: Dividir por dos cifras",
      descripcion: "Esta es la descripcion4",
      tarea4: [
        {
          nombre: "Nombre4",
          descripcion: "Esta es la descripcion de tarea 4",
          fechaCreacion: "fecha4",
        },
      ],
    },
    {
      nombre: "Proyecto: Ultimo ejemplo",
      descripcion: "Esta es la descripcion5",
      tarea4: [
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
        <Card
          nombreProyecto={proyecto.nombre}
          descripcionProyecto={proyecto.descripcion}
          onClick={() => {
            navigate("/projects/id");
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
            placeholder="Buscar..."
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
