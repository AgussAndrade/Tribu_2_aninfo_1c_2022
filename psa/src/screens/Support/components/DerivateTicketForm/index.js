import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useState } from "react";
import { CreateTaskForm } from "../CreateTaskForm";
import { GenericModal } from "../GenericModal";

export const DerivateTicketForm = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [severity, setSeverity] = useState("");
    const [responsible, setResponsible] = useState("");
    const [clientId, setClientId] = useState("");
    const [modalShow, setModalShow] = useState(false)
    const [area, setArea] = useState("");


    const handleSubmit = () => { }

    const formInputs = () => {
        return (

            <Form onSubmit={handleSubmit}>
                <Container>

                    <GenericModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                        form={<CreateTaskForm closeModal={setModalShow} />}
                        title={"Crear tarea"}
                        size={"md"}
                    />
                    <Row>
                        <Col>
                            <Form.Group className="mb-3" controlId="severity" >
                                <Form.Label>Seleccione el área correspondiente</Form.Label>
                                <Form.Select
                                    onChange={(event) => {
                                        setArea(event.currentTarget.value)
                                        console.log("Fecha de vencimiento cambiada: " + area);
                                    }}
                                >
                                    <option value="3">Infraestructura</option>
                                    <option value="2">Proyectos</option>
                                    <option value="1">Soporte</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="title">
                                <Form.Label>Seleccione una o más tareas para asignar al ticket</Form.Label>
                                <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                                    <div>
                                        <Button variant="primary"  >
                                            Seleccionar tareas
                                        </Button>
                                    </div>
                                    <div style={{ marginLeft: "10px" }}>
                                        <Button variant="primary" onClick={() => { setModalShow(true) }}>
                                            Crear tarea
                                        </Button>
                                    </div>
                                </div>
                            </Form.Group>
                        </Col>
                    </Row>
                    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <div>
                            <Button variant="primary" type="submit">
                                Guardar
                            </Button>
                        </div>
                        <div style={{ marginLeft: "10px" }}>
                            <Button variant="primary" type="submit">
                                Cancelar
                            </Button>
                        </div>
                    </div>
                </Container>
            </Form>
        )
    }

    return (formInputs());
}