import React from 'react';
import {  Row, Col } from 'react-bootstrap';
import './JobDetailsBanner.css'; 

const JobDetailsBanner = () => {
  return (
    <div>
      <Row className="justify-content-center align-items-center small-banner">
        <Col md="auto">
          <h2>Job Details</h2>
        </Col>
      </Row>
    </div>
  );
};




export default JobDetailsBanner;