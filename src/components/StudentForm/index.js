import React, { useState } from 'react';
import { uuid} from 'uuidv4';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

//Redux
import { useDispatch } from 'react-redux';
import { addStudentAction } from '../../actions/studentActions';

const StudentForm = () => {
    const [validated, setValidated] = useState(false);
    
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        event.preventDefault();
        if (form.checkValidity() === false) {
            event.stopPropagation();
        }else {
            let studentsInfo = {
                uuid: uuid(),
                firstName: event.target["firstName"].value,
                lastName: event.target["lastName"].value,
                streetCity: event.target["streetCity"].value,
                phoneNumber: event.target["phoneNumber"].value,
                gpa: event.target["gpa"].value
            }
            const addStudent = (student) => dispatch( addStudentAction(student) );
            addStudent({studentsInfo}).then(()=>{
                document.getElementById("studentForm").reset();
                setValidated(false);
            })
            // props.getStudentsInfo(studentsInfo)
        }

        setValidated(true);
    };

    return(
        <Container>
            <Row className="justify-content-md-center mt-4">
                <Col xs lg="6">
                    <h1 className="text-center">Student details</h1>
                    <Form 
                        noValidate 
                        validated={validated} 
                        onSubmit={handleSubmit}
                        id='studentForm'
                    >
                        <Form.Group>
                            <Form.Label>First Name</Form.Label>
                            <Form.Control required type="text" placeholder="First Name" name="firstName" />
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid first name.
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control required type="text" placeholder="Last Name" name="lastName"/>
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid last name.
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Street Number / Name City</Form.Label>
                            <Form.Control required type="text" placeholder="Street Number / Name City" name="streetCity"/>
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid last street number and city.
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control required type="number" placeholder="Phone Number" name="phoneNumber"/>
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid phone number.
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>GPA</Form.Label>
                            <Form.Control required type="text" placeholder="GPA" name="gpa"/>
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid GPA.
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default StudentForm;
