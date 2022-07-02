import styled from "styled-components";
import { Form, Button } from 'react-bootstrap';
import { colors } from "../../../../utils/colors";

export const FmtButton = styled(Button)`
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
    align-self: flex-end;
    margin: 0 50px;
`;