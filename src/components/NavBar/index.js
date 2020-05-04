import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import './navBar.css';
import {
    Link
} from "react-router-dom";

const StudentForm = () => {
    return(
        <Navbar bg="light" variant="light">
            <Navbar.Brand>Coding Challenge</Navbar.Brand>
            <Nav className="mr-auto">
                <Link className="navBarLink" to="/">Page 1</Link>
                <Link className="navBarLink" to="/page2">Page 2</Link>
            </Nav>
        </Navbar>
    )
}

export default StudentForm;