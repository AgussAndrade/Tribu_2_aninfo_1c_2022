import React, { useState } from "react";
import { PrincipalContainer } from "../../../Home/styled";
import { TopBar } from "../../../../components/TopBar";
import { useNavigate } from "react-router-dom"
import { FmtButton, ErrorCard, TitleError,BodyError } from './styled';

export const ResourcesError = () => {
  const navigate = useNavigate();

  const handleSubmit = ()=>{
    navigate('/resources');
  };
  return (
    <PrincipalContainer>
      <TopBar buttonSelected={"Recursos"}/>
      <ErrorCard>
        <TitleError>Error</TitleError>
        <BodyError><b>Los datos introducidos no son validos, <br></br> reintente con otros datos</b></BodyError>
        <FmtButton
            onClick={handleSubmit}
            >Volver
        </FmtButton>
      </ErrorCard>
    </PrincipalContainer>
  );
};
