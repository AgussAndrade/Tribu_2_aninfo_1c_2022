import styled from "styled-components";
import { colors } from "../../utils/colors";

export const ErrorMessageContainer = styled.div`
  width: 50%;
  height: 50%;
  align-self: center;
  align-items: center;
  justify-content: center;
  display: flex;
  background-color: ${colors.lightGrey};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 10px;
  flex-direction: column;
  border-radius: 20px;
`;

export const ErrorMessage = styled.p`
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 20px;
  color: ${colors.blue};
`;


export const BackButton = styled.div`
    padding: 10px;
    width: 20%;
    height:20%;
`