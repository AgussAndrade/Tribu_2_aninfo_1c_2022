import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useState } from "react";

export const EditFormTicket = (props) => {
    const { readOnly, nombreTicket, tareasTicket, estadoTicket, severidadTicket, responsableTicket, vencimientoTicket, cuitClienteTicket} = props
    const handleSubmit = () => { }
    const [description, setDescription] = useState("");
    const [end_time, setEndTime] = useState(vencimientoTicket);
    const [responsible, setResponsible] = useState(responsableTicket);
    const [state, setState] = useState(estadoTicket);
    const [severity, setSeverity] = useState(severidadTicket);
    const [client, setClient] = useState(cuitClienteTicket);

    

    const formInputs = () => {
        return (
            <Form onSubmit={handleSubmit}>
                <Container>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3" controlId="title">
                                <Form.Label>Código</Form.Label>
                                <Form.Control type="text" placeholder="Código del ticket" name="code" disabled={true} readOnly={readOnly} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="description">
                                <Form.Label>Descripción</Form.Label>
                                <Form.Control
                                    readOnly={readOnly}
                                    as={"textarea"}
                                    style={{ height: '400px', resize: "none" }}
                                    placeholder="Descripción del ticket"
                                    onChange={(event) => {
                                        setDescription(event.currentTarget.value)
                                        console.log("Titulo cambiado: " + description);
                                    }}
                                />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="responsible" >
                                <Form.Label>Responsable</Form.Label>
                                <Form.Control
                                    as={"input"}
                                    list="employers"
                                    readOnly={readOnly}
                                    onChange={(event) => {
                                        setResponsible(event.currentTarget.responsible)
                                        console.log("Responsable cambiado: " + responsible);
                                    }} />
                                <datalist id={"employers"}>
                                    <option value="Julian" data-id-employer="3"></option>
                                    <option value="Juan" data-id-employer="2"></option>
                                    <option value="Lucia" data-id-employer="1"></option>
                                </datalist>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="state" >
                                <Form.Label>Estado</Form.Label>
                                <Form.Control
                                    as={"input"}
                                    list="employers"
                                    readOnly={readOnly}
                                    onChange={(event) => {
                                        setState(event.currentTarget.value)
                                        console.log("Severidad seleccionada: " + state);
                                    }}
                                />
                                <datalist id={"employers"}>
                                    <option value="Julian" data-id-employer="3"></option>
                                    <option value="Juan" data-id-employer="2"></option>
                                    <option value="Lucia" data-id-employer="1"></option>
                                </datalist>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="severity" >
                                <Form.Label>Severidad</Form.Label>
                                <Form.Select readOnly={readOnly}
                                    onChange={(event) => {
                                        setSeverity(event.currentTarget.value)
                                        console.log("Severidad seleccionada: " + severity);
                                    }}>
                                    <option value="3">Mayor</option>
                                    <option value="2">Medio</option>
                                    <option value="1">Baja</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="end_time" >
                                <Form.Label>Fecha de vencimiento</Form.Label>
                                <Form.Control
                                    type="date"
                                    name='end_time'
                                    readOnly={readOnly}
                                    value={end_time}
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
                                readOnly={readOnly}
                                value={client}
                                onChange={(event) => {
                                    setClient(event.currentTarget.value)
                                    console.log("Fecha de vencimiento cambiada: " + client);
                                }}
                                />
                                <datalist id={"clientes"}>
                                    <option value="Julian" data-id-client="3"></option>
                                    <option value="Juan" data-id-client="2"></option>
                                    <option value="Lucia" data-id-client="1"></option>
                                </datalist>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="title">
                                <Form.Label>Producto</Form.Label>
                                <Form.Control 
                                type="text" 
                                placeholder="Producto" 
                                name="title" 
                                disabled={true}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="title">
                                <Form.Label>Version</Form.Label>
                                <Form.Control type="text" placeholder="Version" name="title" disabled={true} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="title">
                                <Form.Label>Tareas</Form.Label>
                                <Form.Control type="text" placeholder="Tareas" name="title" disabled={true} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="title">
                                <Form.Label>Areas</Form.Label>
                                <Form.Control type="text" placeholder="Areas" name="title" disabled={true} />
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