import React, { useState } from "react";
import { PrincipalContainer } from "../../../Home/styled";
import { TopBar } from "../../../../components/TopBar";
import { useNavigate, useLocation } from "react-router-dom"
import { FmtButton, ErrorCard, TitleError,BodyError } from './styled';

export const ResourcesError = () => {
  const navigate = useNavigate();

  const location = useLocation();
  const date = location.state?.date;
  const id = location.state?.id;
  const name = location.state?.name;
  const url = location.state?.url

  const handleSubmit = ()=>{
    //navigate('/resources');
    navigate(url,
      {
        state: {
          id: id,
          name: name,
          date: date
        }
      }
    );
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
