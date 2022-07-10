import { Button, Col, Container, Form, Row, Alert } from "react-bootstrap";
import { useState } from "react";
import {SOPORTE_URL} from "../../../../utils/apiUrls";
import {useNavigate} from "react-router-dom";
import {getCurrentDate} from "../../../../utils/getCurrentDate";




export const EditFormTicket = (props) => {
    const { ticketData, readOnly} = props
    const [description, setDescription] = useState(ticketData.description);
    const [end_time, setEndTime] = useState(ticketData.vencimiento);
    const [responsible, setResponsible] = useState(ticketData.responsable);
    const [state, setState] = useState(ticketData.estado);
    const [severity, setSeverity] = useState(ticketData.severidad);
    const [client, setClient] = useState(ticketData.cuitCliente);
    const [title, setTitle] = useState(ticketData.nombre);
    const [validated, setValidated] = useState(false);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [startTime, setStartTime] = useState(ticketData.vencimiento);
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        const form = event.currentTarget;

        event.preventDefault();
        if (form.checkValidity() === false) {
            event.stopPropagation();
        } else {
            const date_formatted = getCurrentDate(new Date(end_time), "-");

            const body = {
                "titulo": title,
                "descripicion": description,
                "fechaDeFinalizacion": date_formatted,
                "fechaDeCreacion": date_formatted,
                "cuit": 23,
                "estado": "abierto",
                "versionId": 10,
                "severidad": parseInt(severity),
                "legajo_cliente": 10
            }

            const config = {
                config: {
                    body: JSON.stringify(body),
                    headers: { "Content-Type": "application/json" },
                    method: "PUT"
                },
                url: SOPORTE_URL + "soporte/ticket"
            }
            fetch(config.url, config.config)
                .then((res) => res.json())
                .then((result) => {
                    setShowSuccessMessage(true)
                })
                .catch(() => navigate("/error"))
        }
        setValidated(true)
    };

    const formInputs = () => {
        return (
            <Form onSubmit={handleSubmit}>
                <Container>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3" controlId="title">
                                <Form.Label>Código</Form.Label>
                                <Form.Control type="text" defaultValue={ticketData.id} name="code" disabled={true} readOnly={readOnly}
                                    onChange={(event) => {
                                        setTitle(event.currentTarget.value)
                                    }} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="description">
                                <Form.Label>Descripción</Form.Label>
                                <Form.Control
                                    readOnly={readOnly}
                                    as={"textarea"}
                                    style={{ height: '400px', resize: "none" }}
                                    defaultValue={description}
                                    onChange={(event) => {
                                        setDescription(event.currentTarget.value)
                                    }}
                                />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="responsible" >
                                <Form.Label>ID Responsable</Form.Label>
                                <Form.Control
                                    as={"input"}
                                    list="employers"
                                    readOnly={readOnly}
                                    defaultValue={ticketData.responsable}
                                    autoComplete={"off"}
                                    onChange={(event) => {
                                        setResponsible(event.currentTarget.responsible)
                                        console.log("Responsable cambiado: " + responsible);
                                    }} />
                                <datalist id={"employers"}>
                                    <option defaultValue="Julian" data-id-employer="3"></option>
                                    <option defaultValue="Juan" data-id-employer="2"></option>
                                    <option defaultValue="Lucia" data-id-employer="1"></option>
                                </datalist>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="state" >
                                <Form.Label>Estado</Form.Label>
                                <Form.Control
                                    readOnly={readOnly}
                                    defaultValue={ticketData.estado}
                                    onChange={(event) => {
                                        setState(event.currentTarget.value)
                                        console.log("Severidad seleccionada: " + state);
                                    }}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="severity" >
                                <Form.Label>Severidad</Form.Label>
                                <Form.Select readOnly={readOnly}
                                    defaultValue={ticketData.severidad}
                                    onChange={(event) => {
                                        setSeverity(event.currentTarget.value)
                                        console.log("Severidad seleccionada: " + severity);
                                    }}>
                                    <option defaultValue="2" selected={ticketData.severidad == 2}>Mayor</option>
                                    <option defaultValue="1" selected={ticketData.severidad == 1}>Medio</option>
                                    <option defaultValue="0" selected={ticketData.severidad == 0} >Baja</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="end_time" >
                                <Form.Label>Fecha de vencimiento</Form.Label>
                                <Form.Control
                                    type="date"
                                    name='end_time'
                                    readOnly={readOnly}
                                    defaultValue={getCurrentDate(new Date(ticketData.vencimiento), "/")}
                                    onChange={(event) => {
                                        setEndTime(event.currentTarget.value)
                                        console.log("Fecha de vencimiento cambiada: " + end_time);
                                    }}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="client_id" >
                                <Form.Label>Cliente</Form.Label>
                                <Form.Control
                                    as={"input"}
                                    list="clientes"
                                    name="id_client"
                                    defaultValue={ticketData.cuitCliente}
                                    readOnly={readOnly}
                                    onChange={(event) => {
                                        setClient(event.currentTarget.value)
                                        console.log("Fecha de vencimiento cambiada: " + client);
                                    }}
                                    autoComplete={"off"}
                                />
                                <datalist id={"clientes"}>
                                    <option defaultValue="Julian" data-id-client="3"></option>
                                    <option defaultValue="Juan" data-id-client="2"></option>
                                    <option defaultValue="Lucia" data-id-client="1"></option>
                                </datalist>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="product">
                                <Form.Label>Producto</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Producto"
                                    name="title"
                                    disabled={true}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="version">
                                <Form.Label>Version</Form.Label>
                                <Form.Control type="text" placeholder="Version" name="title" disabled={true} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="tasks">
                                <Form.Label>Tareas</Form.Label>
                                <Form.Control type="text" placeholder="Tareas" name="title" disabled={true} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="areas">
                                <Form.Label>Areas</Form.Label>
                                <Form.Control type="text" placeholder="Areas" name="title" disabled={true} />
                            </Form.Group>
                        </Col>
                    </Row>
                    {
                        !readOnly && <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <Button variant="primary" type="submit">
                                Guardar
                            </Button>
                        </div>
                    }
                </Container>
                <Alert show={showSuccessMessage} variant="success">
                    <p>
                        El ticket se edito correctamente


                    </p>
                    <hr />
                    <div className="d-flex justify-content-end">
                        <Button onClick={() => setShowSuccessMessage(false)} variant="outline-success">
                            Close me y'all!
                        </Button>
                    </div>
                </Alert>
            </Form>
        )
    }

    return (formInputs());
}