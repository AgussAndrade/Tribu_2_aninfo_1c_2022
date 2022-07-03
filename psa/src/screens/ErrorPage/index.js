import React from "react";
import { PrincipalContainer } from "../Project/styled";
import { ErrorMessage, ErrorMessageContainer } from "./styled";

export const ErrorPage = () => { 
    return(<ErrorMessageContainer>
        <ErrorMessage>
            Lo sentimos, ocurrió un error. Intente de nuevo en unos minutos
        </ErrorMessage>
    </ErrorMessageContainer>)
}