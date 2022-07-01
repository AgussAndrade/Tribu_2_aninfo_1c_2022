import React, { useState } from "react";
import { PrincipalContainer } from "../Home/styled";
import { TopBar } from "../../components/TopBar";
import { useNavigate } from "react-router-dom";
import { FormContainer, FmtButton } from "./styled";
import { FormGroupContainer } from "../../components/FormGroup";

export const Resources = () => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [error,setError] = useState(false)
  const axios = require ("axios");
//to={"/resources/employee"}
// state={{name:name,
  // date:date}}
  const handleSubmit = ()=>{
    axios.get('https://anypoint.mulesoft.com/mocking/api/v1/sources/exchange/assets/754f50e8-20d8-4223-bbdc-56d50131d0ae/recursos-psa/1.0.0/m/api/recursos').then(
      (repos) => {
        if(repos.status == 200){

        }else{
          setError(true);
        };
      }
    );
  };
  return (
    <PrincipalContainer>
      <TopBar buttonSelected={"Recursos"}/>
      {error && <label>error</label> }
      <FormContainer >
        <FormGroupContainer
          controlId="name"
          label="Ingrese nombre del Empleado"
          type="input"
          name="name"
          placeholder="Juan Lopez"
          handleChange={setName}
        />
        <FormGroupContainer
          controlId="date"
          label="Ingrese una Fecha"
          type="date"
          name="date"
          placeholder=""
          handleChange={setDate}
        />
      </FormContainer>
      <FmtButton
        onClick={handleSubmit}
        >Continuar
      </FmtButton>
    </PrincipalContainer>
  );
};
