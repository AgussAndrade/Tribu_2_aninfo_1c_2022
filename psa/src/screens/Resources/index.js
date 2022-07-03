import React, { useState } from "react";
import { PrincipalContainer } from "../Home/styled";
import { TopBar } from "../../components/TopBar";
import { FormContainer, FmtButton } from "./styled";
import { FormGroupContainer } from "../../components/FormGroup";
import { useNavigate } from "react-router-dom"

export const Resources = () => {
  const [id, setId] = useState(0);
  const [date, setDate] = useState("");
  const axios = require ("axios");
  const navigate = useNavigate();

  const validateAttributes = () => {
    if(date === "" || id === "") return true;
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
    axios.get('https://api.kraken.com/0/public/Ticker?pair=xbtusds',(req,response) => {
      response.setHeader("Access-Control-Allow-Origin", "*");
      response.setHeader("Access-Control-Allow-Credentials", "true");
      response.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
      response.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    }).then(
      (repos) => {
        if(repos.status == 200){
          navigate('/resources/employee',
          {
            state:{
              id:id,
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
          controlId="id"
          label="Ingrese el legajo"
          type="number"
          name="id"
          placeholder="12345"
          handleChange={setId}
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
