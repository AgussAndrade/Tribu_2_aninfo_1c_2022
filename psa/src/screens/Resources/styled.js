import styled from "styled-components";
import { colors } from "../../utils/colors";

export const Button = styled.button`
    width: 180px;
    height: 50px;
    &:hover {
        background-color: ${colors.lightGrey};
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

export const VContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justifi-content: space-between;
    width: 30%;
    height: 100%;
    margin: 50px;
`;

export const Label = styled.div`
    margin-bottom: 10px;
    font-size: 24px;
    width: 100%;
    height: 100%;
`;

export const Select = styled.select`
    font-size: 24px;
    text-align: center;
    width: 100%;
    height: 100%;
`;

export const Option = styled.option`
    text-align: center;
    font-size: 20px;
    width: 100%;
    height: 100%;
`;

export const Input = styled.input`
    font-size: 24px;
    line-height: 24px;
    width: 100%;
    height: 100%;
`;