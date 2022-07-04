import React, {useEffect} from "react";
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
import { useState } from "react";
import { SupportCard} from "./components/SupportCard";
import {GenericModal} from "./components/GenericModal";
import {TicketCreateForm} from "./components/TicketCreateForm";
import {SOPORTE_URL} from "../../utils/apiUrls";
import {UseFetch} from "../../components/UseFetch";

export const Support = () => {
  const [searchTerm, setSerchTerm] = useState("");
  const [modalShow, setModalShow] = useState(false);
  const [clients, setClients] = useState([])
  const config = {url: SOPORTE_URL + "servicio_externo/clientes", config: {
      headers: {"Content-Type": "application/json"},
      method: "GET"
    }}

  useEffect(() => {
    fetch(config.url, config.config)
        .then((res) => res.json())
        .then((result) => {
          setClients(result);
        })
        .catch(() => navigate("/error"))
  }, [])

  const proyectos = [
    {
      nombre: "Sistema de inventarios",
      descripcion: "Versión: 1.1.0",
      ticketsAbiertos: "1",
      ticketsCerrados: "2",
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
      ticketsAbiertos: "1",
      ticketsCerrados: "2",
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
      ticketsAbiertos: "1",
      ticketsCerrados: "2",
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
      ticketsAbiertos: "1",
      ticketsCerrados: "2",
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
      ticketsAbiertos: "1",
      ticketsCerrados: "2",
      tarea5: [
        {
          nombre: "Nombre5",
          descripcion: "Esta es la descripcion de tarea 5",
          fechaCreacion: "fecha5",
        },
      ],
    },
  ];
  //get a nuestra api en la cual vamos a pedir los productos

  const Cards = () => {
    return proyectos
      .filter((val) => {
        if (searchTerm == "") return val;
        else if (
          val.nombre.toLocaleLowerCase().includes(searchTerm.toLowerCase())
        )
          return val;
      })
      .map((producto) => {
        sessionStorage.setItem("tickets-" + producto.id, producto.tickets)
        return (
          <SupportCard
            nombreProducto={producto.nombre ?? "TITULO TEMPORAL"}  
            descripcionProducto={producto.fase ?? "DESCRIPCION TEMPORAL"} 
            idProducto={producto.id ?? "ID TEMPORAL"}
            ticketsAbiertos={producto.ticketsAbiertos}
            ticketsCerrados={producto.ticketsCerrados}
            key={producto.id}
            
            onClick={() => setModalShow(true)}
          />
        )
      });

    };

  const navigate = useNavigate();
  return (
    <PrincipalContainer>
      <TopBar buttonSelected={"Soporte"} />
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
      </OptionsContainer>
      <BodyContainer>
        <Cards />
        <GenericModal
            show={modalShow}
            onHide={() => setModalShow(false)}
            form = {<TicketCreateForm/>}
            title = {"Crear ticket"}
        />
      </BodyContainer>
    </PrincipalContainer>
  );
};