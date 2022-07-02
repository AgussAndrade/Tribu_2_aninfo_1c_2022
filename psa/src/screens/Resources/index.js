import React, { useState } from "react";
import { PrincipalContainer } from "../Home/styled";
import { TopBar } from "../../components/TopBar";
import { FormContainer, FmtButton } from "./styled";
import { FormGroupContainer } from "../../components/FormGroup";
import { useNavigate } from "react-router-dom"

export const Resources = () => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const axios = require ("axios");
  const navigate = useNavigate();

  const validateAttributes = () => {
    if(date === "" || name === "") return true;
    const today = new Date();
    const relativeDate = new Date(date)
    console.log(today);
    console.log(relativeDate);
    console.log(relativeDate > today);
    return relativeDate > today;
  };

  const handleSubmit = ()=>{
    if(validateAttributes()){
      navigate('/resources/error');
      return;
    }
    axios.get('https://anypoint.mulesoft.com/mocking/api/v1/sources/exchange/assets/754f50e8-20d8-4223-bbdc-56d50131d0ae/recursos-psa/1.0.0/m/api/recursos').then(
      (repos) => {
        if(repos.status == 200){
          navigate('/resources/employee',
          {
            state:{
              name:name,
              date:date}
          })
        }else{
          navigate('/resources/error');
        };
      }
    );
  };
  return (
    <PrincipalContainer>
      <TopBar buttonSelected={"Recursos"}/>
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
