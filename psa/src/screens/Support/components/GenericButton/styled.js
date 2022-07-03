import styled from "styled-components";
import { colors } from "../../../../utils/colors";

export const ButtonCustom = styled.button`
  display: flex;
  width: 100%;
  height: 100%;
  margin-right: 15px;
  margin-top: 35px;
  align-items: center;
  border-radius: 15px;
  border: none;
  font-size: 15px;
  justify-content: center;
  color: white;
  background-color: ${(props) =>(props.color) ? props.color : 'lightGrey' };
  font-family: "Verdana";
  &:hover {
    cursor: pointer;
    background-color: ${colors.gre2};
  }
`;