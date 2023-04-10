import React from 'react';
import { Card, Button } from 'react-bootstrap';

const JobDetails = () => {
    return (
        <div className="row my-5 py-5 container ">
          <div className="col-md-6 px-5 mx-auto">
            <div>

            </div>
            <p>Phasellus suscipit felis auctor, pellentesque lacus vitae, luctus augue. Aenean vitae mauris non orci feugiat tincidunt. Pellentesque finibus rhoncus velit quis dapibus. Duis eu aliquet ex, at bibendum est. Aliquam erat volutpat. Suspendisse vulputate lorem vitae tellus venenatis commodo. Sed tristique, est eu pretium volutpat, orci augue molestie magna, in interdum arcu velit id quam. </p>
            <p>Donec fringilla congue mauris, quis vestibulum mauris. Pellentesque eget augue libero. Aenean eu tellus ex. Sed consectetur enim non augue lobortis bibendum. Aliquam quis mi euismod, consequat nisi sed, tincidunt mi. Curabitur ullamcorper nunc eu lacus consectetur, ac ultrices lectus elementum. </p>
          </div>
          <div className="col-md-6 ps-5">
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>Job Title</Card.Title>
                <hr />
                <Card.Text>
                  Salary: $80,000 - $100,000 per year
                </Card.Text>
                <Card.Text>
                  Contract Type: Full Time
                </Card.Text>
                <hr />
                <Card.Text>
                  Phone: 
                </Card.Text>
                <Card.Text>
                  Email: 
                </Card.Text>
                
              </Card.Body>
            </Card>
            <Button variant="primary">Apply Now</Button>
          </div>
        </div>
      );
    }

export default JobDetails;