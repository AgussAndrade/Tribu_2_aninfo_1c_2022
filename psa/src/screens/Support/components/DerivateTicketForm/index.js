import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useState } from "react";
import { CreateTaskForm } from "../CreateTaskForm";
import { GenericModal } from "../GenericModal";
import {AssignTaskTicket} from "../AssignTaskTicketForm/AssignTaskTicket";
import {useLocalStorage} from "../../../../utils/useLocalStorage";

export const DerivateTicketForm = ({idTicket}) => {
    const [title, setTitle] = useState("");
    const [tareas, setTareas] = useState([])
    const [modalShow, setModalShow] = useState(false)
    const [form, setForm] = useState("")
    const {data: proyectos, isPending: esperandoProyectos} = useLocalStorage("proyectos");
    const [idProyecto, setIdProyecto] = useState(-1);

    const formInputs = () => {
        return (

            <Form>
                <Container>
                    <GenericModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                        form={form}
                        title={title}
                        size={"lg"}
                    />
                    <Row>
                        <Col>
                            <Form.Group className="mb-3" controlId="idProyecto" >
                                <Form.Label>Seleccione el proyecto correspondiente</Form.Label>
                                {
                                    !esperandoProyectos && <Form.Select
                                                            defaultValue={idProyecto}
                                                            onChange={(event) => {
                                                                setIdProyecto(parseInt(event.currentTarget.value))
                                                                proyectos.map((proyecto) => {
                                                                    if (proyecto.id === parseInt(event.currentTarget.value)) {
                                                                        setTareas(proyecto.tareas);
                                                                    }
                                                                })
                                                            }}
                                                        >
                                                        <option value={-1} > Seleccione un proyecto </option>
                                                            {
                                                                proyectos !== null && proyectos.map((proyecto) => {
                                                                    return <option key={proyecto.id} value={proyecto.id} > {proyecto.nombre} </option>
                                                                })
                                                            }
                                                        </Form.Select>
                                }
                                { esperandoProyectos && "Buscando los proyectos"}
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="title">
                                <Form.Label>Seleccione una o más tareas para asignar al ticket</Form.Label>
                                <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                                    <div>
                                        <Button variant= {idProyecto === -1 ? "secondary": "primary"} disabled={idProyecto === -1} onClick={() => {
                                            setForm(<AssignTaskTicket closeModal={setModalShow} tareas = {tareas} idProyecto={idProyecto} idTicket = {idTicket} />)
                                            setTitle("Seleccionar tareas")
                                            setModalShow(true);
                                        }} >
                                            Seleccionar tareas
                                        </Button>
                                    </div>
                                    <div style={{ marginLeft: "10px" }}>
                                        <Button variant= {idProyecto === -1 ? "secondary": "primary"} disabled={idProyecto === -1} onClick={() => {
                                            setForm(<CreateTaskForm closeModal={setModalShow} idProyecto = {idProyecto} idTicket = {idTicket}/>);
                                            setTitle("Crear tarea");
                                            setModalShow(true);
                                        }}>
                                            Crear tarea
                                        </Button>
                                    </div>
                                </div>
                            </Form.Group>
                        </Col>
                    </Row>
                </Container>
            </Form>
        )
    }

    return (formInputs());
}