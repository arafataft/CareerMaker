import React from "react";
import { Card, Button } from "react-bootstrap";
import { getShoppingCart } from '../../Utils/fakeDB';
import {
    useLoaderData,
    Link,
  } from "react-router-dom";

const AppliedJobs = () => {

    const cana=useLoaderData();
      
        const savedCart = getShoppingCart()
        const initialCart = []
        for (const id in savedCart) {
          const foundProduct = cana.find(product => product.id == id)
          if (foundProduct) {
            
            initialCart.push(foundProduct)
          }
        }
      
      
      
      console.log(initialCart);




  return (
    <div className="container">
      <h2>Applied Jobs</h2>
      {
        initialCart.map((pp)=> 
        <Card key={pp.id} className="my-4">
        <div className="d-flex">
          <Card.Img
            variant="left"
            src="https://via.placeholder.com/150"
            style={{ width: "150px" }}
          />
          <div className="flex-grow-1">
            <Card.Body>
              <Card.Title>{pp.company}</Card.Title>
              <Card.Text>
                <small>Description</small>
              </Card.Text>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <div>Location: New York</div>
                  <div>Salary: $100k - $120k</div>
                </div>
                <Link to={`/${pp.id}`}><Button variant="primary">View Details</Button></Link>
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
