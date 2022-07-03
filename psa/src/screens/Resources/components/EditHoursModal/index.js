import { React, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { FormGroupContainer } from "../../../../components/FormGroup";

export const EditHoursModal = (props) => {
    const {show, setShow} = props

    const [newHours, setNewHours] = useState(0)

    const handleClose = () => setShow(false);
    const handleSave= () => {
        console.log(newHours)
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Editar horas</Modal.Title>
            </Modal.Header>
                <Modal.Body>
                <FormGroupContainer
                    controlId="newHours"
                    label="Ingrese la nueva cantidad de horas"
                    type="number"
                    name="newHours"
                    placeholder="0hs"
                    handleChange={setNewHours}
                />
                </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cerrar
                </Button>
                <Button variant="primary" onClick={handleSave}>
                    Guardar horas
                </Button>
            </Modal.Footer>
      </Modal>
    );
}