import styled from "styled-components";
import { colors } from "../../../utils/colors";

//color: ${colors.red}
    
export const ButtonContainer = styled.div`
    display: flex;
    width: 20%;
    height: 50%;
    align-items: center;
    justify-content: flex-end;
`

//faltaria centrar el rectangulo
export const Container = styled.div`
    width: 90%;
    height: 110px;
    display:flex;
    background-color: ${colors.lightGrey};
    flex-direction: row;
    align-items: center;
    border-radius: 10px;
    margin-top: 20px;
    display: flex;
    justify-content: center;
`

export const TextContainer = styled.div`
  display: flex;
  width: 100%;
  text-overflow: ellipsis;
`;

export const Text = styled.p`
  font-size: 25px;
  color: ${colors.blue};
  font-family: "Verdana";
  margin-left: 100px;
  margin-top: 20px;
  font-weight: bold;
`;
