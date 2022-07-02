import styled from "styled-components";
import { colors } from "../../utils/colors";
import { Form } from 'react-bootstrap';

export const GroupContainer = styled.div`
    width: 100%
`;

export const FormGroup = styled(Form.Group)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 100%;
    width: 50%;
    padding: 10px;
`;

export const FormLabel = styled(Form.Label)`
    margin-bottom: 10px;
    font-size: 18px;
    height: 100%;
`;

export const FormControl = styled(Form.Control)`
    font-size: 18px;
    line-height: 18px;
    height: 100%;
    width: inherit;
`;