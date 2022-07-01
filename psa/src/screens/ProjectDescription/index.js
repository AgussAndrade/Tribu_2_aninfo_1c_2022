import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PrincipalContainer, BodyContainer, TaskContainer } from "./styled";
import { ProjectCard } from "./components/ProjectCard";
import { TopBar } from "../../components/TopBar";
import { TaskCard } from "./components/TaskCard";
import { Modal } from "../../components/Modal";

export const ProjectDescription = () => {
  const [showModal, setShowModal] = useState(false);

  const proyecto = {
    nombre: "Nombre1",
    descripcion: "Esta es la descripcion1",
    tareas: [
      {
        nombre: "Nombre1",
        descripcion: "Esta es la descripcion de tarea 1",
        fechaCreacion: "fecha1",
      },
      {
        nombre: "Nombre2",
        descripcion: "Esta es la descripcion de tarea 2",
        fechaCreacion: "fecha2",
      },
      {
        nombre: "Nombre3",
        descripcion: "Esta es la descripcion de tarea 3",
        fechaCreacion: "fecha3",
      },
    ],
  };

  const TaskCards = () => {
    return proyecto.tareas.map((tarea) => (
      <TaskCard
        nombreProyecto={tarea.nombre}
        descripcionProyecto={tarea.descripcion}
        fechaCreacion={tarea.fechaCreacion}
        onClick={() => {
          navigate("/");
        }}
      />
    ));
  };

  const navigate = useNavigate();
  return (
    <PrincipalContainer>
      <Modal open={showModal} onClose={()=>setShowModal(false)}/>
      <TopBar buttonSelected={"Proyectos"} />
      <BodyContainer>
        <ProjectCard
          nombreProyecto={"Proyecto: Prueba"}
          descripcionProyecto={
            "Descripcion: El kernel es la capa de software de mas bajo nivel del sistema operativo"
          }
          fechaInicio={"Fecha de inicio: 27/7/2022"}
          fechaEstimadaFin={"Fecha estimada de fin: 28/12/2022"}
          lider={"Lider: Yo"}
          onClick={() =>setShowModal(true)
          }
        />
        <TaskContainer>
            AP
        </TaskContainer>
      </BodyContainer>
    </PrincipalContainer>
  );
};
