import styled from "styled-components";
import { colors } from "../../utils/colors";
import { Form } from 'react-bootstrap';

export const FormGroup = styled(Form.Group)`
    display: flex;
    flex-direction: row;
    height: 100%;
    width: 50%;
    padding: 10px;
`;

export const FormLabel = styled(Form.Label)`
    margin-bottom: 10px;
    font-size: 18px;
    width: 100%;
    height: 100%;
`;

export const FormSelect = styled(Form.Select)`
    width: 93%;
    height: 100%;
`;