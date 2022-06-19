import styled from "styled-components";
import { colors } from "../../utils/colors";

export const ButtonContainer = styled.div`
  width: 550px;
  height: 450px;
  margin-left: 15px;
  margin-right: 15px;
`;

export const ButtonCustom = styled.button`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  padding: 30px 0px 10px;
  border-radius: 10px;
  border: none;
  font-size: 30px;
  color: ${colors.blue};
  font-family: "Verdana";
  font-weight: bold;
  text-transform: uppercase;
  &:hover {
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
      0 17px 50px 0 rgba(0, 0, 0, 0.19);
    cursor: pointer;
  }
  background-color: ${colors.lightGrey};
`;

export const Icon = styled.img`
  width: 60%;
  height: 70%;
  margin-top: 20px;
`;
