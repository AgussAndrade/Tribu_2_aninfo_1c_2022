import React, { useState } from "react";
import { BodyContainer, InputContainer, TextContainer, DropDownList } from "./styled";
import Select from 'react-select';
import {useNavigate} from 'react-router-dom'
export const AddEmployeeModal = (props) => {
    const { open, onClose, listEmployees } = props;
      const [employees, setEmployees] = useState([]);
      const navigate = useNavigate();
      fetch("https:moduloproyectos.herokuapp.com/empleados", {
        method: "GET",
      })
        .then((res) => res.json())
        .then((result) => {
          setEmployees(result);
          console.log(employees);
        })
        .catch(() => navigate("/error"));
    

return (
    <div className="App">
      <Select
        
        options={employees.map((empleado) => ({label: empleado.Nombre + " "+empleado.Apellido, value: empleado.Nombre}))}
        onChange={opt => console.log(opt.label, opt.value)}
      />
    </div>
    
  );
  };

