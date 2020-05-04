import React from 'react';
import { Container, Table } from 'react-bootstrap';
import {
    Link, useHistory
} from "react-router-dom";

//Redux
import { useSelector, useDispatch } from 'react-redux';
import { deleteStudentAction } from '../../actions/studentActions';

const StudentTable = (props) => {
    const dispatch = useDispatch();
    const history= useHistory();

    let students = useSelector( state => state.student.students)

    const deleteStudentDispatch = (deleteInfo) => dispatch( deleteStudentAction(deleteInfo) );

    const deleteStudent = (uuid) => {
        history.push('/page2')
        deleteStudentDispatch({uuid, students})
    }

    return(
        <Container>
            <Table striped bordered hover className="mt-4">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Phone Number</th>
                        <th>Street City</th>
                        <th>GPA</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {students?.map((element) => (
                        <tr
                            key = {element.uuid}
                        >
                            <td>
                                <Link to={"/page3/"+element.uuid}> 
                                    {element.firstName}
                                </Link>
                            </td>
                            <td> 
                                {element.lastName}
                            </td>
                            <td> 
                                {element.streetCity}
                            </td>
                            <td> 
                                {element.phoneNumber}
                            </td>
                            <td> 
                                {element.gpa}
                            </td>
                            <td>
                                <button 
                                    type="button" 
                                    className="close" 
                                    aria-label="Close"
                                    onClick={() => {deleteStudent(element.uuid)}}
                                >
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    )
}

export default StudentTable;