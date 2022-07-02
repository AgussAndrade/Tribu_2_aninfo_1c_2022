import styled from "styled-components";
import { colors } from "../../utils/colors";

export const PrincipalContainer = styled.div`
    width: 100%;
    height: 100%;
    align-items:center;
    display: flex;
    flex-direction: column;
    font-family: "Verdana";
    background-color: ${colors.backgroundGrey};
`

export const OptionsContainer = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    background-color: ${colors.lightBlue3};
    justify-content: center;
    flex-direction: row;
		align-items: center;
`

export const CardContainer = styled.div`
    width: 95%;
    height: 120px;
    display: flex;
    background-color: ${colors.lightGrey2};
    border-radius: 20px;
    margin-top: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
`
export const BodyContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    background-color: ${colors.backgroundGrey};
    align-items: center;
    flex-direction: column;
		padding-bottom: 20px;
`

export const CardTextContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 10px;
    word-wrap: break-word;
    overflow: hidden;
    text-overflow: ellipsis;
    min-width: 100px;
    

`


export const TitleText = styled.p`
  font-size: 25px;
  color: ${colors.blue};
  font-family: "Verdana";
  margin: 0%;
`

export const DescriptionText = styled.p`
  font-size: 16px;
  margin: 0%;
  color: ${colors.blue};
  font-family: "Verdana";
 
`
export const InputContainer = styled.div`
	width: 100%;
  height: 50%;
  display: flex;
	margin-left: 35px;
`

export const Input = styled.input`
  font-size: 15px;
	border-radius: 10px;
	border: none;
	padding: 10px;
`

export const ButtonNewProyect = styled.div`
    width: 15%;
    height: 50%;
    display: flex;
    font-family: "Verdana";
    padding-right: 50px;
    min-width: fit-content;

`
// export const InfoProjectContainer = styled.div`
//     height: 35%;
//     display: flex;
//     width: 15%;
//     min-width: fit-content;
//     align-self: flex-end;
//     padding-bottom:15px;
//     padding-right: 25px;
//     margin-left: 10px;

    
// `