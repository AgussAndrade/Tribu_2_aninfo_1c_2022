import {Button, Col, Container, Form, Row, Alert} from "react-bootstrap";
import {useState} from "react";
import {SOPORTE_URL} from "../../../../utils/apiUrls";
import {useNavigate} from "react-router-dom";
import {getCurrentDate} from "../../../../utils/getCurrentDate";
import {useLocalStorage} from "../../../../utils/useLocalStorage";
import {isString} from "formik";


export const EditFormTicket = (props) => {
    const {ticketData, readOnly, localStorageData} = props
    const [description, setDescription] = useState(ticketData.descripcion);
    const [end_time, setEndTime] = useState(ticketData.fechaDeFinalizacion);
    const [responsible, setResponsible] = useState(ticketData.nombreResponsable);
    const [legajoResponsable, setLegajoResponsable] = useState(ticketData.legajoResponsable);
    const [state, setState] = useState(ticketData.estado);
    const [severity, setSeverity] = useState(ticketData.severidad);
    const [clientName, setClientName] = useState(ticketData.nombreCliente);
    const [cuitClient, setCuitClient] = useState(ticketData.cuit);
    const [title, setTitle] = useState(ticketData.nombre);
    const [validated, setValidated] = useState(false);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [startTime, setStartTime] = useState(ticketData.fechaDeCreacion);
    const navigate = useNavigate();

    function objToQueryString(obj) {
        const keyValuePairs = [];
        for (const key in obj) {
            keyValuePairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
        }
        return keyValuePairs.join('&');
    }

    const handleSubmit = (event) => {
        event.preventDefault();
            const severidades = {
                "Mayor": 2,
                "Medio": 1,
                "Baja": 0,
            }
            const body = {
                "descripcion": description,
                "fechaVencimiento": end_time,
                "fechaInicial": startTime,
                "cuit": cuitClient,
                "estado": state,
                "severidad": isString(severity) ? severidades[severity] : severity,
            }


            const config = {
                config: {
                    headers: {"Content-Type": "application/json"},
                    method: "PUT"
                },
                url: SOPORTE_URL + "soporte/ticket/"+ticketData.id + "?"+ objToQueryString(body)
            }
            fetch(config.url, config.config)
                .then((res) => res.json())
                .then((result) => {
                    setShowSuccessMessage(true)
                })
                .catch((error) => console.log(error))
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
                                    required
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
                                    readOnly={true}
                                    as={"input"}
                                    list="employers"
                                    defaultValue={responsible}
                                    autoComplete={"off"}
                                    onChange={(event) => {
                                        setResponsible(event.currentTarget.value)
                                        localStorageData.empleados.map((empleado) => {
                                            if (empleado.nombre.includes(event.currentTarget.value.split(' ')[0])) {
                                                setLegajoResponsable(empleado.legajo)
                                            }
                                        })

                                    }}
                                    />
                                <datalist id={"employers"}>
                                    {
                                        localStorageData.empleados !== null && localStorageData.empleados.map((empleado) => {
                                            return <option key={empleado.legajo} >{empleado.nombre + " " + empleado.apellido}</option>
                                        })
                                    }
                                </datalist>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="state">
                                <Form.Label>Estado</Form.Label>
                                <Form.Select
                                    required
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
                                <Form.Select
                                    required
                                    disabled={readOnly}
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
                                    required
                                    type="date"
                                    name='end_time'
                                    readOnly={readOnly}
                                    defaultValue={ticketData.fechaDeFinalizacion}
                                    onChange={(event) => {
                                        setEndTime(event.currentTarget.value)
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
                                    readOnly={readOnly}
                                    onChange={(event) => {
                                        setClientName(event.currentTarget.value)
                                        localStorageData.clientes.map((cliente) => {
                                            if (cliente.razon_social.includes(event.currentTarget.value)) {
                                                setCuitClient(cliente.cuit)
                                            }
                                        })

                                    }}
                                    autoComplete={"off"}
                                />
                                <datalist id={"clientes"}>
                                    {

                                        localStorageData.clientes !== null && localStorageData.clientes.map((cliente) => {
                                            return <option key={cliente.cuit} >{cliente.razon_social}</option>
                                        })
                                    }
                                </datalist>
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
                            Cerrar
                        </Button>
                    </div>
                </Alert>
            </Form>
        )
    }

    return (formInputs());
}