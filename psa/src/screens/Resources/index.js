import React, { useState, useEffect } from "react";
import { PrincipalContainer } from "../Home/styled";
import { TopBar } from "../../components/TopBar";
import { FormContainer, FmtButton } from "./styled";
import { FormGroupContainer } from "../../components/FormGroup";
import { FormSelectContainer } from "../../components/FormSelect";
import { useNavigate } from "react-router-dom"

export const Resources = () => {
  const [id, setId] = useState(0);
  const [date, setDate] = useState("");
  const axios = require ("axios");
  const navigate = useNavigate();

  const [employees, setEmployees] = useState([])

  const validateAttributes = () => {
    if(date === "" || id === "") return true;
    const today = new Date();
    const relativeDate = new Date(date)
    return relativeDate > today;
  };

  const handleSubmit = ()=>{
    if(validateAttributes()){
      navigate('/resources/error',
      {
        state: {
          url: '/resources'
        }
      });
      return;
    }
    axios.get(`https://squad5-recursos.herokuapp.com/api/empleados/${id}`).then(
      (repos) => {
        if(repos.status == 200){
          const name = `${repos.data.Nombre} ${repos.data.Apellido}`
          navigate('/resources/employee',
          {
            state: {
              id: id,
              name: name,
              date: date}
          })
        } else {
          navigate('/resources/error',
          {
            state: {
              url: '/resources'
            }
          });
        };
      }
    );
  };

  const mapEmployees = (data) => {
    return data.map((employee) => {
      return {
        id: employee.legajo,
        name: `${employee.Nombre} ${employee.Apellido}`
      }
    })
  }

  const getEmployees = async () => {
    const {data} = await axios.get(`https://squad5-recursos.herokuapp.com/api/empleados`)
    setEmployees(mapEmployees(data))
  }

  useEffect(() => {
      getEmployees()
  }, [])

  return (
    <PrincipalContainer>
      <TopBar buttonSelected={"Recursos"}/>
      <FormContainer >
        <FormSelectContainer
          options={employees}
          controlId="id"
          label="Seleccione a un empleado"
          type="number"
          name="id"
          placeholder="12345"
          handleChange={setId}
        />
        <FormGroupContainer
          controlId="date"
          label="Ingrese una fecha"
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
