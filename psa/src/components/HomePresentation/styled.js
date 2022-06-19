import styled from "styled-components";
import { colors } from "../../utils/colors";

export const PresentationContainer = styled.div`
	width: 100%;
	height: 300px;
  flex-direction: column;
  background-color: ${colors.lightGrey};
  margin: 15px;
  border-radius: 10px;
`;

export const Icon = styled.img`
  width: 30%;
  height: 100%;
  
`;