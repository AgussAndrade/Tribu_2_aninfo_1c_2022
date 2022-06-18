import React from "react";
import { useNavigate } from "react-router-dom";

export const Support = () => {
  const navigate = useNavigate();
  return (
    <div>
      <p>Esto es soporte</p>
      <button onClick={() => navigate(-1)}>Volver</button>
    </div>
  );
};
