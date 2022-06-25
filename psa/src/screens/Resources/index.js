import React, { useState } from "react";
import { PrincipalContainer } from "../Home/styled";
import { TopBar } from "../../components/TopBar";
import { useNavigate, Link } from "react-router-dom";
import { Form } from 'react-bootstrap';

export const Resources = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [date, setDate] = useState("");

  return (
    <PrincipalContainer>
      <TopBar buttonSelected={"Recursos"}/>
      <Form >
        <Form.Group className="mb-3" controlId="name">
            <Form.Label Ingrese nombre del Empleado />
            <Form.Control type="input" name="dob" placeholder="Juan Lopez" onChange={e=>setName(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="date">
      
            <Form.Control type="date" name="date" placeholder="" onChange={e=>setDate(e.target.value)}/>
        </Form.Group>
      </Form>
      <Link className="linkResources"
          to={"/resources/employee"}
          state={{name:name,
                  date:date}}
        >Continuar</Link>
    </PrincipalContainer>
  );
};
