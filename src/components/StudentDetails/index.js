import React from 'react';
import { Container, Card } from 'react-bootstrap';
import { useParams } from "react-router-dom";
import imageProfile from '../../logo.svg';

//redux
import { useSelector } from 'react-redux';

const StudentDetails = () => {

    //get id for the student
    let params = useParams();

    const students = useSelector( state => state.student.students)

    const getStudent = (params, students) => {
        const studentDetails = students.find( element => element.uuid === params.id );

        return studentDetails;
    }

    const studentDetails = getStudent(params, students)
    return(
        <Container style={{ width: '25rem' }}>
            <Card  className="mt-4">
                <Card.Img variant="top" src={imageProfile} />
                <hr className="style1"></hr>
                <Card.Body>
                    <Card.Text>
                    <strong>First Name: </strong> {' '+ studentDetails?.firstName}
                    </Card.Text>
                    <Card.Text>
                    <strong>Last Name: </strong>  {' '+ studentDetails?.lastName}
                    </Card.Text>
                    <Card.Text>
                    <strong>Street and Name City: </strong>  {' '+ studentDetails?.streetCity}
                    </Card.Text>
                    <Card.Text>
                    <strong>Phome Number: </strong>  {' '+ studentDetails?.phoneNumber}
                    </Card.Text>
                    <Card.Text>
                    <strong>GPA: </strong>  {' '+ studentDetails?.gpa}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default StudentDetails;