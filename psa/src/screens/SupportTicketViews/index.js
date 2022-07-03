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
import { GenericModal } from "../Support/components/GenericModal";
import {getDiffDate} from "../../utils/getCurrentDate";


export const SupportTicketViews = () => {
  const [searchTerm, setSerchTerm] = useState("");
  const [currentForm, setCurrentForm] = useState("");
  const [currentTitleModal, setCurrentTitleModal] = useState("");
  const [modalShow, setModalShow] = useState(false)
  const [modalSize, setModalSize] = useState("lg")
  const tickets = [
    {
      nombre: "El inventario no se actualiza correctamente",
      tareas: "10",
      estado: "Desarrollo",
      severidad: "CRITICO",
      responsable: "Yo",
      vencimiento: "21/12/2022",
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
        if (searchTerm === "") return val;
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
          severidadProyecto={getDiffDate(new Date(), ticket.vencimiento) + " Dias"}
          responsableProyecto={ticket.responsable}
          vencimientoProyecto={ticket.vencimiento}
          openModal={setModalShow}
          setCurrentForm = {setCurrentForm}
          setCurrentTitleModal = {setCurrentTitleModal}
          setModalSize = {setModalSize}
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
            form = {currentForm}
            title = {currentTitleModal}
            size = {modalSize}
        />
      </BodyContainer>
    </PrincipalContainer>
  );
};