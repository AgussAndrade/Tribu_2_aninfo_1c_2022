import {Alert, Button, Col, Container, Form, Row} from "react-bootstrap";
import React, { useState } from "react";
import {SOPORTE_URL} from "../../../../utils/apiUrls";

export const CreateTaskForm = (props) => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [dateStart, setDateStart] = useState("");
    const [state, setState] = useState("");
    const [showSuccessMessage, setShowSuccessMessage] = useState(false)
    const { closeModal, idTicket, idProyecto } = props;

    const handleSubmit = (e) => {
        e.preventDefault()
        let newTask = {
            "estado": state,
            "fechaCreacion": dateStart,
            "idProyecto": idProyecto,
            "idTicket": idTicket,
            "descripcion": description,
            "nombre": name,
        };
        const config = {
            config: {
                body: JSON.stringify(newTask),
                headers: {"Content-Type": "application/json"},
                method: "POST"
            },
            url: SOPORTE_URL + "proyectos/" + idTicket + "/" + idProyecto + "/tarea"
        }

        fetch(config.url, config.config)
            .then((res) => {
                if (res.status === 200) {
                    setShowSuccessMessage(true)
                }
            })
            .catch((e) => console.log(e))
    }

    const formInputs = () => {
        return (
            <Form onSubmit={handleSubmit}>
                <Container>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3 crearTareaContainer" controlId="name">
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control required type="text" placeholder="Titulo del ticket" name="nombre" onChange={(e) => setName(e.currentTarget.value)}/>
                            </Form.Group>

                            <Form.Group className="mb-3 crearTareaContainer" controlId="state">
                                <Form.Label>Estado</Form.Label>
                                <Form.Select onChange={(e) => setState(e.currentTarget.value)}>
                                    <option value="En curso">En curso</option>
                                    <option value="Terminado">Terminado</option>
                                    <option value="En pausa">En pausa</option>
                                    <option value="Sin empezar">Sin empezar</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group className="mb-3 crearTareaContainer" controlId= "end_time" >
                                <Form.Label>Fecha de fin</Form.Label>
                                <Form.Control type="date" name='startDate' onChange={(e) => setDateStart(e.currentTarget.value)} />
                            </Form.Group>
                            <Form.Group className="mb-3 " controlId="description">
                                <Form.Label>Descripción</Form.Label>
                                <Form.Control as={"textarea"} style={{ height: '200px', resize: "none"}} placeholder="Descripción de la tarea" required onChange={(e) => setDescription(e.currentTarget.value)}/>
                            </Form.Group>
                        </Col>

                    </Row>
                    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <Button variant="primary" type="submit">
                            Guardar
                        </Button>
                    </div>
                </Container>
                <Alert show={showSuccessMessage} variant="success">
                    <p>
                        Las tareas se creo correctamente
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