import styled from "styled-components";
import { colors } from "../../utils/colors";

export const ModalContainer = styled.div`
  align-self: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 50px;
  z-index: 1000;
  background-color: ${colors.lightGrey};
`;


export const Overlay = styled.div`
    position : fixed;
    top : 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color : rgba(0,0,0,.7);
    z-index : 1000;
`