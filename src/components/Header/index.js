import React from 'react';
import {Navbar,Nav} from 'react-bootstrap'

function Header() 
    {
     return (
         <div>
        <Navbar expand="lg" bg="dark" variant="dark">
        <div className="container">
        <Navbar.Brand href="#home">Karthik Kancharla</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About Me</Nav.Link>
            <Nav.Link href="#resume">Resume</Nav.Link>
            <Nav.Link href="/education">Education</Nav.Link>
            <Nav.Link href="#resume">Skills</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </div>
        </Navbar>
     </div>
     )
     
    }
    export default Header;