import React, {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {
    PrincipalContainer,
    OptionsContainer,
    ButtonNewProyect,
    BodyContainer,
    Input,
    InputContainer,
} from "./styled";
import {TopBar} from "../../components/TopBar";
import {GenericButton} from "../../components/GenericButton";
import {colors} from "../../utils/colors";
import {useState} from "react";
import {SupportCard} from "./components/SupportCard";
import {GenericModal} from "../Support/components/GenericModal";
import {useParams} from 'react-router';
import {SOPORTE_URL} from "../../utils/apiUrls";


export const SupportTicketViews = () => {
    const [searchTerm, setSerchTerm] = useState("");
    const [currentForm, setCurrentForm] = useState("");
    const [currentTitleModal, setCurrentTitleModal] = useState("");
    const [modalShow, setModalShow] = useState(false);
    const [modalSize, setModalSize] = useState("lg");
    const {id} = useParams();
    const [tickets, setTickets] = useState([]);

    //get para buscar los tickets asociados a un producto
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

    const clientes = JSON.parse(localStorage.getItem("clientes"));


    const Cards = () => {
        return tickets
            .filter((val) => {
                if (searchTerm === "") return val;
                else if (
                    val.nombre.toLocaleLowerCase().includes(searchTerm.toLowerCase())
                )
                    return val;
            })
            .map((ticket) => {
                    const clienteTicket = clientes.filter((cliente) => {
                        return cliente.CUIT === ticket.legajoResponsable;
                        }
                    );
                    console.log(clienteTicket)

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