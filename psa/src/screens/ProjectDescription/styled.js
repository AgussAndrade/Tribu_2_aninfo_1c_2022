import styled from "styled-components";
import { colors } from "../../utils/colors";

export const PrincipalContainer = styled.div`
  width: 100%;
  height: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;
  font-family: "Verdana";
  background-color: ${colors.backgroundGrey};
`;

export const ProyectOptionsContainer = styled.div`
    align-items: start;
    height:100%;
    width: 100%;
`

export const BodyContainer = styled.div`
  width: 100%;
  height: 650px;
  display: flex;
  background-color: ${colors.backgroundGrey};
  align-items: center;
  flex-direction: column;
  padding: 10px;
`;

export const TaskContainer = styled.div`
  width: 95%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  margin: 10px;
  background-color: ${colors.lightGrey};
  padding-bottom: 20px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
   width: 0.7em;
  };
  &::-webkit-scrollbar-thumb {
    height: 2px;
    background-color: ${colors.gre2};
    border-radius: 10px;
  };
`;

export const BarContainer = styled.div`
  width: 100%;
  height: 12%;
  display: flex;
  background-color: ${colors.lightBlue};
  padding: 10px;
`

export const InputContainer = styled.div`
   width: 50%;
  height: 90%;
  display: flex;
  background-color: ${colors.lightBlue};
  padding: 4px;
  align-items: center;
`;

export const Input = styled.input`
  font-size: 12px;
  border-radius: 10px;
  height: 90%;
  width: 50%;
  border: none;
  padding: 10px;
  background-color: ${colors.white2};
`;


export const OptionsContainer = styled.div`
display: flex;
align-items:center;
height: 20%;
width: 100%;
justify-content: center;
flex-direction: row;
` 

export const ButtonContainer = styled.div`
    width: 100%;
    height: 100%;
    display:flex;
    justify-content: flex-end;
    align-items: flex-end;
`

export const DeleteButtonContainer = styled.div`
    width: 80%;
    height: 50%;
    display:flex;
    justify-content: flex-end;

`

export const  BackButtonContainer = styled.div`
  width: 10%;
  height: 100%;
`

export const AddTaskButton = styled.button`
 display: flex;
  width: 20%;
  height: 100%;
  align-items: center;
  border-radius: 15px;
  border: none;
  font-size: 12px;
  font-weight: bold;
  justify-content: center;
  color: ${colors.blue};
  background-color: ${colors.lightGrey};
  font-family: "Verdana";
  &:hover {
    cursor: pointer;
    background-color: ${colors.gre2};
  }
`