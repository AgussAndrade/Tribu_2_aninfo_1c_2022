import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import {GenericModal} from "../../components/GenericModal";

import {Button} from "react-bootstrap";
import {TicketForm} from "./TicketForm";

export const Support = () => {
    const [modalShow, setModalShow] = useState(false);
    const navigate = useNavigate();

    return (
        <div>
            <p>Esto es soporte</p>
            <button onClick={() => navigate("/")}>Volver</button>
            <Button variant="primary" onClick={() => setModalShow(true)}>
                Launch vertically centered modal
            </Button>

            <GenericModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                form = {<TicketForm/>}
                title = {"Crear ticket"}
            />
    </div>
    );
};
