import {Alert, Button, Col, Container, Form, Row} from "react-bootstrap";
import {useState} from "react";
import {SOPORTE_URL} from "../../../../utils/apiUrls";
import {useNavigate} from "react-router-dom";
import {getCurrentDate} from "../../../../utils/getCurrentDate";
import {isInteger, isString} from "formik";


export const TicketCreateForm = (props) => {
    const navigate = useNavigate();
    const [validated, setValidated] = useState(false);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [title, setTitle] = useState("");
    const [severity, setSeverity] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState("");
    const [responsible, setResponsible] = useState("");
    const [legajoResponsable, setLegajoResponsable] = useState("");
    const [clientName, setClientName] = useState("");
    const [cuitClient, setCuitClient] = useState("");

    const handleSubmit = (event) => {
        const form = event.currentTarget;

        event.preventDefault();
        if (form.checkValidity() === false) {
            event.stopPropagation();
        } else {
            const body = {
                "titulo": title,
                "descripcion": description,
                "fechaDeFinalizacion": date,
                "fechaDeCreacion": date,
                "cuit": cuitClient,
                "estado": "abierto",
                "idVersion": props.versionId,
                "severidad": parseInt(severity),
                "legajoResponsable": legajoResponsable
            }

            const config = {
                config: {
                    body: JSON.stringify(body),
                    headers: {"Content-Type": "application/json"},
                    method: "POST"
                },
                url: SOPORTE_URL + "soporte/ticket?idVersion=" + props.versionId
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
                                    }}
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="description">
                                <Form.Label>Descripción</Form.Label>
                                <Form.Control as={"textarea"} style={{height: '200px', resize: "none"}}
                                              placeholder="Descripción del ticket"
                                              type="text"
                                              value={description}
                                              onChange={(event) => {
                                                  setDescription(event.currentTarget.value)
                                              }}
                                />

                            </Form.Group>

                            <Form.Group className="mb-3" controlId="severity">
                                <Form.Label>Severidad</Form.Label>
                                <Form.Select
                                    onChange={(event) => {
                                        setSeverity(event.currentTarget.value)
                                    }}
                                >
                                    <option defaultValue="2">Mayor</option>
                                    <option defaultValue="1">Medio</option>
                                    <option defaultValue="0">Baja</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="responsible">
                                <Form.Label>Responsable</Form.Label>
                                <Form.Control
                                    as={"input"}
                                    list="employers"
                                    defaultValue={responsible}
                                    autoComplete={"off"}
                                    onChange={(event) => {
                                        setResponsible(event.currentTarget.value)
                                        props.empleados.map((empleado) => {
                                            if (empleado.nombre.includes(event.currentTarget.value.split(' ')[0])) {
                                                setLegajoResponsable(empleado.legajo)
                                            }
                                        })

                                    }}
                                />
                                <datalist id={"employers"}>
                                    {
                                        props.empleados !== null && props.empleados.map((empleado) => {
                                            return <option key={empleado.legajo} >{empleado.nombre + " " + empleado.apellido}</option>
                                        })
                                    }
                                </datalist>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="end_time">
                                <Form.Label>Fecha de vencimiento</Form.Label>
                                <Form.Control type="date" name='end_time' min="1997-01-01"
                                              required
                                              value={date}
                                              onChange={(event) => {
                                                  setDate(event.currentTarget.value)
                                              }}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="client_id">
                                <Form.Label>Cliente</Form.Label>
                                <Form.Control
                                    required
                                    as={"input"}
                                    list="clientes"
                                    name="id_client"
                                    defaultValue={clientName}
                                    onChange={(event) => {
                                        setClientName(event.currentTarget.value)
                                        props.clientes.map((cliente) => {
                                            if (cliente.razon_social.includes(event.currentTarget.value)) {
                                                setCuitClient(cliente.cuit)
                                            }
                                        })

                                    }}
                                    autoComplete={"off"}
                                />
                                <datalist id={"clientes"}>
                                    {

                                        props.clientes !== null && props.clientes.map((cliente) => {
                                            return <option key={cliente.cuit} >{cliente.razon_social}</option>
                                        })
                                    }
                                </datalist>
                            </Form.Group>
                        </Col>
                    </Row>
                    <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                        <Button variant="primary" type="submit">
                            Guardar
                        </Button>
                    </div>
                </Container>
                <Alert show={showSuccessMessage} variant="success">
                    <p>
                        El ticket se creo correctamente
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