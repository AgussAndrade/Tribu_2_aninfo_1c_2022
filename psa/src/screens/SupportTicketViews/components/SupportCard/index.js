import React, { useEffect } from "react";
import {
  CardContainer,
  CardTextContainer,
  TitleText,
  DescriptionText,
  ButtonContainer,
} from "./styled";
import { colors } from "../../../../utils/colors";
import { GenericButton } from "../GenericButton/index";
import { EditFormTicket } from "../../../Support/components/EditFormTicket";
import { DerivateTicketForm } from "../../../Support/components/DerivateTicketForm";
import { UseFetch } from "../../../../components/UseFetch";
import { SOPORTE_URL } from "../../../../utils/apiUrls";
import { useNavigate } from "react-router-dom";
import {getCurrentDate} from "../../../../utils/getCurrentDate";



export const SupportCard = (props) => {
  const { nombreTicket, tareasTicket, estadoTicket, severidadTicket, responsableTicket, vencimientoTicket, openModal, setCurrentForm, ticketId, setCurrentTitleModal, setModalSize, versionId, idTicket, cuitCienteTicket, descriptionTicket } = props;
  const navigate = useNavigate();

  const closeTicket = () => {

    //const date_formatted = getCurrentDate(new Date(vencimientoTicket), "-");
    const config = {
      config: {
        headers: { "Content-Type": "application/json" },
        method: "PUT"
      },
      url: SOPORTE_URL + "soporte/ticket/" + idTicket + "?estado=cerrado"
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
          {nombreTicket}
        </TitleText>
        <DescriptionText>
          Estado: {estadoTicket} |

          Severidad {severidadTicket} |

          Responsable: {responsableTicket}
        </DescriptionText>
        <DescriptionText>
          Vencimiento: {vencimientoTicket}
        </DescriptionText>
      </CardTextContainer>
      <ButtonContainer>
        <GenericButton
          name={"Editar Ticket"}
          onClick={() => {
            setCurrentForm(<EditFormTicket readOnly={false}
              nombreTicket={nombreTicket}
              tareasTicket={tareasTicket}
              estadoTicket={estadoTicket}
              severidadTicket={severidadTicket}
              responsableTicket={responsableTicket}
              vencimientoTicket={vencimientoTicket}
              idTicket={idTicket}
              cuitCienteTicket={cuitCienteTicket}
              versionId={versionId}
              descriptionId={descriptionTicket}
            />);

            setCurrentTitleModal("Editar ticket")
            openModal(true);
            setModalSize("lg")
          }}
          color={colors.lightBlue}
        ></GenericButton>
        <GenericButton
          name={"Derivar Ticket"}
          onClick={() => {
            setCurrentForm(<DerivateTicketForm />)
            setCurrentTitleModal("Derivar ticket");
            setModalSize("md")
            openModal(true)
          }}
          color={colors.lightBlue}
        ></GenericButton>
        <GenericButton
          name={"Info Ampliada"}
          onClick={() => {
            setCurrentForm(<EditFormTicket
                readOnly={true}
                nombreTicket={nombreTicket}
                tareasTicket={tareasTicket}
                estadoTicket={estadoTicket}
                severidadTicket={severidadTicket}
                responsableTicket={responsableTicket}
                vencimientoTicket={vencimientoTicket}
                idTicket={idTicket}
                cuitCienteTicket={cuitCienteTicket}
                versionId={versionId}
                descriptionId={descriptionTicket}
            />)
            setCurrentTitleModal("Info ampliada")
            openModal(true)
          }}
          color={colors.lightBlue}
        ></GenericButton>
          {estadoTicket === "cerrado" && <GenericButton
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