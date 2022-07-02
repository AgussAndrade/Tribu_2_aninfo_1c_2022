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
    width: 100%;
    height: 100%;
    display: flex;
    background-color: ${colors.backgroundGrey};
    align-items: center;
    flex-direction: column;
`

export const TaskContainer = styled.div`
    width: 95%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 20px;
    margin-top: 15px;
    background-color: ${colors.lightGrey};
    padding-bottom: 20px;
		overflow-y: scroll;
`
export const InputContainer = styled.div`
	width: 100%;
    height: 50%;
    display: flex;
`

export const Input = styled.input`
  font-size: 15px;
  border-radius: 10px;
	border: none;
	padding: 10px;
	background-color: ${colors.white2};
`
