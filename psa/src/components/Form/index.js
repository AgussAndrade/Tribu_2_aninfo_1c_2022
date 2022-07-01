import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export const GenericForm = () => {
    return (
        <Form>
            <Form.Group className="mb-3" controlId="formTitle">
                <Form.Label>Titulo</Form.Label>
                <Form.Control type="text" placeholder="Titulo del ticket" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formDescription">
                <Form.Label>Descripción</Form.Label>
                <Form.Control as={"textarea"} style={{ height: '200px' }} placeholder="Descripción del ticket" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
}