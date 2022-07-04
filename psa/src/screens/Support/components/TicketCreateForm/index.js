import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useState } from "react";
import {SOPORTE_URL} from "../../../../utils/apiUrls";
import {UseFetch} from "../../../../components/UseFetch";


export const TicketCreateForm = (props) => {
    const [validated, setValidated] = useState(false);
    const [title, setTitle] = useState("");
    const [severity, setSeverity] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState("");
    const [responsible, setResponsible] = useState("");
    const [cuit, setCuit] = useState("");

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        event.preventDefault();
        if (form.checkValidity() === false) {
            event.stopPropagation();
        } else {
            setValidated(true)
            const _date = (new Date(date)).getTime()
            const body = {
                "title": title,
                "description": description,
                "fechaDeFinalizacion" : _date,
                "fechaDeCreacion" : (new Date()).getTime(),
                "cuit": parseInt(cuit),
                "estado" : "abierto",
                "versionId": props.versionId,
                "severidad": parseInt(severity)
            }
        }


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
                                    name="title"
                                    required
                                    value={title}
                                    onChange={(event) => {
                                        setTitle(event.currentTarget.value)
                                        console.log("Titulo cambiado: " + title);
                                    }}
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="description">
                                <Form.Label>Descripción</Form.Label>
                                <Form.Control as={"textarea"} style={{ height: '200px', resize: "none" }} placeholder="Descripción del ticket"
                                    type="text"
                                    value={description}
                                    onChange={(event) => {
                                        setDescription(event.currentTarget.value)
                                        console.log("Descripcion cambiada: " + description);
                                    }}
                                />

                            </Form.Group>

                            <Form.Group className="mb-3" controlId="severity" >
                                <Form.Label>Severidad</Form.Label>
                                <Form.Select
                                    onChange={(event) => {
                                        setSeverity(event.currentTarget.value)
                                    }}
                                >
                                    <option value="2" >Mayor</option>
                                    <option value="1" >Medio</option>
                                    <option value="0" >Baja</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="responsible" >
                                <Form.Label>Responsable</Form.Label>
                                <Form.Control 
                                as={"input"} 
                                list="employers"
                                value={responsible}
                                onChange={(event) => {
                                    setResponsible(event.currentTarget.value)
                                }} />
                                <datalist id={"employers"}>
                                    <option value="Julian" data-id-employer="3"></option>
                                    <option value="Juan" data-id-employer="2"></option>
                                    <option value="Lucia" data-id-employer="1"></option>
                                </datalist>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="end_time" >
                                <Form.Label>Fecha de vencimiento</Form.Label>
                                <Form.Control type="date" name='end_time'
                                    required
                                    value={date}
                                    onChange={(event) => {
                                        setDate(event.currentTarget.value)
                                        console.log("Fecha cambiada: " + date);
                                    }}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="client_id" >
                                <Form.Label>Cliente</Form.Label>
                                <Form.Control 
                                as={"input"} 
                                list="clientes" 
                                name="id_client"
                                value={cuit}
                                onChange={(event) => {
                                    setCuit(event.target.dataset.cuit)
                                }}
                                />
                                <datalist id={"clientes"}>
                                    <option value="Julian" data-cuit="3"></option>
                                    <option value="Juan" data-cuit="2"></option>
                                    <option value="Lucia" data-cuit="1"></option>
                                </datalist>
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