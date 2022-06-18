import styled from "styled-components";
import { colors } from "../../utils/colors";

export const PrincipalContainer = styled.div`
    width: 100%;
    height: 100%;
    align-items:center;
    display: flex;
    flex-direction: column;
    background-color: ${colors.backgroundGrey};
`

export const ButtonsContainer = styled.div`
    display: flex;
    width: 100%;
    height: 30%;
    padding: 15px 15px 15px;
    justify-content: space-between;
    flex-direction: row;
`