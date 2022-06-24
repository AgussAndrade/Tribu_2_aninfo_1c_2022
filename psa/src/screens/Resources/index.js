import React from "react";
import { TopBar } from "../../components/TopBar";
import { useNavigate } from "react-router-dom";

export const Resources = () => {
  const navigate = useNavigate();

  return (
    <TopBar buttonSelected={"Recursos"}/>
  );
};
