import React from "react";
import { TopBarButton } from "../TopBarButton";
import { ButtonContainer, Container, Icon, LogoContainer } from "./styled";
import { useNavigate } from "react-router-dom";
import { UserIconButton } from "../UserIconButton";
import psa_logo from "../../utils/icons/psa_logo.png";

export const TopBar = () =>{
    const navigate = useNavigate()
    return(
        <Container>
            <LogoContainer>
                <Icon src={psa_logo} />
            </LogoContainer>
            <ButtonContainer>
                <TopBarButton name = {'Proyectos'} onClick = {()=>{navigate('/projects')}}/>
                <TopBarButton name = {'Soporte'} onClick = {()=>{navigate('/support')}}/>
                <TopBarButton name = {'Recursos'} onClick = {()=>{navigate('/resources')}}/>
                <UserIconButton/>
            </ButtonContainer>
            
        </Container>
    )
}