import React from "react";
import { Card, Button } from "react-bootstrap";

const AppliedJobs = () => {
  return (
    <div className="container">
      <h2>Applied Jobs</h2>
      <Card className="my-4">
        <div className="d-flex">
          <Card.Img
            variant="left"
            src="https://via.placeholder.com/150"
            style={{ width: "150px" }}
          />
          <div className="flex-grow-1">
            <Card.Body>
              <Card.Title>Job Title 1</Card.Title>
              <Card.Text>
                <small>Description</small>
              </Card.Text>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <div>Location: New York</div>
                  <div>Salary: $100k - $120k</div>
                </div>
                <Button variant="primary">View Details</Button>
              </div>
            </Card.Body>
          </div>
        </div>
      </Card>
     
    </div>
  );
};

export default AppliedJobs;
