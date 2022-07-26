import {Alert, Button, Col, Container, Form, Row} from "react-bootstrap";
import { useState } from "react";
import React from 'react';
import Select from 'react-select'
import {SOPORTE_URL} from "../../../../utils/apiUrls";

export const AssignTaskTicket = (props) => {
    const {closeModal, tareas, idProyecto, idTicket} = props
    const [tareasSeleccionadas, setTareasSeleccionadas] = useState([])
    const [showSuccessMessage, setShowSuccessMessage] = useState(false)
    const options = [];

    tareas.map((tarea) => {
        options.push({value: tarea.id, label: tarea.nombre})
    })

    const handleChange = selectedOption => {
        setTareasSeleccionadas(selectedOption)
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        let totalTareas = tareasSeleccionadas.length;
        let totalTareasDerivadas = 0;
        tareasSeleccionadas.map((tarea) => {
            const config = {
                config: {
                    headers: {"Content-Type": "application/json"},
                    method: "PUT"
                },
                url: SOPORTE_URL + "proyectos/tarea/" + idProyecto + "/"+ tarea.value + "/" + idTicket
            }
            fetch(config.url, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify([])
            })
                .then((res) => {
                    if (res.status === 200) {
                        totalTareasDerivadas = totalTareasDerivadas + 1
                        setShowSuccessMessage(totalTareas === totalTareasDerivadas)
                        console.log(totalTareasDerivadas)
                    }
                })
                .catch((e) => console.log(e))
        })
    }

    const formInputs = () => {
        return (
            <Form onSubmit={handleSubmit}>
                <Container>
                    <Row>
                        <Col>
                            <Form.Group className="mb-12" controlId="title">
                                <Form.Label>Buscar tarea</Form.Label>
                                <Select required options={options} value={tareasSeleccionadas} isMulti  closeMenuOnSelect={false} onChange={handleChange}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: "90px" }}>
                        <Button variant="primary" type="submit">
                            Guardar
                        </Button>
                    </div>
                </Container>
                <Alert show={showSuccessMessage} variant="success">
                    <p>
                        Las tareas se derivaron correctamente
                    </p>
                    <hr/>
                    <div className="d-flex justify-content-end">
                        <Button onClick={() => setShowSuccessMessage(false)} variant="outline-success">
                            Cerrar
                        </Button>
                    </div>
                </Alert>
            </Form>
        )
    }

    return (formInputs());
}