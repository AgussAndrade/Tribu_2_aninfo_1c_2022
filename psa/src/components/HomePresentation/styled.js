import styled from "styled-components";
import { colors } from "../../utils/colors";

export const PresentationContainer = styled.div`
	width: 85%;
	height: 20%;
  flex-direction: row;
  background-color: ${colors.lightGrey};
  border-radius: 10px;
	margin-top: 20px;
  display: flex;
  min-width:fit-content;
  min-height: fit-content;

`;

export const Icon = styled.img`
width: 40%;
height: 20%;
margin-left: 20px;
`;

export const Text = styled.h1`
  font-size:55px;
  display: flex;
  color: ${colors.blue};
  font-family: "Verdana";
  margin-left: 70px;
  margin-top: 50px;
  font-weight: 100;
  line-height: 90px;
  user-select: none;
`