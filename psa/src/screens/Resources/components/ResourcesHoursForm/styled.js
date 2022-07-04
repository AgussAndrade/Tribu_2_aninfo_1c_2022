import styled from "styled-components";
import { colors } from "../../../../utils/colors";
import { Form, Button } from 'react-bootstrap';

export const ResourcesForm = styled(Form)`
    width: 100%
`;

export const ResourcesFormButton = styled(Button)`
    margin-right: 5%;
    float: right;
    background-color: ${colors.black};
    font-weight: bold;
`;