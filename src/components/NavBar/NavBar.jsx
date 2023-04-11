import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';



const NavBar = () => {
    return (
        <div  className="bg-light">
            <Navbar className='container p-2' expand="sm">
                <Navbar.Brand ><Link to="/" className="mx-3 text-black text-decoration-none">CareerMaker</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <Link to="/statistics" className="mx-3 text-decoration-none">Statistics</Link>
                        <Link to='/appliedJobs' className="mx-3 text-decoration-none">Applied Jobs</Link>
                        <Link to='/blog' className="mx-3 text-decoration-none">Blog</Link>
                    </Nav>
                    <div className="d-flex">
                        <div className="mr-3">
                            <Button variant="primary">Start Applying</Button>
                        </div>
                    </div>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default NavBar;