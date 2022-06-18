import React from "react";
import { useNavigate } from "react-router-dom";

export const Project = () => {
    const navigate = useNavigate();
  return (
    <div>
      <p>Esto es proyectos</p>
      <button onClick={()=> navigate(-1)}>Volver</button>
    </div>
  );
};
