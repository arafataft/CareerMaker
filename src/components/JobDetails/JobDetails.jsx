import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import {
    useLoaderData,
    useParams,
  } from "react-router-dom";
import { addToDb } from '../../Utils/fakeDB';

const JobDetails = () => {
    let {id} = useParams();
    const can=useLoaderData();
    const [cart,setCart]=useState([]);
    
    const found = can.find(obj => {
        return obj.id == id;
        
      });

      const handleAddToCart = (product) => {
        // cart.push(product); '
        let newCart = [];
        // console.log(product);
        //  newCart = [...cart, product];
        // if product doesn't exist in the cart, then set quantity = 1
        // if exist update quantity by 1
        const exists = cart.find(pd => pd.id === product.id);
        if (!exists) {
            // product.quantity = 1;
            newCart = [...cart, product]
        }
        else {
            // exists.quantity = exists.quantity + 1;
            const remaining = cart.filter(pd => pd.id !== product.id);
            newCart = [...remaining, exists];
        }

        setCart(newCart);
        addToDb(product.id);
    }




      // console.log(found);
    return (
        <div className="row my-5 py-5 container ">
          <div className="col-md-6 px-5 mx-auto">
            <div>
                <h1>{id}</h1>
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
            <Button onClick={()=>handleAddToCart(found)} variant="primary">Apply Now</Button>
          </div>
        </div>
      );
    }

export default JobDetails;