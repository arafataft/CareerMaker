import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';

function JobCategory() {

    const [categories,setCategory]=useState([]);


    useEffect(()=>{
        fetch("data.json")
        .then((res)=>res.json())
        .then((data)=>setCategory(data));
    },[])


  return (
    <div className="py-5 bg-light">
      <div className="container text-center py-5">
        <div className="mb-5">
        <h2 >Job Category List</h2>
        <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
        </div>
        <div className="row">
          {
            categories.map(category=>(<div key={category.id} className="col-md-3 mb-4">
            <Card>
              <Card.Img className='m-4' style={{ width: 40, height: 40 }} src={category.img} />
              <Card.Body >
                <Card.Title>{category.title}</Card.Title>
                <Card.Text>
                  {category.jobs}
                </Card.Text>
              </Card.Body>
            </Card>
          </div>))
          }


         
        </div>
      </div>
    </div>
  );
}

export default JobCategory;
