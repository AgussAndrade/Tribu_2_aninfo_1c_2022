import styled from "styled-components";
import { colors } from "../../../../utils/colors";

export const ButtonCustom = styled.button`
  display: flex;
  width: 100%;
  height: 70px;
  margin-right: 25px;
  margin-top: 20px;
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