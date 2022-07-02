import React from "react";
import { TopBar } from "../../components/TopBar";
import { ProductosSoporte } from "../../components/ProductosSoporte";

export const Support = () => {
  return (
    <div>
      <TopBar buttonSelected={"Soporte"}/>
      <ProductosSoporte/>
    </div>
  );
};
//<button onClick={()=> navigate('/')}>Volver</button>
