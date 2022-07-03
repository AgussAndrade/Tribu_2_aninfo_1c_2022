import styled from "styled-components";
import { colors } from "../../utils/colors";

export const PresentationContainer = styled.div`
	width: 80%;
	height: 20%;
  flex-direction: row;
  background-color: ${colors.lightGrey};
  border-radius: 10px;
	margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Icon = styled.img`
width: 40%;
height: 20%;
margin-left: 20px;
`;

export const TextContainer = styled.div`
  display: flex;
  width: 100%;
  text-overflow: ellipsis;
`

export const Text = styled.p`
  font-size: 25px;
  color: ${colors.blue};
  font-family: "Verdana";
  margin-left: 100px;
  margin-top: 20px;
  font-weight: bold;
`