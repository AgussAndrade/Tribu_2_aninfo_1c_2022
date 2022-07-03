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
  height: 570px;
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

export const InputContainer = styled.div`
  width: 100%;
  height: 12%;
  display: flex;
  background-color: ${colors.lightBlue};
  padding: 15px;
  align-items: center;
`;

export const Input = styled.input`
  font-size: 12px;
  border-radius: 10px;
  height: 90%;
  width: 10%;
  border: none;
  padding: 10px;
  background-color: ${colors.white2};
`;


export const OptionsContainer = styled.div`
display: flex;
align-items:flex-start;
height: 10%;
width: 10%;
` 

export const DeleteButtonContainer = styled.div`
    width: 30%;
    height: 30%;
`