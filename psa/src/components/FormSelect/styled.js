import styled from "styled-components";
import { colors } from "../../utils/colors";
import { Form } from 'react-bootstrap';

export const FormGroup = styled(Form.Group)`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    margin: 50px 0;
`;

export const FormLabel = styled(Form.Label)`
    margin-bottom: 10px;
    font-size: 24px;
    width: 100%;
    height: 100%;
`;

export const FormSelect = styled(Form.Select)`
    font-size: 24px;
    line-height: 24px;
    width: 100%;
    height: 100%;
`;