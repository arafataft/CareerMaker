import React, { useEffect, useState } from 'react';
import { Card, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';


const FeaturedJobs = () => {
    const [jobs,setJobs]=useState([])

    useEffect(()=>{
        fetch("data1.json")
        .then((res)=>res.json())
        .then((data)=>setJobs(data));
    },[])
    return (
        <div>
            <div className="py-5 bg-light">
      <div className="container py-5">
        <div className="mb-5 text-center">
        <h2 >Featured Jobs</h2>
        <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
        </div>
        <div className="row">
          {
            jobs.map(job=>(<div key={job.id} className="col-md-6 mb-4">
            <Card>
              <Card.Img className='m-4' style={{ width: 200, height: 60 }} src={'https://picsum.photos/500/500?random=2'} />
              <Card.Body >
                <Card.Title>{job.position}</Card.Title>
                <Card.Text>
                  {job.company}
                </Card.Text>
                <Link to={`/${job.id}`}><Button variant="primary">View Details</Button></Link>
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