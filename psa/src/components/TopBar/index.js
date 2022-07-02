import React from "react";
import { TopBarButton } from "../TopBarButton";
import { ButtonContainer, Container, Icon, LogoButton, LogoContainer } from "./styled";
import { useNavigate } from "react-router-dom";
import { UserIconButton } from "../UserIconButton";
import psa_logo from "../../utils/icons/psa_logo.png";

export const TopBar = (props) =>{
    const navigate = useNavigate()
    const {buttonSelected} = props;
    return(
        <Container>
            <LogoContainer>
                <LogoButton>
                    <Icon src={psa_logo} onClick = {()=>{navigate('/')}}/>
                </LogoButton>
            </LogoContainer>
            <ButtonContainer>
                <TopBarButton buttonSelected={buttonSelected === 'Proyectos'} name = {'Proyectos'} onClick = {()=>{navigate('/projects')}}/>
                <TopBarButton buttonSelected={buttonSelected === 'Soporte'} name = {'Soporte'} onClick = {()=>{navigate('/support')}}/>
                <TopBarButton buttonSelected={buttonSelected === 'Recursos'} name = {'Recursos'} onClick = {()=>{navigate('/resources')}}/>
                <UserIconButton/>
            </ButtonContainer>
            
        </Container>
    )
}