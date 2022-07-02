import styled from "styled-components";
import { Form, Button, Card } from 'react-bootstrap';
import { PrincipalContainer } from "../../../Home/styled";
import { colors } from "../../../../utils/colors";

export const FmtButton = styled(Button)`

    &:hover {
        background-color: ${colors.strongGrey};
        border: none;
        cursor: pointer;
    }
    background-color: ${colors.black};
    border: none;
    font-weight: bold;
    color: ${colors.white};
    border-radius: 5px;
    margin: 30px;
    box-sizing: border-box;
    width: 130px;
    height: 30px;
    align-self: center;
    box-shadow: 0px 18.0571px 18.0571px rgb(0 0 0 / 25%);
`;

export const ErrorCard = styled(Card)`
    background-color: #EEE6E6;
    margin-top: 50px;
    padding: 150px;
`;

export const TitleError = styled.label`
    align-self: center;
    padding: 5px;
    font-size: 20px;
`;

export const BodyError = styled.label`
    text-align: center;
    display: flex;
    font-style: normal;
    font-size: 20px;
`;