import React, { useEffect, useState } from "react";
import { Card, Button, DropdownButton, Dropdown } from "react-bootstrap";
import { getData } from '../../Utils/fakeDB';
import {
    useLoaderData,
    Link,
} from "react-router-dom";
import './AppliedJobs.css';

const AppliedJobs = () => {
    const [appliedJob, setAppliedJob] = useState([]);
    const [filteredJobs, setFilteredJobs] = useState([]);

    const savedCart = getData();
    const AllJobs = useLoaderData();

    useEffect(() => {
        const updatedAppliedJob = [];

        for (const id in savedCart) {
            const foundProduct = AllJobs.find(product => product.id == id);

            if (foundProduct) {
                updatedAppliedJob.push(foundProduct);
            }
        }

        setAppliedJob(updatedAppliedJob);
        setFilteredJobs(updatedAppliedJob);
    }, []);

    const filterOnsite = () => {
        const OnsiteFitter = appliedJob.filter(item => item.remoteOrOnsite === 'Onsite');
        setFilteredJobs(OnsiteFitter);
    }

    const filterRemote = () => {
        const RemoteFitter = appliedJob.filter(item => item.remoteOrOnsite === 'Remote');
        setFilteredJobs(RemoteFitter);
    }


    return (
        <div className="container mt-5 pt-5">
            <div className="App">
                <DropdownButton title="Filter" className="menu-dropdown mr-5 mt-2">
                    <Dropdown.Item ><Button onClick={() => filterRemote()}>Remote</Button></Dropdown.Item>
                    <Dropdown.Item ><Button onClick={() => filterOnsite()}>Onsite</Button></Dropdown.Item>
                </DropdownButton>
            </div>
            {
                filteredJobs.map((pp) =>
                    <Card key={pp.id} className="my-4">
                        <div className="d-flex">
                            <Card.Img
                                variant="left"
                                src={pp.companyLogo}
                                style={{ width: "150px" }}
                            />
                            <div className="flex-grow-1">
                                <Card.Body>
                                    <Card.Title>{pp.jobTitle}</Card.Title>
                                    <Card.Text>
                                        <small>{pp.companyName}</small>
                                    </Card.Text>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div>
                                            <div className="d-flex">
                                                <div><span className="border rounded text-primary px-3 py-1 mr-2 ">{pp.remoteOrOnsite}</span></div>
                                                <div><span className="border rounded text-primary px-3 py-1 ms-2">{pp.fulltimeOrParttime}</span></div>
                                            </div>
                                            <div className='d-flex pt-2'>
                                                <Card.Text>
                                                    <span className="text-secondary "><Card.Img style={{ width: 20, height: 18 }} src={pp.icon} /> {pp.location}</span>
                                                </Card.Text>
                                                <Card.Text>
                                                    <span className="text-secondary px-3  "><Card.Img style={{ width: 20, height: 18 }} src={pp.icon1} /> {pp.salary}</span>
                                                </Card.Text>
                                            </div>
                                        </div>

                                        <Link to={`/job/${pp.id}`}><Button variant="primary">View Details</Button></Link>
                                    </div>
                                </Card.Body>
                            </div>
                        </div>
                    </Card>
                )
            }


        </div>
    );
};

export default AppliedJobs;
