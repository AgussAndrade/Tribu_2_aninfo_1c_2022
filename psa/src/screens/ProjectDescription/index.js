import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PrincipalContainer, BodyContainer, TaskContainer, InputContainer, Input } from "./styled";
import { ProjectCard } from "./components/ProjectCard";
import { TopBar } from "../../components/TopBar";
import { TaskCard } from "./components/TaskCard";
import { Modal } from "../../components/Modal";


export const ProjectDescription = () => {
  const [showModal, setShowModal] = useState(false);
	const [searchTerm, setSerchTerm] = useState("");
  const proyecto = {
    nombre: "Nombre1",
    descripcion: "Esta es la descripcion1",
    tareas: [
      {
        nombre: "Tarea: Nombre1",
        descripcion: "Descripcion: Esta es la descripcion de tarea 1, es una descripcion larga para probar el overflow de la caja de texto a ver si funciona bien o si no funciona bien por eso es larga. Aaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
        fechaCreacion: "Fecha de creacion: 22/2/2022",
        estado: "Estado: En curso",
      },
      {
        nombre: "Tarea: Nombre2",
        descripcion: "Descripcion: Esta es la descripcion de tarea 2",
        fechaCreacion: "Fecha de creacion: 22/2/2022",
        estado: "Estado: En curso",
      },
      {
        nombre: "Tarea: Nombre3",
        descripcion: "Descripcion: Esta es la descripcion de tarea 3",
        fechaCreacion: "Fecha de creacion: 22/2/2022",
        estado: "Estado: En curso",
      },
      {
        nombre: "Tarea: Nombre4",
        descripcion: "Descripcion: Esta es la descripcion de tarea 4",
        fechaCreacion: "Fecha de creacion: 22/2/2022",
        estado: "Estado: En curso",
      },
      {
        nombre: "Tarea: Nombre5",
        descripcion: "Descripcion: Esta es la descripcion de tarea 5",
        fechaCreacion: "Fecha de creacion: 22/2/2022",
        estado: "Estado: En curso",
      },
    ],
  };

  const TaskCards = () => {
    return proyecto.tareas.filter((val) => {
			if (searchTerm == "") return val;
			else if (
				val.nombre.toLocaleLowerCase().includes(searchTerm.toLowerCase())
			)
				return val;
		})
			.map((tarea) => (
      <TaskCard
        nombreTarea={tarea.nombre}
        descripcionTarea={tarea.descripcion}
        fechaCreacion={tarea.fechaCreacion}
        estado={tarea.estado}
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
				<InputContainer>
				<Input
            type="text"
            placeholder="Buscar..."
            onChange={(event) => {
              setSerchTerm(event.target.value);
            }}
          />
				</InputContainer>
          <TaskCards/>
        </TaskContainer>
      </BodyContainer>
    </PrincipalContainer>
  );
};

{/* <FormGroupContainer
          controlId="date"
          type="date"
          name="date"
          placeholder=""
        /> */}
        // import {FormGroupContainer} from "../../components/FormGroup"