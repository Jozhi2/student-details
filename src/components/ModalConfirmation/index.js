import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const ModalConfirmation = (props) => {
    return(
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            animation={false}
            >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                Student Saved
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>
                The student was saved successfully
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Ok</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalConfirmation;