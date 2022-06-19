import styled from "styled-components";
import { colors } from "../../utils/colors";

export const ButtonContainer = styled.div`
  width: 60px;
  height: 50px;
`;

export const ButtonCustom = styled.button`
    background-color: transparent;
    border: none;
    &:hover {
    cursor: pointer;
    }
`;

export const Icon = styled.img`
  width: 100%;
  height: 100%;
`;