import React from 'react';
import {  Row, Col } from 'react-bootstrap';
import './JobDetailsBanner.css'; 

const AppliedJobBanner = () => {
    return (
        <div>
            <Row className="justify-content-center align-items-center small-banner">
        <Col md="auto">
          <h2>Applied Jobs</h2>
        </Col>
      </Row>
        </div>
    );
};

export default AppliedJobBanner;