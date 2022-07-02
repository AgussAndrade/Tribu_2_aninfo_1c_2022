import React from "react";
import { TopBar } from "../../../components/TopBar";
import { Text, TextContainer } from "../PantallaVerTickets/styled";
import { TicketsSoporte } from "../../../components/TicketsSoporte"

export const PantallaVerTickets = (props) =>{
    const {nombreProducto} = props
    return(
        <div>
            <TopBar buttonSelected={"Soporte"}/>
            <TextContainer>
            <Text>
            {nombreProducto}
            </Text>
            </TextContainer>
            <TicketsSoporte/>
        </div>
    )
    
}
