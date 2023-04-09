import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

function Banner() {
  return (
    <div className="bg-light">
      <Container className="py-5">
        <Row>
          
          <Col md={6} className="d-flex align-items-center">
            <div>
              <h2 className="mb-3">One Step Closer To Your Dream Job</h2>
              <p className="mb-4">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
              <Button variant="primary">Get Started</Button>
            </div>
          </Col>

          <Col md={6} className="d-flex align-items-center">
            <img src="p.png" alt="Person" className="img-fluid  mx-auto d-block" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Banner;
