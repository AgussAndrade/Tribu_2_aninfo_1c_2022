import React from "react";
import { ButtonIcon } from "../../components/ButtonIcon";
import { ButtonsContainer, PrincipalContainer } from "./styled";
import project_icon from "../../utils/icons/project_icon.png"
import  support_icon  from "../../utils/icons/support_icon.png"
import  resources_icon  from "../../utils/icons/resources_icon.png"
import { TopBar } from "../../components/TopBar";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <PrincipalContainer>
    <TopBar/>
    <ButtonsContainer>
      <ButtonIcon img= {project_icon} name={"proyectos"} onClick={()=>{ navigate("/projects")}}/>
      <ButtonIcon img= {support_icon} name= {"soporte"} onClick={()=>{ navigate("/support")}}/>
      <ButtonIcon img= {resources_icon} name= {"recursos"} onClick={()=>{ navigate("/resources")}}/>
    </ButtonsContainer>
    </PrincipalContainer>
  );
};
