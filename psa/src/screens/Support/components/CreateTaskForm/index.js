import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useState } from "react";

export const CreateTaskForm = (props) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [severity, setSeverity] = useState("");
    const [responsible, setResponsible] = useState("");
    const [clientId, setClientId] = useState("");
    const { closeModal } = props; 

    const handleSubmit = (e) => {
        e.preventDefault()
        closeModal(false)
    }

    const formInputs = () => {
        return (
            <Form onSubmit={handleSubmit}>
                <Container>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3 crearTareaContainer" controlId="title">
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control type="text" placeholder="Titulo del ticket" name="title" />
                            </Form.Group>

                            <Form.Group className="mb-3 crearTareaContainer" controlId="description">
                                <Form.Label>Estado</Form.Label>
                                <Form.Select>
                                    <option value="3">Mayor</option>
                                    <option value="2">Medio</option>
                                    <option value="1">Baja</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group className="mb-3 crearTareaContainer" controlId= "end_time" >
                                <Form.Label>Fecha de inicio</Form.Label>
                                <Form.Control type="date" name='end_time' />
                            </Form.Group>

                            <Form.Group className="mb-3 crearTareaContainer" controlId= "end_time" >
                                <Form.Label>Fecha de fin</Form.Label>
                                <Form.Control type="date" name='end_time' />
                            </Form.Group>

                            <Form.Group className="mb-3 crearTareaContainer" controlId="description">
                                <Form.Label>Prioridad</Form.Label>
                                <Form.Select>
                                    <option value="3">Mayor</option>
                                    <option value="2">Medio</option>
                                    <option value="1">Baja</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group className="mb-3 " controlId="description">
                                <Form.Label>Descripción</Form.Label>
                                <Form.Control as={"textarea"} style={{ height: '200px', resize: "none"}} placeholder="Descripción del ticket"/>
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