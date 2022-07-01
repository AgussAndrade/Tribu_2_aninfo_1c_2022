import React from "react";
import { PrincipalContainer, BodyContainer } from "./styled";
import { TopBar } from "../../components/TopBar";
import { useNavigate } from "react-router-dom";
export const Support = () => {
    const navigate = useNavigate();
    return (
        <PrincipalContainer>
            <TopBar buttonSelected = {"Soporte"} />
        </PrincipalContainer>
    );
};