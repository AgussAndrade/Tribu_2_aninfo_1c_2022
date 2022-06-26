import styled from "styled-components";
import { colors } from "../../utils/colors";
import { Form } from 'react-bootstrap';
import { Link } from "react-router-dom";

export const FormContainer = styled(Form)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justifi-content: space-between;
    width: 30%;
    height: 200%;
    margin: 50px;
`;

export const BtnLink = styled(Link)`
    text-decoration: none;
    text-align: center;
    line-height: 300%;
    width: 180px;
    height: 50px;
    &:hover {
        background-color: ${colors.strongGrey};
        border: none;
    cursor: pointer;
    }
    background-color: ${colors.black};
    border: none;
    font-family: "Verdana";
    font-weight: bold;
    color: ${colors.white};
    border-radius: 5px;
`;

export const FormBtnLink = styled(BtnLink)`
    align-self: flex-end;
    margin: 0 50px;
`;
