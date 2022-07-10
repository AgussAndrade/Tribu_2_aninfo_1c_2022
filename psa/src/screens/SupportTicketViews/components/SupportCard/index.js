import React from "react";
import {
    CardContainer,
    CardTextContainer,
    TitleText,
    DescriptionText,
    ButtonContainer,
} from "./styled";
import {colors} from "../../../../utils/colors";
import {GenericButton} from "../GenericButton/index";
import {EditFormTicket} from "../../../Support/components/EditFormTicket";
import {DerivateTicketForm} from "../../../Support/components/DerivateTicketForm";
import {SOPORTE_URL} from "../../../../utils/apiUrls";
import {useNavigate} from "react-router-dom";
import {getCurrentDate} from "../../../../utils/getCurrentDate";


export const SupportCard = (props) => {
    const {ticketData, modalProps} = props;
    const navigate = useNavigate();

    console.log(ticketData)
    const closeTicket = () => {

        const date_formatted = getCurrentDate(new Date(ticketData.vencimiento), "-");
        const config = {
            config: {
                headers: {"Content-Type": "application/json"},
                method: "PUT"
            },
            url: SOPORTE_URL + "soporte/ticket/" + ticketData.id + "?estado=cerrado"
        }
        fetch(config.url, config.config)
            .then((res) => res.json())
            .then((result) => {
                // window.location.reload()
                console.log(result)
            })
            .catch(() => navigate("/error"))
    }

    return (
        <CardContainer>
            <CardTextContainer>
                <TitleText>
                    {ticketData.titulo}
                </TitleText>
                <DescriptionText>
                    Estado: {ticketData.estado} |

                    Severidad {ticketData.severidad} |

                    Responsable: {ticketData.nombreResponsable}
                </DescriptionText>
                <DescriptionText>
                    Vencimiento: {ticketData.fechaDeFinalizacion}
                </DescriptionText>
                <DescriptionText>
                    Descripción: <i> {ticketData.descripcion} </i>
                </DescriptionText>
            </CardTextContainer>
            <ButtonContainer>
                <GenericButton
                    name={"Editar Ticket"}
                    onClick={() => {
                        modalProps.setCurrentForm(<EditFormTicket
                            readOnly={false}
                            ticketData={ticketData}
                        />);

                        modalProps.setCurrentTitleModal("Editar ticket: " + ticketData.titulo)
                        modalProps.setModalShow(true);
                        modalProps.setModalSize("lg")
                    }}
                    color={colors.lightBlue}
                ></GenericButton>
                <GenericButton
                    name={"Derivar Ticket"}
                    onClick={() => {
                        modalProps.setCurrentForm(<DerivateTicketForm/>)
                        modalProps.setCurrentTitleModal("Derivar ticket");
                        modalProps.setModalSize("md")
                        modalProps.setModalShow(true)
                    }}
                    color={colors.lightBlue}
                ></GenericButton>
                <GenericButton
                    name={"Info Ampliada"}
                    onClick={() => {
                        modalProps.setCurrentForm(<EditFormTicket
                            readOnly={true}
                            ticketData={ticketData}
                        />);
                        modalProps.setCurrentTitleModal("Info ampliada: " + ticketData.titulo);
                        modalProps.setModalShow(true);
                        modalProps.setModalSize("lg");

                    }}
                    color={colors.lightBlue}
                ></GenericButton>
                {ticketData.estado !== "cerrado" && <GenericButton
                    name={"Cerrar Ticket"}
                    onClick={() => {
                        closeTicket()
                    }}
                    color={colors.red}
                ></GenericButton>}
            </ButtonContainer>


        </CardContainer>
    );
}