import React, { useEffect } from "react";
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
import { SupportCard } from "./components/SupportCard";
import { GenericModal } from "../Support/components/GenericModal";
import { useParams } from 'react-router';
import { SOPORTE_URL } from "../../utils/apiUrls";


export const SupportTicketViews = () => {
  const [searchTerm, setSerchTerm] = useState("");
  const [currentForm, setCurrentForm] = useState("");
  const [currentTitleModal, setCurrentTitleModal] = useState("");
  const [modalShow, setModalShow] = useState(false);
  const [modalSize, setModalSize] = useState("lg");
  const { id } = useParams();
  const [tickets, setTickets] = useState([]);

  //get para buscar los tickets asociados a un producto
  const config = {
    url: SOPORTE_URL + "soporte/tickets?versionId=" + id, config: {
      headers: { "Content-Type": "application/json" },
      method: "GET"
    }
  }

  useEffect(() => {
    fetch(config.url, config.config)
      .then((res) => res.json())
      .then((result) => {
        setTickets(result);
      })
      .catch(() => navigate("/error"))
  }, [])

  


  const ticketss = [
    {
      nombre: "El inventario no se actualiza correctamente",
      tareas: "10",
      estado: "Desarrollo",
      severidad: "CRITICO",
      responsable: "Yo",
      vencimiento: "21/12/2022",
      id:"123",
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
      vencimiento: "03/09/2022",
      id:125,
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
      vencimiento: "21/10/2022",
      id:12223,
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
      vencimiento: "21/10/2022",
      id:12123455,
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
      vencimiento: "21/10/2022",
      id:1251235,
      tarea5: [
        {
          nombre: "Nombre5",
          descripcion: "Esta es la descripcion de tarea 5",
          fechaCreacion: "fecha5",
        },
      ],
    },
  ];

  console.log(tickets)
  const Cards = () => {
    return ticketss
      .filter((val) => {
        if (searchTerm === "") return val;
        else if (
          val.nombre.toLocaleLowerCase().includes(searchTerm.toLowerCase())
        )
          return val;
      })
      .map((ticket) => (
        <SupportCard
          nombreTicket={ticket.nombre}
          tareasTicket={ticket.tareas} // FIJARSE, PORQUE ACÁ PUEDO HACER UN COUNT DE TAREAS
          estadoTicket={ticket.estado}
          severidadTicket={ticket.severidad}
          responsableTicket={ticket.responsable}
          vencimientoTicket={ticket.vencimiento}
          cuitClienteTicket={ticket.cuit}
          idTicket={ticket.id}
          versionId={ticket.version_id}
          openModal={setModalShow}
          setCurrentForm={setCurrentForm}
          setCurrentTitleModal={setCurrentTitleModal}
          setModalSize={setModalSize}
        />
      ));
  };

  const navigate = useNavigate();
  return (
    <PrincipalContainer>
      <TopBar buttonSelected={"Soporte"} />
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
      </OptionsContainer>
      <BodyContainer>
        <Cards />
        <GenericModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          form={currentForm}
          title={currentTitleModal}
          size={modalSize}
        />
      </BodyContainer>
    </PrincipalContainer>
  );
};