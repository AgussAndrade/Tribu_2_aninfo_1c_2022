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
  font-size: 21px;
  color: ${colors.blue};
  font-family: "Verdana";
  font-weight: 600;
  margin: 0%;
`

export const ProjectInfoText = styled.p`
  font-size: 13px;
  margin: 0%;
  margin-top: 4px;
  color: ${colors.blue};
  font-family: "Verdana";
`

export const EditProjectContainer = styled.div`
    height: 45px;
    display: flex;
    width: 10%;
    min-width: fit-content;
    align-self: flex-end;
    padding-bottom:15px;
    padding-right: 25px;
`

export const CardContainer = styled.div`
    width: 95%;
    display: flex;
    background-color: ${colors.lightGrey2};
    border-radius: 20px;
`