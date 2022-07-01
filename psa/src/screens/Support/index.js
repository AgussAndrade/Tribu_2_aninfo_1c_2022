import React, { useState } from 'react';
import { PrincipalContainer, BodyContainer } from "./styled";
import { TopBar } from "../../components/TopBar";
import { useNavigate } from "react-router-dom";
import {Button, Modal} from 'react-bootstrap';
import { GenericForm } from "../../components/Form/index"

export const Support = () => {
    const [modalShow, setModalShow] = useState(false);
    const navigate = useNavigate();

    function GenericModal(props) {
        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        {props.title}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {props.form}
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }

    return (
        <PrincipalContainer>
            <TopBar buttonSelected = {"Soporte"} />
            <Button variant="primary" onClick={() => setModalShow(true)}>
                Launch vertically centered modal
            </Button>

            <GenericModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                form = {<GenericForm/>}
                title = {"Crear ticket"}
            />
        </PrincipalContainer>
    );
};