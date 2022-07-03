import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { PrincipalContainer } from "../../../Home/styled";
import { TopBar } from "../../../../components/TopBar";
import { ResourcesHoursForm } from "../ResourcesHoursForm";
import { ResourcesHoursTable } from "../ResourcesHoursTable";
import { FormGroupContainer } from "../../../../components/FormGroup";
import { Container, FormControl } from "./styled";
import { Form, InputGroup, Row, Col, Button } from "react-bootstrap";

export const ResourcesEmployee = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const date = location.state?.date;
  const id = location.state?.id;
  const name = location.state?.name;
  const [proyect,setProyect] = useState("");
  const [task,setTask] = useState("");
  const [hours,setHours] = useState("");
  const [detail,setDetail] = useState("");
  const axios = require ("axios");

  const handleSubmit = ()=>{
    axios.get('https://anypoint.mulesoft.com/mocking/api/v1/sources/exchange/assets/754f50e8-20d8-4223-bbdc-56d50131d0ae/recursos-psa/1.0.0/m/api/recursos').then(
      (repos) => {
        console.log(repos.data[0]);
      }
    );
  };
  return (
    <PrincipalContainer>
      <TopBar buttonSelected={"Recursos"}/>
      <Container>
        Administracion Horas
      </Container>
      <ResourcesHoursForm name={name} date={date}></ResourcesHoursForm>
      <ResourcesHoursTable date={date}></ResourcesHoursTable>
    </PrincipalContainer>
  );
};