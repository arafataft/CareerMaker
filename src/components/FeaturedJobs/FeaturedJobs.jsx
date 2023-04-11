import React, { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';



const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([])

  useEffect(() => {
    fetch("data1.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, [])
  return (
    <div>
      <div className="py-5 bg-light">
        <div className="container py-5">
          <div className="mb-5 text-center ">
            <h2 >Featured Jobs</h2>
            <p className='text-secondary'>Explore thousands of job opportunities with all the information you need. Its your future</p>
          </div>
          <div className="row">
            {
              jobs.map(job => (<div key={job.id} className="col-md-6 mb-4">
                <Card>
                  <Card.Img className='m-4' style={{ width: 120, height: 40 }} src={job.companyLogo} />
                  <Card.Body >
                    <Card.Title>{job.jobTitle}</Card.Title>
                    <Card.Text className='text-secondary'>
                      {job.companyName}
                    </Card.Text>
                    <div className='d-flex'>
                      <Card.Text>
                        <span className="border rounded text-primary px-3 py-1 mr-2 ">{job.remoteOrOnsite}</span>
                      </Card.Text>
                      <Card.Text>
                        <span className="border rounded text-primary px-3 py-1 ms-2">{job.fulltimeOrParttime}</span>
                      </Card.Text>
                    </div>
                    <div className='d-flex'>
                      <Card.Text>
                        <span className="text-secondary "><Card.Img style={{ width: 20, height: 18 }} src={job.icon} /> {job.location}</span>
                      </Card.Text>
                      <Card.Text>
                      <span className="text-secondary px-3  "><Card.Img style={{ width: 20, height: 18 }} src={job.icon1} /> {job.salary}</span>
                      </Card.Text>
                    </div>
                    <Link to={`/job/${job.id}`}><Button variant="primary">View Details</Button></Link>
                  </Card.Body>
                </Card>
              </div>))
            }
            <div className='text-center'><Button variant="primary">Sea More</Button></div>


          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedJobs;