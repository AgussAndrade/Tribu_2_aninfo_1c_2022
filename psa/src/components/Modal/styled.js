import styled from "styled-components";
import { colors } from "../../utils/colors";

export const ModalContainer = styled.div`
  align-self: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  height: 500px;
  width: 400px;
  min-height: 400px;
  min-width: 300px;
  background-color: ${colors.lightGrey};
  border-radius: 15px;
  overflow: hidden;
`;

export const TitleContainer = styled.div`
  width: 100%;
  height: 10%;
  background-color: ${colors.lightBlue};
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Title = styled.p`
  font-size: 18px;
  color: ${colors.white2};
`

export const TextContainer = styled.div`
  width: 100%;
  height: 80%;
  background-color: ${colors.lightGrey};
  display: flex; 
`

export const ButtonContainer = styled.div`
  width: 100%;
  height: 10%;
  justify-content: flex-end;
  display: flex;
`



export const Overlay = styled.div`
    position : fixed;
    top : 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color : rgba(0,0,0,.7);
    z-index : 1000;
`