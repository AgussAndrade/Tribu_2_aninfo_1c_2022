import styled from "styled-components";
import { colors } from "../../../../utils/colors.js"
import { Form } from 'react-bootstrap';

export const Container = styled.div`
    width: 100%;
    height: 25px;
    display:flex;
    padding-left: 20px;
    background-color: ${colors.black};
    color: ${colors.lightGrey};
    flex-direction: row;
    align-items: center;
`;
export const FormControl = styled(Form.Control)`
    font-size: 24px;
    line-height: 24px;
    width: 100%;
    height: 100%;
`;