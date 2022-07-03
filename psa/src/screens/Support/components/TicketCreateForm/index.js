import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {useState} from "react";

export const TicketCreateForm = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [severity, setSeverity] = useState("");
    const [responsible, setResponsible] = useState("");
    const [endDate, setEndDate] = useState("");
    const [clientId, setClientId] = useState("");
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        event.preventDefault();
        console.log(form)
        if (form.checkValidity() === false) {
            event.stopPropagation();
        }
        setValidated(true);
    };

    const formInputs = () => {
        return (
                <Form onSubmit={handleSubmit} noValidate validated={validated}>
                    <Container>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3" controlId="title">
                                <Form.Label>Titulo</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Titulo del ticket"
                                    name = "title"
                                    value={title}
                                    required
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="description">
                                <Form.Label>Descripción</Form.Label>
                                <Form.Control as={"textarea"} style={{ height: '200px', resize: "none" }} placeholder="Descripción del ticket" value={description}/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId= "severity" >
                                <Form.Label>Severidad</Form.Label>
                                <Form.Select value={severity}>
                                    <option value="3">Mayor</option>
                                    <option value="2">Medio</option>
                                    <option value="1">Baja</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId= "responsible" >
                                <Form.Label>Responsable</Form.Label>
                                <Form.Control as={"input"} list = "employers" value={responsible}></Form.Control>
                                <datalist id={"employers"}>
                                    <option value="Julian" data-id-employer = "3"></option>
                                    <option value="Juan" data-id-employer = "2"></option>
                                    <option value="Lucia" data-id-employer = "1"></option>
                                </datalist>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId= "end_time" >
                                <Form.Label>Fecha de vencimiento</Form.Label>
                                <Form.Control type="date" name='end_time' value={endDate}/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId= "client_id" >
                                <Form.Label>Cliente</Form.Label>
                                <Form.Control as={"input"} list ="clientes" name ="id_client" value={clientId}></Form.Control>
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