import React from "react";
import { PrincipalContainer } from "../Home/styled";
import { TopBar } from "../../components/TopBar";
import { useNavigate, Link } from "react-router-dom";
import {Label} from "./styled";
import { Form } from 'react-bootstrap';

export const Resources = () => {
  const navigate = useNavigate();

  return (
    <PrincipalContainer>
      <TopBar buttonSelected={"Recursos"}/>
      <Container >
        <Form.Group className="mb-3" controlId="name">
            <Label>Ingrese nombre del Empleado</Label>
            <Form.Control type="input" name="dob" placeholder="Juan Lopez" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="date">
            <Label>Ingrese Fecha</Label>
            <Form.Control type="date" name="date" placeholder="" />
        </Form.Group>
      </Container>
      <Link
          to={{
            pathname: "/page",
            state: "" // your data array of objects
          }}
        ></Link>
    </PrincipalContainer>
  );
};
