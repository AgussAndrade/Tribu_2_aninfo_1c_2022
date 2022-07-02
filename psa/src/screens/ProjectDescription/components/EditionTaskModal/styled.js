import styled from "styled-components";
import { colors } from "../../../../utils/colors";

export const ModalContainer = styled.div`
  align-self: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 500px;
  width: 400px;
  min-height: 400px;
  min-width: 300px;
  background-color: ${colors.lightGrey};
  border-radius: 15px;
  overflow: hidden;
  padding-bottom: 10px;
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
  color: ${colors.white};
  margin: 0px;
`

export const Input = styled.input`
  font-size: 15px;
	border-radius: 10px;
	border: none;
	padding:5px;
  margin-left: 10px;
  height: 80%;
  
`
export const DescriptionInput = styled.textarea`
  text-size-adjust: inherit;
  font-size: 15px;
  padding-bottom: 40px;
  display: block;
	border-radius: 10px;
	border: none;

  overflow-wrap: break-word;
  width: 100%;
  height:100%;
  resize:none;
`

export const DropDownList = styled.select`
  font-size: 15px;
	border-radius: 10px;
	border: none;
	padding:5px;
  margin-left: 10px;
  cursor: pointer;
`

export const Date = styled.input.attrs({type: 'date',})`
  font-size: 15px;
	border-radius: 10px;
	border: none;
  height: 100%;
  margin-left: 10px;
  width:30%;
`


export const Text = styled.p`
  font-size: 17px;
  color: ${colors.black};
  margin: 0px;
`

export const FormContainer = styled.form`
  width: 100%;
  height: 80%;
  background-color: ${colors.lightGrey};
  display: flex;
  padding-top: 20px;
  flex-direction: column;
`

export const DescriptionContainer = styled.div`
  display:block;
  padding-bottom: 40px;
  padding-left:40px;
  width:90%;
  overflow-wrap: break-word;
  height: 100%;
  
`

export const ButtonContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${colors.lightGrey};
  padding: 10px;
`

export const StyledTextInputContainer = styled.div`
  width: 100%;
  height: 10%;
  margin-bottom: 10px;
  display: flex;
  flex-direction: row;
  margin-left: 20px;
  align-items: flex-start;
  
`

export const DeleteButtonContainer = styled.div`
  width: 40%;
  height: 100%;
  background-color: ${colors.lightGrey};
  display: flex; 
  margin-right: 30px;
`


export const Overlay = styled.div`
    position : fixed;
    top : 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color : rgba(0,0,0,.7);
`

export const ModalButton = styled.button`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  border-radius: 15px;
  border: none;
  font-size: 15px;
  justify-content: center;
  z-index: inherit;
  position: relative;
  color: white;
  background-color: ${(props) =>(props.color) ? props.color : 'lightGrey' };
  font-family: "Verdana";
  &:hover {
    cursor: pointer;
    background-color: ${colors.gre2};
  }
`;

export const Buttons = styled.div`
  display: flex;
  position: inherit;
  height: 10%;
  width: 60%;
  flex-direction: row;
  align-items: center; 
  margin-left: 80px;
`