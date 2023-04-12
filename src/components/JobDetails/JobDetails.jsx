import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import {
    useLoaderData,
    useParams,
  } from "react-router-dom";
import { addToDb } from '../../Utils/fakeDB';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const JobDetails = () => {
    let {id} = useParams();
    const jobDetails=useLoaderData();
    const [cart,setCart]=useState([]);
    
    const singleJob = jobDetails.find(job => {
        return job.id == id;
        
      });

      const notify = () => toast("Already Applied!");

      const handleAddToCart = (jobs) => {
        let newJob = [];

        const exists = cart.find(pd => pd.id === jobs.id);
        if (!exists) {
            newJob = [...cart, jobs]
        }
        else {
            notify();
            return;
        }

        setCart(newJob);
        addToDb(jobs.id);
    }
    // console.log(singleJob)




      // console.log(found);
    return (
        <div className="row my-5 py-5 container ">
          <div className="col-md-6 px-5 mx-auto">
            
            <p><span className='fw-bolder'>Job Description:</span> <span className='text-secondary'>{singleJob.jobDescription}</span> </p>
            <p><span className='fw-bolder'>Job Responsibility:</span> <span className='text-secondary'>{singleJob.jobResponsibility}</span>  </p>
            <p className='fw-bolder'>Educational Requirements: </p>
            <p className='text-secondary'>{singleJob.educationalRequirements} </p>
            <p className='fw-bolder'>Experiences: </p>
            <p className='text-secondary'>{singleJob.experiences} </p>
          </div>
          <div className="col-md-6 ps-5">
            <Card className="mb-4 bg-light bg-gradient">
              <Card.Body>
                <Card.Title>Job Details</Card.Title>
                <hr />
                <Card.Text>
                <span className="text-secondary "><Card.Img style={{ width: 20, height: 20 }} src={singleJob.icon} />Salary: {singleJob.salary}</span>
                </Card.Text>
                <Card.Text>
                <span className="text-secondary "><Card.Img style={{ width: 20, height: 20 }} src={singleJob.icon1} /> {singleJob.jobTitle}</span>
                </Card.Text>
                <Card.Text>
                  Contact Information:
                </Card.Text>
                <hr />
                <Card.Text>
                <span className="text-secondary "><Card.Img style={{ width: 20, height: 20 }} src={singleJob.icon1} /> {singleJob.contactInformation.phone}</span>
                </Card.Text>
                <Card.Text>
                <span className="text-secondary "><Card.Img style={{ width: 20, height: 20 }} src={singleJob.icon1} /> {singleJob.contactInformation.email}</span>
                </Card.Text>
                
              </Card.Body>
            </Card>
            <Button onClick={()=>handleAddToCart(singleJob)} variant="primary">Apply Now</Button>
          </div>
        </div>
      );
    }

export default JobDetails;