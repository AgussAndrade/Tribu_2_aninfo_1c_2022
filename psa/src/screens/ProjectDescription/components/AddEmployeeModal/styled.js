import styled from "styled-components";
import { colors } from "../../../../utils/colors";


export const BodyContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const InputContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

export const TextContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  margin-left: 35px;
  flex-direction: column;
`;

export const DropDownList = styled.select`
  font-size: 15px;
  border-radius: 10px;
  border: none;
  padding: 5px;
  margin-left: 10px;
  cursor: pointer;
`;

export const ModalContainer = styled.div`
  align-self: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 250px;
  width: 250px;
  background-color: ${colors.lightGrey};
  border-radius: 15px;
  padding-bottom: 15px;
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
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
`;

export const CloseContainer = styled.div`
  display: flex;
  justify-self: flex-end;
  width: 10%;
  height: 100%;
`

export const Close = styled.button`
  width:100%;
  height: 100%;
  margin-left: 30px;
  color:white;
  background-color: transparent;
  border:none
`

export const SelectContainer = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
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

export const Title = styled.p`
  font-size: 18px;
  color: ${colors.white};
  margin: 0px;
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
  background-color: ${(props) => (props.color ? props.color : "lightGrey")};
  font-family: "Verdana";
  &:hover {
    cursor: pointer;
    background-color: ${colors.gre2};
  }
`;

export const ButtonContainer = styled.div`
  width: 45;
  height: 50%;
  background-color: ${colors.lightGrey};
  padding: 10px;
  display: flex;
  flex-direction: row;
`;

export const Buttons = styled.div`
  width: 100%;
  height: 40%;
  justify-content: center;
  align-items: center;
  display: flex;
`;
