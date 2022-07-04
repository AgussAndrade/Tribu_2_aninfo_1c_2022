import styled from "styled-components";
import { colors } from "../../../../utils/colors"


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
  font-size: 22px;
  font-weight: bold;
  color: ${colors.blue};
  font-family: "Verdana";
  margin: 0%;
  
`

export const DescriptionText = styled.p`
  font-size: 15px;
  margin: 0%;
  color: ${colors.blue};
  font-family: "Verdana";
  margin-top: 5px;


`

export const ButtonContainer = styled.div`
    height: 35%;
    display: flex;
    width: 10%;
    min-width: fit-content;
    align-self: flex-end;
    padding-bottom:15px;
    padding-right: 25px;
    margin-left: 30px;
    
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
    &:hover{
      transform: translateY(-3px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
   }
`