import React from "react";
import { ButtonIcon } from "../../components/ButtonIcon";
import { ButtonsContainer, PrincipalContainer } from "./styled";
import project_icon from "../../utils/icons/project_icon.png"
import  support_icon  from "../../utils/icons/support_icon.png"
import  resources_icon  from "../../utils/icons/resources_icon.png"
import { TopBar } from "../../components/TopBar";

export const Home = () => {
  return (
    <PrincipalContainer>
    <TopBar/>
    <ButtonsContainer>
      <ButtonIcon img= {project_icon} name={"proyectos"}/>
      <ButtonIcon img= {support_icon} name= {"soporte"}/>
      <ButtonIcon img= {resources_icon} name= {"recursos"} />
    </ButtonsContainer>
    </PrincipalContainer>
  );
};
