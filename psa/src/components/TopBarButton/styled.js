import styled from "styled-components";
import { colors } from "../../utils/colors";

export const ButtonContainer = styled.div`
  margin-left: 10px;
  margin-right: 10px;
`;

export const StyledButton = styled.button`
    width: 90px;
    height: 25px;
    &:hover {
        background-color: ${colors.grey};
        border: none;
    cursor: pointer;
    }
    background-color: ${colors.lightGrey};
    border: none;
    font-family: "Verdana";
    font-weight: bold;
    color: ${colors.blue};
    border-radius: 5px;
`;