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
import { DerivateTicketForm } from "../Support/components/DerivateTicketForm";
import { GenericModal } from "../Support/components/GenericModal";


export const SupportTicketViews = () => {
  const [searchTerm, setSerchTerm] = useState("");
  const [modalShow, setModalShow] = useState(false)
  const tickets = [
    {
      nombre: "El inventario no se actualiza correctamente",
      tareas: "10",
      estado: "Desarrollo",
      severidad: "CRITICO",
      responsable: "Yo",
      vencimiento: "10 dias",
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
      tareas: "10",
      estado: "Desarrollo",
      severidad: "CRITICO",
      responsable: "Yo",
      vencimiento: "10 dias",
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
      tareas: "10",
      estado: "Desarrollo",
      severidad: "CRITICO",
      responsable: "Yo",
      vencimiento: "10 dias",
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
      tareas: "10",
      estado: "Desarrollo",
      severidad: "CRITICO",
      responsable: "Yo",
      vencimiento: "10 dias",
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
      tareas: "10",
      estado: "Desarrollo",
      severidad: "CRITICO",
      responsable: "Yo",
      vencimiento: "10 dias",
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
    return tickets
      .filter((val) => {
        if (searchTerm == "") return val;
        else if (
          val.nombre.toLocaleLowerCase().includes(searchTerm.toLowerCase())
        )
          return val;
      })
      .map((ticket) => (
        <SupportCard
          nombreProyecto={ticket.nombre}
          tareasProyecto={ticket.tareas} // FIJARSE, PORQUE ACÁ PUEDO HACER UN COUNT DE TAREAS
          estadoProyecto={ticket.estado}
          severidadProyecto={ticket.severidad}
          responsableProyecto={ticket.responsable}
          vencimientoProyecto={ticket.vencimiento}
          derivateOnClick={() => {
            setModalShow(true);
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
        <GenericModal
            show={modalShow}
            onHide={() => setModalShow(false)}
            form = {<DerivateTicketForm/>}
            title = {"Derivar ticket"}
        />
      </BodyContainer>
    </PrincipalContainer>
  );
};