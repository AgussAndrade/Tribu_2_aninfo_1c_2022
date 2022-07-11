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


export const SupportCard = (props) => {
    const {ticketData, modalProps, localStorageData} = props;
    const navigate = useNavigate();

    const cambiarEstadoTicket = (estado) => {

        const config = {
            config: {
                headers: {"Content-Type": "application/json"},
                method: "PUT"
            },
            url: SOPORTE_URL + "soporte/ticket/"+ticketData.id + "?estado="+ estado
        }
        fetch(config.url, config.config)
            .then((res) => res.json())
            .then((result) => {
                window.location.reload()
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
            </CardTextContainer>
            <ButtonContainer>
                {
                  ticketData.estado !== "cerrado" && <GenericButton
                        name={"Editar Ticket"}
                        onClick={() => {
                            modalProps.setCurrentForm(<EditFormTicket
                                readOnly={false}
                                ticketData={ticketData}
                                localStorageData = {localStorageData}
                            />);

                            modalProps.setCurrentTitleModal("Editar ticket: " + ticketData.titulo)
                            modalProps.setModalShow(true);
                            modalProps.setModalSize("lg")
                        }}
                        color={colors.lightBlue}
                    ></GenericButton>
                }
                {
                    ticketData.estado !== "cerrado" && <GenericButton
                        name={"Derivar Ticket"}
                        onClick={() => {
                            modalProps.setCurrentForm(<DerivateTicketForm/>)
                            modalProps.setCurrentTitleModal("Derivar ticket: " + ticketData.titulo);
                            modalProps.setModalSize("md")
                            modalProps.setModalShow(true)
                        }}
                        color={colors.lightBlue}
                    ></GenericButton>
                }

                <GenericButton
                    name={"Info Ampliada"}
                    onClick={() => {
                        modalProps.setCurrentForm(<EditFormTicket
                            readOnly={true}
                            ticketData={ticketData}
                            localStorageData = {localStorageData}
                        />);
                        modalProps.setCurrentTitleModal("Info ampliada: " + ticketData.titulo);
                        modalProps.setModalShow(true);
                        modalProps.setModalSize("lg");

                    }}
                    color={colors.lightBlue}
                ></GenericButton>
                {<GenericButton
                    name={ticketData.estado === "cerrado" ? "Abrir ticket": "Cerrar Ticket"}
                    onClick={() => {
                        cambiarEstadoTicket(ticketData.estado === "cerrado" ? "abierto" : "cerrado")
                    }}
                    color={ ticketData.estado === "cerrado" ? colors.green: colors.red}
                ></GenericButton>}
            </ButtonContainer>


        </CardContainer>
    );
}