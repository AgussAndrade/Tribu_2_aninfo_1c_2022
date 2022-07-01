import React from "react";
import { PrincipalContainer, BodyContainer } from "./styled";
import { TopBar } from "../../components/TopBar";
import { useNavigate } from "react-router-dom";
import ListCards from "../../components/ListCards/ListCards";
export const Support = () => {
    const navigate = useNavigate();
    return (
        <PrincipalContainer>
            <TopBar buttonSelected ={"Soporte"} />
            <ListCards />

        </PrincipalContainer>
    );
};