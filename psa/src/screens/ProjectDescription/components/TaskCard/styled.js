import styled from "styled-components";
import { colors } from "../../../../utils/colors"


export const CardTextContainer = styled.div`
    width: 100%;
    height: auto;
    flex-direction: column;
    padding: 10px;
    word-wrap: break-word;
    overflow: hidden;
    text-overflow: ellipsis;
`


export const TitleText = styled.p`
  font-size: 17px;
  color: ${colors.blue};
  font-family: "Verdana";
  font-weight: 600;
  margin: 0%;
`

export const ProjectInfoText = styled.p`
  font-size: 12px;
  margin: 0%;
  color: ${colors.blue};
  font-family: "Verdana";
  margin-top: 2px;

`

export const EditProjectContainer = styled.div`
    display: flex;
    width: 20%;
    height: 100%;
    align-items: center;
    justify-content: center;
`

export const AddEmployeeContainer = styled.div`
    display: flex;
    width: 35%;
    height: 100%;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
`

export const CardContainer = styled.div`
    width: 95%;
    height: auto;
    display: flex;
    background-color: ${colors.white2};
    border-radius: 20px;
    margin-top: 20px;
`

export const DeleteButtonContainer = styled.div`
  width:8%;
  margin-left: 5px;
  height: 100%;
`

export const Buttons = styled.div`
    height: 45px;
    display: flex;
    width: 50%;
    align-self: flex-end;
    padding-bottom:15px;
    padding-right: 25px;
    align-items: center;
    justify-content: flex-end;
`