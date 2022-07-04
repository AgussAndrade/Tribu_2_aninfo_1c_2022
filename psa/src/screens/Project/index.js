import React from "react";
import { generatePath, Route, useNavigate } from "react-router-dom";
import {
  PrincipalContainer,
  OptionsContainer,
  ButtonNewProyect,
  BodyContainer,
  Input,
  InputContainer,
} from "./styled";
import { NewProjectModal } from "./components/NewProjectModal";
import { Card } from "./components/Card";
import { TopBar } from "../../components/TopBar";
import { GenericButton } from "../../components/GenericButton";
import { colors } from "../../utils/colors";
import { useState, useEffect } from "react";

export const Project = () => {
  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSerchTerm] = useState("");
  const [projects, setProjects] = useState([]);
  const [employees, setEmployees] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetch("https:moduloproyectos.herokuapp.com/proyectos", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((result) => {
        setProjects(result);
      })
      .catch(() => navigate("/error"));
  }, []);
    console.log(projects)
  const Cards = () => {
    return projects
      .filter((val) => {
        if (searchTerm === "") return val;
        else if (
          val.nombre.toLocaleLowerCase().includes(searchTerm.toLowerCase())
        )
          return val;
        return "";
      })
      .map((proyecto) => (
        <Card
          nombreProyecto={proyecto.nombre}
          descripcionProyecto={proyecto.descripcion}
          onClick={() => {
            navigate("/projects/" + proyecto.id);
          }}
        />
      ));
  };


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
      <NewProjectModal
        open={showModal}
        onClose={() => setShowModal(false)}
        listEmployees={employees}
      />
      <TopBar buttonSelected={"Proyectos"} />
      <OptionsContainer>
        <InputContainer>
          <Input
            type="text"
            placeholder="Buscar..."
            onChange={(event) => {
              setSerchTerm(event.target.value);
            }}
          />
        </InputContainer>
        <ButtonNewProyect>
          <GenericButton
            name={"Nuevo proyecto"}
            onClick={() => setShowModal(true)}
            color={colors.lightBlue}
          ></GenericButton>
        </ButtonNewProyect>
      </OptionsContainer>
      <BodyContainer>
        <Cards />
      </BodyContainer>
    </PrincipalContainer>
  );
};
