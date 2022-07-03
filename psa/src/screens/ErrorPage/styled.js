import styled from "styled-components";
import { colors } from "../../utils/colors";

export const ErrorMessageContainer = styled.div`
    width: 50%;
    height: 50%;
    align-items: center;
    justify-content: center;
    display:flex;
    background-color: ${colors.lightGrey};
`

export const ErrorMessage = styled.p`
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 20px;
    color: ${colors.blue};
`