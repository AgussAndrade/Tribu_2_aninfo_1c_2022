import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useState } from "react";
import React from 'react';
import Select from 'react-select'
import {SOPORTE_URL} from "../../../../utils/apiUrls";

export const AssignTaskTicket = (props) => {
    const {closeModal, tareas, idProyecto, idTicket} = props
    const [tareasSeleccionadas, setTareasSeleccionadas] = useState([])
    const options = [];

    tareas.map((tarea) => {
        options.push({value: tarea.id, label: tarea.nombre})
    })

    const handleChange = selectedOption => {
        setTareasSeleccionadas(selectedOption)
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        tareasSeleccionadas.map((tarea) => {
            const config = {
                config: {
                    headers: {"Content-Type": "application/json"},
                    method: "PUT"
                },
                url: SOPORTE_URL + "proyectos/tarea/" + idProyecto + "/"+ tarea.value + "/" + idTicket
            }
            fetch("https://moduloproyectos.herokuapp.com/proyectos/" + idProyecto + "/tareas/"+ tarea.value + "/tickets/" + idTicket, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
            })
                .then((res) => res.json())
                .then((result) => {
                    console.log(result)
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
                    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <Button variant="primary" type="submit">
                            Guardar
                        </Button>
                    </div>
                </Container>
            </Form>
        )
    }

    return (formInputs());
}