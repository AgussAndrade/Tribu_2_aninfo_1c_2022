import React, { Component } from "react";
import { TopBar } from "../../../components/TopBar";
import { useNavigate } from "react-router-dom";
import { RegularButton } from "../../../components/RegularButton";
import { ButtonContainer, Container , Text, TextContainer } from "../PantallaDerivarTicket/styled";
import  {Modal}  from "../../../components/Modal";

import FlavorForm from "../../../components/Formularios/FlavorForm"
//const navigate = useNavigate()
    
export default class PantallaDerivarTicket extends Component{
    
    state = {
        activo: false,
    };
    toggle = () => {
        this.setState({
            activo: !this.state.activo,
        });
    }
    render(){
            
        return(
            
            <div className= "modal">
                <TopBar buttonSelected={"Soporte"}/>
                <TextContainer>
                    <Text> Derivacion del ticket </Text>
                </TextContainer>
                <Container>
                    <TextContainer>
                    <Text> Seleccione el area a derivar </Text>
                    </TextContainer>
                    <FlavorForm/>
                </Container>
                <Container>
                <TextContainer>
                <Text> Seleccione la tarea </Text>
                <ButtonContainer>
                    <button onClick={this.toggle} activo={this.state.activo}>Crear tarea</button>
                    <Modal toggle={this.toggle} activo={this.state.activo}>
                        <h2> Holis </h2>
                    </Modal>
                    
                </ButtonContainer>
                </TextContainer>
                </Container>
                
                
            </div>
        )
    }    
}

/*
export const PantallaDerivarTicket = (props) =>{
    const navigate = useNavigate()
    const {buttonSelected} = props;
    return(
        
        <div>
            <p><TopBar buttonSelected={"Soporte"}/></p>
            <TextContainer>
            <Text> Derivacion del ticket </Text>
            </TextContainer>
            <TextContainer>
            <Text> Seleccione el area a derivar </Text>
            </TextContainer>
            <TextContainer>
            <Text> Seleccione la tarea </Text>
            <ButtonContainer>
                <Modal toggle={this.toggle} activo={this.state.activo}>
                    <h2> Holis </h2>
                </Modal>
                <RegularButton name = {'Crear tarea'} onClick = {()=>{navigate('/support')}}/>
                <RegularButton name = {'Seleccionar tarea'} onClick = {()=>{navigate('/support')}}/>
            </ButtonContainer>
            </TextContainer>
            
            <ButtonContainer>
                <RegularButton name = {'Cancelar'} onClick = {()=>{navigate('/support')}}/>
                <RegularButton name = {'Derivar ticket'} onClick = {()=>{navigate('/support')}}/>
            </ButtonContainer>
            
        </div>
    )
    
} */