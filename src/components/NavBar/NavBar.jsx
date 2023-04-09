import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';


const NavBar = () => {
    return (
        <div className='container p-2'>
            <Navbar  expand="sm">
                <Navbar.Brand href="#home">CareerMaker</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link href="#link1" className="mx-3">Link 1</Nav.Link>
                        <Nav.Link href="#link2" className="mx-3">Link 2</Nav.Link>
                        <Nav.Link href="#link3" className="mx-3">Link 3</Nav.Link>
                    </Nav>
                    <div className="d-flex">
                        <div className="mr-3">
                            <Button variant="outline-success">Button</Button>
                        </div>
                    </div>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default NavBar;