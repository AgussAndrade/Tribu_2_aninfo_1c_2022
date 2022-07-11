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
import {useLocalStorage} from "../../utils/useLocalStorage";


export const SupportTicketViews = () => {
    const [searchTerm, setSerchTerm] = useState("");
    const [currentForm, setCurrentForm] = useState("");
    const [currentTitleModal, setCurrentTitleModal] = useState("");
    const [modalShow, setModalShow] = useState(false);
    const [modalSize, setModalSize] = useState("lg");
    const {id} = useParams();
    const [tickets, setTickets] = useState([]);
    const {data: empleados, isPending: esperandoEmpleados} = useLocalStorage("empleados");
    const {data: clientes, isPending: esperandoClientes} = useLocalStorage("clientes");

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
                    ticket.versionId = id;
                    let empleadoTicket = []
                    if (empleados !== null) {
                        empleadoTicket = empleados.filter((empleado) => {
                                return empleado.legajo === ticket.legajoResponsable;
                            }
                        )[0];
                        if (empleadoTicket !== undefined && empleadoTicket.length !== 0) {
                            ticket.nombreResponsable = empleadoTicket.nombre + " " + empleadoTicket.apellido;
                        }
                    }
                    let clienteTicket = [];
                    if (clientes!== null) {
                         clienteTicket = clientes.filter((cliente) => {
                                return cliente.cuit === ticket.cuit;
                            }
                        )[0];
                        if (clienteTicket !== undefined &&clienteTicket.length !== 0) {
                            ticket.nombreCliente = clienteTicket.razon_social;
                        }
                    }

                    return (
                        <SupportCard
                            ticketData={ticket}
                            localStorageData = {{empleados: empleados, clientes:clientes}}
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
                {(esperandoEmpleados || esperandoClientes) && ( <h2> Cargando información </h2>)}

                {!esperandoEmpleados && !esperandoClientes && ( <Cards/>)}

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