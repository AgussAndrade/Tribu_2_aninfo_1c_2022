import {Modal} from "react-bootstrap";
import "./style.css"

export const GenericModal = (props) => {
    return (
        <Modal
            {...props}
            size={props.size}
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {props.title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {props.form}
            </Modal.Body>
        </Modal>
    );
}