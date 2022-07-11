import React, {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {
    PrincipalContainer,
    OptionsContainer,
    BodyContainer,
    Input,
    InputContainer,
} from "./styled";
import {TopBar} from "../../components/TopBar";
import {useState} from "react";
import {SupportCard} from "./components/SupportCard";
import {GenericModal} from "../Support/components/GenericModal";
import {useParams} from 'react-router';
import {SOPORTE_URL} from "../../utils/apiUrls";
import {GetOrSetItem} from "../../utils/GetOrSetItem";


export const SupportTicketViews = () => {
    const [searchTerm, setSerchTerm] = useState("");
    const [currentForm, setCurrentForm] = useState("");
    const [currentTitleModal, setCurrentTitleModal] = useState("");
    const [modalShow, setModalShow] = useState(false);
    const [modalSize, setModalSize] = useState("lg");
    const {id} = useParams();
    const [tickets, setTickets] = useState([]);

    const config = {
        url: SOPORTE_URL + "soporte/tickets?versionId=" + id, config: {
            headers: {"Content-Type": "application/json"},
            method: "GET"
        }
    }

    useEffect(() => {
        fetch(config.url, config.config)
            .then((res) => res.json())
            .then((result) => {
                setTickets(result);
            })
            .catch(() => navigate("/error"))
    }, []);

    const empleados = GetOrSetItem("empleados");
    const Cards = () => {
        return tickets
            .filter((val) => {
                if (searchTerm === "") return val;
                else if (
                    val.titulo.toLocaleLowerCase().includes(searchTerm.toLowerCase())
                )
                    return val;
            })
            .map((ticket) => {
                    ticket.legajoResponsable = 1;
                    ticket.cuit = "20-12345678-2";
                    const empleadoTicket = empleados.filter((empleado) => {
                            return empleado.legajo === ticket.legajoResponsable;
                        }
                    )[0];

                    const clienteTicket = clientes.filter((cliente) => {
                            return cliente.cuit === ticket.cuit;
                        }
                    )[0];

                    if (empleadoTicket.length !== 0) {
                        ticket.nombreResponsable = empleadoTicket.nombre + " " + empleadoTicket.apellido;
                    }

                    if (clienteTicket.length !== 0) {
                        ticket.nombreCliente = clienteTicket.razon_social;
                    }

                    return (
                        <SupportCard
                            ticketData={ticket}
                            modalProps={
                                {
                                    setModalShow: setModalShow,
                                    setCurrentForm: setCurrentForm,
                                    setCurrentTitleModal: setCurrentTitleModal,
                                    setModalSize: setModalSize
                                }
                            }
                            key = {ticket.id}
                        />
                    )
                }
            );
    };

    const navigate = useNavigate();
    return (
        <PrincipalContainer>
            <TopBar buttonSelected={"Soporte"}/>
            <OptionsContainer>
                <InputContainer>
                    <Input
                        type="text"
                        placeholder="Buscar Ticket..."
                        onChange={(event) => {
                            setSerchTerm(event.target.value);
                        }}
                    />
                </InputContainer>
            </OptionsContainer>
            <BodyContainer>
                <Cards/>
                <GenericModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    form={currentForm}
                    title={currentTitleModal}
                    size={modalSize}
                />
            </BodyContainer>
        </PrincipalContainer>
    );
};