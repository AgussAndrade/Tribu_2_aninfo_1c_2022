import styled from "styled-components";
import { colors } from "../../utils/colors";

export const ButtonContainer = styled.div`
    display: flex;
    width: 50%;
    height: 100%;
    align-items: center;
    background-color: ${colors.lightBlue};
    justify-content: flex-end;
`

export const LogoContainer = styled.div`
    display: flex;
    width: 50%;
    height: 100%;
    background-color: ${colors.lightBlue};
    position: relative;
`

export const Icon = styled.img`
  width: 100px;
  height: 100%;
  cursor: pointer;
`;

export const Container = styled.div`
    width: 100%;
    height: 40px;
    display:flex;
    background-color: ${colors.lightBlue};
    flex-direction: row;
    align-items: center;
`
