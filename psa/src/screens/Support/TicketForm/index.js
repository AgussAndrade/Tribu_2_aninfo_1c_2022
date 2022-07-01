import {Button, Form} from "react-bootstrap";

export const TicketForm = () => {

    const formInputs = () => {
        return (
            <div className={"col-md-12"}>
                <Form>
                    <div className={"col-md-6"}>
                        <Form.Group className="mb-3" controlId="formTitle">
                            <Form.Label>Titulo</Form.Label>
                            <Form.Control type="text" placeholder="Titulo del ticket" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formDescription">
                            <Form.Label>Descripción</Form.Label>
                            <Form.Control as={"textarea"} style={{ height: '200px' }} placeholder="Descripción del ticket"/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>

                        <Form.Group controlId={"formSeverity"} >
                            <Form.Select>
                                <option value="3">Mayor</option>
                                <option value="2">Medio</option>
                                <option value="1">Baja</option>
                            </Form.Select>
                        </Form.Group>
                    </div>

                    <div className={"col-md-6"}>
                        <Form.Group controlId={"formSeverity"} >
                            <Form.Select>
                                <option value="3">Mayor</option>
                                <option value="2">Medio</option>
                                <option value="1">Baja</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group controlId={"formSeverity"} >
                            <Form.Select>
                                <option value="3">Mayor</option>
                                <option value="2">Medio</option>
                                <option value="1">Baja</option>
                            </Form.Select>
                        </Form.Group>
                    </div>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        )
    }

    return ( formInputs() );
}