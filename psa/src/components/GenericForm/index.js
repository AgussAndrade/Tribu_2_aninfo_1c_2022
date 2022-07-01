import Form from 'react-bootstrap/Form';

export const GenericForm = ({children}) => {
    return (
        <Form>
            {children}
        </Form>
    );
}