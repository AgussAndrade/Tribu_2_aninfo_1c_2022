import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  CardContainer,
  CardTextContainer,
  TitleText,
  ProjectInfoText,
  EditProjectContainer,
  DeleteButtonContainer,
  Buttons,
  AddEmployeeContainer,
} from "./styled";
import { colors } from "../../../../utils/colors";
import { GenericButton } from "../../../../components/GenericButton";
import { DeleteButton } from "../../../../components/DeleteButton";
import { EditionTaskModal } from "../EditionTaskModal";
import { AddEmployeeModal } from "../AddEmployeeModal";

export const TaskCard = (props) => {
  const { tarea, id, employees } = props;
  const [deleteTask, setDeleteTask] = useState(false);
  const [showModalTask, setShowModalTask] = useState(false);
  const [showModalAddEmployee, setShowModalAddEmployee] = useState(false);
  const [ticket, setTicket] = useState("")

  const navigate = useNavigate();
  const url =
    "https://moduloproyectos.herokuapp.com/proyectos/" +
    id +
    "/tareas/" +
    tarea.id;
  useEffect(() => {
    if (deleteTask) {
      fetch(url, {
        method: "DELETE",
      })
        .then(() => window.location.reload())
        .catch(() => navigate("/error"));
    }
  }, [deleteTask]);

  useEffect(() => {
    fetch("https://moduloproyectos.herokuapp.com/tareas/" +tarea.id + "/tickets", {
        method: "GET",
      })
      .then((res) => res.json())
      .then((result) => {
        setTicket(result);
      })
      .catch(() => navigate("/error"));
  }, []);


  const nombreEmpleados = () => {
    let empleados = [];
    tarea.empleados.forEach(idEmpleado => {
      const result = employees.find(employee => employee.legajo === idEmpleado);
      empleados.push(result.Nombre + ' '+ result.Apellido)
    });

    return empleados;
  };

  const empleados = () => {
    if (tarea.empleados.length == 0 || employees[0] == undefined) return "-";
    else return nombreEmpleados();
  };

  const ticketAsociado = () =>{
    if(ticket.id) return ticket.id;
    else return "-";
  }

  return (
    <CardContainer>
      <AddEmployeeModal
        open={showModalAddEmployee}
        onClose={() => setShowModalAddEmployee(false)}
        listEmployees={employees}
        tarea={tarea}
        id={id}
      />
      <EditionTaskModal
        open={showModalTask}
        onClose={() => setShowModalTask(false)}
        tarea={tarea}
        id={id}
      />
      <CardTextContainer>
        <TitleText>{"Tarea: " + tarea.nombre}</TitleText>
        <ProjectInfoText>{"Descripción: " + tarea.descripcion}</ProjectInfoText>
        <ProjectInfoText>
          {"Fecha creación: " + tarea.fechaCreacion}
        </ProjectInfoText>
        <ProjectInfoText>{"Estado: " + tarea.estado}</ProjectInfoText>
        <ProjectInfoText>
          {"Empleados asignados: " + empleados()}
        </ProjectInfoText>
        <ProjectInfoText>
          {"Ticket asociado: " + ticketAsociado()}
        </ProjectInfoText>
      </CardTextContainer>
      <Buttons>
        <DeleteButtonContainer>
          <DeleteButton
            setDelete={setDeleteTask}
            optionText={"tarea"}
            icon={true}
          />
        </DeleteButtonContainer>
        <AddEmployeeContainer>
          <GenericButton
            name={"Editar empleados"}
            onClick={() => setShowModalAddEmployee(true)}
            color={colors.lightBlue}
          ></GenericButton>
        </AddEmployeeContainer>
        <EditProjectContainer>
          <GenericButton
            name={"Editar"}
            onClick={() => setShowModalTask(true)}
            color={colors.lightBlue}
          ></GenericButton>
        </EditProjectContainer>
      </Buttons>
    </CardContainer>
  );
};
