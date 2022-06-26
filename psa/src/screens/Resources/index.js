import React, { useState } from "react";
import { PrincipalContainer } from "../Home/styled";
import { TopBar } from "../../components/TopBar";
import { useNavigate } from "react-router-dom";
import { FormContainer, FormBtnLink } from "./styled";
import { FormGroupComp } from "../../components/FormGroup";

export const Resources = () => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");

  return (
    <PrincipalContainer>
      <TopBar buttonSelected={"Recursos"}/>
      <FormContainer >
        <FormGroupComp
          controlId="name"
          label="Ingrese nombre del Empleado"
          type="input"
          name="name"
          placeholder="Juan Lopez"
          handleChange={setName}
        />
        <FormGroupComp 
          controlId="date"
          label="Ingrese una Fecha"
          type="date"
          name="date"
          placeholder=""
          handleChange={setDate}
        />
      </FormContainer>
      <FormBtnLink
          to={"/resources/employee"}
          state={{name:name,
                  date:date}}
        >Continuar
      </FormBtnLink>
    </PrincipalContainer>
  );
};
