import {Button, Col, Container, Form, Row, Alert} from "react-bootstrap";
import {useState} from "react";
import {SOPORTE_URL} from "../../../../utils/apiUrls";
import {useNavigate} from "react-router-dom";
import {getCurrentDate} from "../../../../utils/getCurrentDate";
import {useLocalStorage} from "../../../../utils/useLocalStorage";


export const EditFormTicket = (props) => {
    const {ticketData, readOnly} = props
    const [description, setDescription] = useState(ticketData.descripcion);
    const [end_time, setEndTime] = useState(ticketData.fechaDeFinalizacion);
    const [responsible, setResponsible] = useState(ticketData.nombreResponsable);
    const [state, setState] = useState(ticketData.estado);
    const [severity, setSeverity] = useState(ticketData.severidad);
    const [clientName, setClientName] = useState(ticketData.nombreCliente);
    const [cuitClient, setCuitClient] = useState(ticketData.cuit);
    const [title, setTitle] = useState(ticketData.nombre);
    const [validated, setValidated] = useState(false);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [startTime, setStartTime] = useState(ticketData.fechaDeCreacion);
    const navigate = useNavigate();

    const {data: empleados, isPending: esperandoEmpleados} = useLocalStorage("empleados");
    const {data: clientes, isPending: esperandoClientes} = useLocalStorage("clientes");



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
                    headers: {"Content-Type": "application/json"},
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
                                <Form.Control type="text" defaultValue={ticketData.id} name="code" disabled={true}
                                              readOnly={readOnly}
                                              onChange={(event) => {
                                                  setTitle(event.currentTarget.value)
                                              }}/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="description">
                                <Form.Label>Descripción</Form.Label>
                                <Form.Control
                                    readOnly={readOnly}
                                    as={"textarea"}
                                    style={{height: '400px', resize: "none"}}
                                    defaultValue={description}
                                    onChange={(event) => {
                                        setDescription(event.currentTarget.value)
                                    }}
                                />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="responsible">
                                <Form.Label>Responsable</Form.Label>
                                <Form.Control
                                    as={"input"}
                                    list="employers"
                                    value={responsible}
                                    autoComplete={"off"}
                                    onChange={(event) => {
                                        setResponsible(event.currentTarget.value)
                                    }}
                                    />
                                <datalist id={"employers"}>
                                    {
                                        empleados.map((empleado) => {
                                            return <option key={empleado.legajo} >{empleado.nombre + " " + empleado.apellido}</option>
                                        })
                                    }
                                </datalist>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="state">
                                <Form.Label>Estado</Form.Label>
                                <Form.Select
                                    disabled={readOnly || ticketData.estado === "cerrado" }
                                    defaultValue={ticketData.estado}
                                    onChange={(event) => {
                                        setState(event.currentTarget.value)
                                    }}
                                >
                                    <option value="cerrado">Cerrado</option>
                                    <option value="abierto">Abierto</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="severity">
                                <Form.Label>Severidad</Form.Label>
                                <Form.Select readOnly={readOnly}
                                             defaultValue={ticketData.severidad}
                                             onChange={(event) => {
                                                 setSeverity(event.currentTarget.value)
                                                 console.log("Severidad seleccionada: " + severity);
                                             }}>
                                    <option defaultValue="2">Mayor</option>
                                    <option defaultValue="1">Medio</option>
                                    <option defaultValue="0">Baja</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="end_time">
                                <Form.Label>Fecha de vencimiento</Form.Label>
                                <Form.Control
                                    type="date"
                                    name='end_time'
                                    value={end_time}
                                    pattern={"[0-9]{1,2}-[0-9]{1,2}-[0-9]{4}"}
                                    readOnly={readOnly}
                                    defaultValue={getCurrentDate(new Date(ticketData.vencimiento), "/")}
                                    onChange={(event) => {
                                        setEndTime(event.currentTarget.value)
                                        console.log("Fecha de vencimiento cambiada: " + end_time);
                                    }}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="client_id">
                                <Form.Label>Cliente</Form.Label>
                                <Form.Control
                                    as={"input"}
                                    list="clientes"
                                    name="id_client"
                                    defaultValue={clientName}
                                    readOnly={readOnly}
                                    onChange={(event) => {
                                        setClientName(event.currentTarget.value)
                                        clientes.map((cliente) => {
                                            if (cliente.razon_social.includes(event.currentTarget.value)) {
                                                setCuitClient(cliente.cuit)
                                            }
                                        })

                                    }}
                                    autoComplete={"off"}
                                />
                                <datalist id={"clientes"}>
                                    {
                                        clientes.map((cliente) => {
                                            return <option key={cliente.cuit} >{cliente.razon_social}</option>
                                        })
                                    }
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
                                <Form.Control type="text" placeholder="Version" name="title" disabled={true}/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="tasks">
                                <Form.Label>Tareas</Form.Label>
                                <Form.Control type="text" placeholder="Tareas" name="title" disabled={true}/>
                            </Form.Group>

                            {/*<Form.Group className="mb-3" controlId="areas">
                                <Form.Label>Areas</Form.Label>
                                <Form.Control type="text" placeholder="Areas" name="title" disabled={true} />
                            </Form.Group>*/}
                        </Col>
                    </Row>
                    {
                        !readOnly && <div style={{display: 'flex', justifyContent: 'flex-end'}}>
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
                    <hr/>
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