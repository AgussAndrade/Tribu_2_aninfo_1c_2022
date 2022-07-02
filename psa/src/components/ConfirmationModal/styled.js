import styled from "styled-components";
import { colors } from "../../utils/colors";

export const ModalContainer = styled.div`
  align-self: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 200px;
  width: 400px;
  background-color: ${colors.lightGrey};
  border-radius: 15px;
  overflow: hidden;
  padding-bottom: 10px;
  justify-content: center;
  align-items: center;
`;

export const TitleContainer = styled.div`
  width: 100%;
  height: 20%;
  background-color: ${colors.lightBlue};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.p`
  font-size: 18px;
  color: ${colors.white};
  margin: 0px;
`;

export const TextContainer = styled.div`
  padding: 20px;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
`;

export const ModalButton = styled.button`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  border-radius: 15px;
  border: none;
  font-size: 15px;
  justify-content: center;
  color: white;
  background-color: ${(props) =>(props.color) ? props.color : 'lightGrey' };
  font-family: "Verdana";
  &:hover {
    cursor: pointer;
    background-color: ${colors.gre2};
  }
`;

export const ButtonContainer = styled.div`
  width: 30%;
  height: 100%;
  background-color: ${colors.lightGrey};
  padding: 10px;
`

export const Buttons = styled.div`
  display: inline-flex;
  height: 30%;
  width: 100%;
  flex-direction: row;
  align-items: center; 
  justify-content: center;
`
