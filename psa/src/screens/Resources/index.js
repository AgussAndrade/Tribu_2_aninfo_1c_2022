import React from "react";
import { useNavigate } from "react-router-dom";

export const Resources = () => {
  const navigate = useNavigate();
  return (
    <div>
      <p>Esto es recursos</p>
      <button onClick={() => navigate(-1)}>Volver</button>
    </div>
  );
};
