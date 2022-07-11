import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useState } from "react";
import React from 'react';
import Select from 'react-select'

export const AssignTaskTicket = (props) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [severity, setSeverity] = useState("");
    const [responsible, setResponsible] = useState("");
    const [clientId, setClientId] = useState("");
    //const { closeModal } = props;

    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
    ];

    const handleChange = selectedOption => {
        console.log(`Option selected:`, selectedOption);
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        //closeModal(false)
    }

    const formInputs = () => {
        return (
            <Form onSubmit={handleSubmit}>
                <Container>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3 crearTareaContainer" controlId="title">
                                <Form.Label>Buscar tarea</Form.Label>
                                <Select options={options} setValue isMulti  closeMenuOnSelect={false} onChange={handleChange}
                                />
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