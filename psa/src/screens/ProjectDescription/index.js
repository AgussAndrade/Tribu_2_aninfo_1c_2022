import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  AddTaskButton,
  PrincipalContainer,
  BackButtonContainer,
  ProyectOptionsContainer,
  BodyContainer,
  TaskContainer,
  InputContainer,
  Input,
  OptionsContainer,
  ButtonContainer,
  BarContainer,
  DeleteButtonContainer,
  OptionBackContainer,
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
import { BackButton } from "../../components/BackButton";
import { AddEmployeeModal } from "./components/AddEmployeeModal";

export const ProjectDescription = (props) => {
  const { id } = useParams();
  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSerchTerm] = useState("");
  const [deleteProject, setDeleteProject] = useState(false);
  const [showModalAddTask, setshowModalAddTask] = useState(false);
  const [update, setUpdate] = useState(false);

  const [project, setProject] = useState({});
  const navigate = useNavigate();
  const [employees, setEmployees] = useState([]);

  const url = "https://moduloproyectos.herokuapp.com/proyectos/" + id;

  useEffect(() => {
    if (deleteProject) {
      fetch(url, {
        method: "DELETE",
      })
        .catch(() => navigate("/error"))
        .then(() => window.location.reload());
      navigate("/projects");
    }
  }, [deleteProject]);

  useEffect(() => {
    fetch(url, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((result) => {
        setProject(result);
      })
      .catch(() => navigate("/error"));
  }, [update]);
  
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
          <TaskCard tarea={tarea} id={id} employees={employees} />
        ));
    }
  };

  const [lider, setLider] = useState("");
  fetch(
    "https://moduloproyectos.herokuapp.com/empleados/" + project.legajoLider,
    {
      method: "GET",
    }
  )
    .then((res) => res.json())
    .then((result) => {
      setLider(result.Nombre + " " + result.Apellido);
    })
    .catch(() => navigate("/error"));

  useEffect(() => {
    fetch("https://moduloproyectos.herokuapp.com/empleados", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((result) => {
        setEmployees(result);
      })
      .catch(() => navigate("/error"));
  }, []);

  return (
    <PrincipalContainer>
      <NewTaskModal
        open={showModalAddTask}
        onClose={() => setshowModalAddTask(false)}
        projectId={id}
        setUpdate={() => setUpdate(!update)}
      />
      <EditionModal
        open={showModal}
        onClose={() => setShowModal(false)}
        titulo="Editar Proyecto"
        proyecto={project}
        listEmployees={employees}
        projectId={id}
        setUpdate={() => setUpdate(!update)}
      />
      <TopBar buttonSelected={"Proyectos"} />
      <BodyContainer>
        <ProjectCard
          nombreProyecto={"Proyecto: " + project.nombre}
          estadoProyecto={"Estado: " + project.estado}
          descripcionProyecto={"Descripcion: " + project.descripcion}
          fechaInicio={"Fecha de inicio: " + project.fechaInicio}
          fechaEstimadaFin={"Fecha de fin estimada: " + project.fechaFin}
          lider={"Lider: " + lider}
          onClick={() => setShowModal(true)}
        />
        <TaskContainer>
          <BarContainer>
            <InputContainer>
              <Input
                type="text"
                placeholder="Buscar..."
                onChange={(event) => {
                  setSerchTerm(event.target.value);
                }}
              />
            </InputContainer>
            <ButtonContainer>
              <AddTaskButton
                color={colors.lightGrey2}
                name={"Agregar tarea"}
                onClick={() => setshowModalAddTask(true)}
              >
                Agregar tarea
              </AddTaskButton>
            </ButtonContainer>
          </BarContainer>
          <TaskCards />
        </TaskContainer>
        <OptionsContainer>
          <OptionBackContainer>
            <BackButtonContainer>
              <BackButton />
            </BackButtonContainer>
          </OptionBackContainer>
          <DeleteButtonContainer>
            <DeleteButton
              setDelete={setDeleteProject}
              optionText={"proyecto"}
              icon={false}
            />
          </DeleteButtonContainer>
        </OptionsContainer>
      </BodyContainer>
    </PrincipalContainer>
  );
};
