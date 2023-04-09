import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';


const NavBar = () => {
    return (
        <div  className="bg-light">
            <Navbar className='container p-2' expand="sm">
                <Navbar.Brand href="#home">CareerMaker</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link href="#link1" className="mx-3">Statistics</Nav.Link>
                        <Nav.Link href="#link2" className="mx-3">Applied Jobs</Nav.Link>
                        <Nav.Link href="#link3" className="mx-3">Blog</Nav.Link>
                    </Nav>
                    <div className="d-flex">
                        <div className="mr-3">
                            <Button variant="outline-success">Star Applying</Button>
                        </div>
                    </div>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default NavBar;