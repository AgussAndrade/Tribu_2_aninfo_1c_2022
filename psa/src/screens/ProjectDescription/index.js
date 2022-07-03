import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  PrincipalContainer,
  ProyectOptionsContainer,
  BodyContainer,
  TaskContainer,
  InputContainer,
  Input,
  OptionsContainer,
  DeleteButtonContainer,
} from "./styled";
import { ProjectCard } from "./components/ProjectCard";
import { TopBar } from "../../components/TopBar";
import { TaskCard } from "./components/TaskCard";
import { EditionModal } from "./components/EditionModal";
import { EditionTaskModal } from "./components/EditionTaskModal";
import { NewTaskModal } from "./components/NewTaskModal";
import { Modal } from "../../components/Modal";
import { DeleteButton } from "../../components/DeleteButton";
import { GenericButton } from "../../components/GenericButton";
import { colors } from "../../utils/colors";

export const ProjectDescription = (props) => {
  const { id } = useParams();
  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSerchTerm] = useState("");
  const [deleteProject, setDeleteProject] = useState(false);
  const [showModalTask, setShowModalTask] = useState(false);
  const [showModalAddTask, setshowModalAddTask] = useState(false)
  const [project, setProject] = useState({});
  const navigate = useNavigate();
  const [employees, setEmployees] = useState([]);

  const url = "https:moduloproyectos.herokuapp.com/proyectos/" + id;

  useEffect(() => {
    fetch(url, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((result) => {
        setProject(result);
      })
      .catch(() => navigate("/error"));
  }, []);



  //use effect para ver cuando se elimina el project
  //use effect para ver cuando se elimina tarea

  /*fetch("https:moduloproyectos.herokuapp.com/proyectos", {
     //Enter your IP address here
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(mantequita), //body data type must match "Content-Type" header
  }); //esto anda confirmado por el evilar2 */

  const TaskCards = () => {
    if (project.tareas) {
      return project.tareas
        .filter((val) => {
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
            onClick={() => setShowModalTask(true)}
          />
        ));
    }
  };

  const [lider, setLider] = useState("");
  fetch(
    "https:moduloproyectos.herokuapp.com/empleados/" + project.legajoLider,
    {
      method: "GET",
    }
  )
    .then((res) => res.json())
    .then((result) => {
      setLider(result.Nombre + " " +  result.Apellido);
    })
    .catch(() => navigate("/error"));

    useEffect(() => {
      if (showModal) {
        fetch("https:moduloproyectos.herokuapp.com/empleados", {
          method: "GET",
        })
          .then((res) => res.json())
          .then((result) => {
            setEmployees(result);
          })
          .catch(() => navigate("/error"));
      }
    }, [showModal]);

  return (
    <PrincipalContainer>
      <NewTaskModal open={showModalAddTask}
        onClose={() => setshowModalAddTask(false)}
        projectId = {project.id}
      />
      <EditionModal
        open={showModal}
        onClose={() => setShowModal(false)}
        titulo="Editar Proyecto"
        proyecto={project}
        listEmployees={employees}

      />
      <EditionTaskModal
        open={showModalTask}
        onClose={() => setShowModalTask(false)}
      />
      <TopBar buttonSelected={"Proyectos"} />
      <BodyContainer>
        <ProjectCard
          nombreProyecto={"Proyecto: " + project.nombre}
          descripcionProyecto={"no description"}
          fechaInicio={"Fecha de inicio: " + project.fechaInicio}
          fechaEstimadaFin={"Fecha de fin estimada: " + project.fechaFin}
          lider={"Lider: " + lider}
          onClick={() => setShowModal(true)}
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
          <GenericButton color={colors.lightGrey2} name= {"Agregar tarea"} onClick={() => setshowModalAddTask(true)}/>
          </InputContainer>
          <TaskCards />
        </TaskContainer>
        <OptionsContainer>
        <GenericButton color={colors.red} name= {"Eliminar proyecto"} onClick={() => setshowModalAddTask(true)}/>
        </OptionsContainer>
      </BodyContainer>
    </PrincipalContainer>
  );
};
