import React, { useState } from "react";
import { PrincipalContainer } from "../../../Home/styled";
import { TopBar } from "../../../../components/TopBar";
import { useNavigate } from "react-router-dom"
import { FmtButton } from './styled';

export const ResourcesError = () => {
  const navigate = useNavigate();

  const handleSubmit = ()=>{
    navigate('/resources');
  };
  return (
    <PrincipalContainer>
      <TopBar buttonSelected={"Recursos"}/>
      
      <FmtButton
        onClick={handleSubmit}
        >Volver
      </FmtButton>
    </PrincipalContainer>
  );
};
