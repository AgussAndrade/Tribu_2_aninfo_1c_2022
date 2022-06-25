import styled from "styled-components";
import { colors } from "../../utils/colors";

export const PrincipalContainer = styled.div`
    width: 100%;
    height: 100%;
    align-items:center;
    display: flex;
    flex-direction: column;
    font-family: "Verdana";
    background-color: ${colors.backgroundGrey};
`

export const BodyContainer = styled.div`
    width: 95%;
    height: 100%;
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
    
`

export const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 80%;
    height: 100%;
    padding-top: 15px;
    padding-left: 15px;
    padding-right: 15px;
    
`