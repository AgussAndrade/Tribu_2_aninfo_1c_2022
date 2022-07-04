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
  const [productos, setProductos] = useState([]);
  const [versionId, setVersionId] = useState(1)
  const config = {url: SOPORTE_URL + "soporte/productos", config: {
      headers: {"Content-Type": "application/json"},
      method: "GET"
    }}

  useEffect(() => {
    fetch(config.url, config.config)
        .then((res) => res.json())
        .then((result) => {
          setProductos(result);
        })
        .catch(() => navigate("/error"))
  }, [])

  const Cards = () => {
    return productos
      .filter((val) => {
        if (searchTerm == "") return val;
        else if (
          val.nombre.toLocaleLowerCase().includes(searchTerm.toLowerCase())
        )
          return val;
      })
      .map((producto) => {
        return producto.versiones.map((dataVersion) => {
          return (
            <SupportCard
              nombreProducto={producto.nombre ?? "TITULO TEMPORAL"}  
              descripcionProducto={producto.fase ?? "DESCRIPCION TEMPORAL"} 
              idProducto={producto.id ?? "ID TEMPORAL"}
              ticketsAbiertos={producto.ticketsAbiertos}
              ticketsCerrados={producto.ticketsCerrados}
              versionProducto = {dataVersion.numero_version}
              versionId = {dataVersion.id}
              key={producto.id}
              onClick={() => {
                  setVersionId(dataVersion.id)
                  setModalShow(true);
              }}
            />
          )
        })
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
            form = {<TicketCreateForm versionId = {versionId}/>}

            title = {"Crear ticket"}
        />
      </BodyContainer>
    </PrincipalContainer>
  );
};