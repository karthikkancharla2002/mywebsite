import React from 'react';
import {Navbar,Nav} from 'react-bootstrap';
import EducationPage from '../pages/Education';

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
            <Nav.Link href="#/">Home</Nav.Link>
            <Nav.Link href="#/about">About Me</Nav.Link>
            <Nav.Link href="https://drive.google.com/file/d/1hRV98JtopqQmRxdi6AxcYGeqkru9rXmO/view?usp=sharing">Resume</Nav.Link>
            <Nav.Link href="#/education">Education</Nav.Link>
            <Nav.Link href="#/skills">Skills</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </div>
        </Navbar>
     </div>
     )
     
    }
    export default Header;