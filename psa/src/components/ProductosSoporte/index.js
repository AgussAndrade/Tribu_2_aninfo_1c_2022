
import React from "react";
import { useNavigate } from "react-router-dom";
import {
  PrincipalContainer,
  OptionsContainer,
  Container,
  ButtonNewProyect,
  BodyContainer,
  Input,
  InputContainer,TitleText, CardTextContainer
} from "./styled";
import { Card } from "./components/Card";
import { GenericButton } from "../../components/GenericButton";
import { colors } from "../../utils/colors";
import { useState } from "react";

//Pedirle los productos a quien corresponda
export const ProductosSoporte = () => {
  const [searchTerm, setSerchTerm] = useState("");
  const productos = [
    {
      nombre: "Sistema de inventarios 1.1.0",
      ticketsAbiertos: "10 abiertos",
      ticketsCerrados: "2 cerrados",
      
    },
    {
      nombre: "Sistema de inventarios 1.1.1",
      ticketsAbiertos: "100 abiertos",
      ticketsCerrados: "22 cerrados",
    },
    {
      nombre: "Sistema de marketing 2.5.0",
      ticketsAbiertos: "50 abiertos",
      ticketsCerrados: "200 cerrados",
    },
    {
      nombre: "Sistema de ventas 3.0",
      ticketsAbiertos: "150 abiertos",
      ticketsCerrados: "27 cerrados",
    },
    {
      nombre: "Producto: Ultimo ejemplo",
      ticketsAbiertos: "8 abiertos",
      ticketsCerrados: "7 cerrados",
    },
  ];

  const Cards = () => {
    return productos
      .filter((val) => {
        if (searchTerm == "") return val;
        else if (
          val.nombre.toLocaleLowerCase().includes(searchTerm.toLowerCase())
        )
          return val;
      })
      .map((productos) => (
        <Card
          nombreProducto={productos.nombre}
          ticketsAbiertos={productos.ticketsAbiertos}
          ticketsCerrados={productos.ticketsCerrados}
          
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
            placeholder="Buscar producto"
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
      <CardTextContainer>
            <TitleText>
            	Listado de productos y versiones
            </TitleText>
            </CardTextContainer>
      <BodyContainer>
        <Cards />
      </BodyContainer>
    </PrincipalContainer>
  );
};
