import {useState} from "@types/react";
import {getCurrentDate} from "../../../../utils/getCurrentDate";
import {Button, Col, Container, Form, Row} from "react-bootstrap";

export const DerivationTicketForm = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [severity, setSeverity] = useState("");
    const [responsible, setResponsible] = useState("");
    const [endDate, setEndDate] = useState(getCurrentDate("/"));
    const [clientId, setClientId] = useState("");


    const handleSubmit = () => {
    }

    const formInputs = () => {
        return (
            <Form onSubmit={handleSubmit}>
                <Container>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3" controlId="title">
                                <Form.Label>Titulo</Form.Label>
                                <Form.Control type="text" placeholder="Titulo del ticket" name = "title"/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="description">
                                <Form.Label>Descripción</Form.Label>
                                <Form.Control as={"textarea"} style={{ height: '200px', resize: "none" }} placeholder="Descripción del ticket"/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId= "severity" >
                                <Form.Label>Severidad</Form.Label>
                                <Form.Select>
                                    <option value="3">Mayor</option>
                                    <option value="2">Medio</option>
                                    <option value="1">Baja</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId= "responsible" >
                                <Form.Label>Responsable</Form.Label>
                                <Form.Control as={"input"} list = "employers" ></Form.Control>
                                <datalist id={"employers"}>
                                    <option value="Julian" data-id-employer = "3"></option>
                                    <option value="Juan" data-id-employer = "2"></option>
                                    <option value="Lucia" data-id-employer = "1"></option>
                                </datalist>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId= "end_time" >
                                <Form.Label>Fecha de vencimiento</Form.Label>
                                <Form.Control type="date" name='end_time' />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId= "client_id" >
                                <Form.Label>Cliente</Form.Label>
                                <Form.Control as={"input"} list ="clientes" name ="id_client"></Form.Control>
                                <datalist id={"clientes"}>
                                    <option value="Julian" data-id-client = "3"></option>
                                    <option value="Juan" data-id-client = "2"></option>
                                    <option value="Lucia" data-id-client = "1"></option>
                                </datalist>
                            </Form.Group>
                        </Col>
                    </Row>
                    <div style={{display: 'flex', "justify-content": 'flex-end'}}>
                        <Button variant="primary" type="submit">
                            Guardar
                        </Button>
                    </div>
                </Container>
            </Form>
        )
    }

    return ( formInputs() );
}