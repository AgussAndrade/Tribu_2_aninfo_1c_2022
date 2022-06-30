import styled from "styled-components";

export const ButtonContainer = styled.div`
  width: 60px;
  height: 50px;
`;

export const ButtonCustom = styled.button`
    background-color: transparent;
    border: none;
    &:hover {
    cursor: pointer;
    }
    min-width: 60px;
`;

export const Icon = styled.img`
  width: 100%;
  height: 100%;
`;