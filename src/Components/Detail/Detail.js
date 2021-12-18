import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router';
import "./Detail.css"
const Detail = () => {
    const { id } = useParams();
    const [service, setService] = useState([]);
    useEffect(() => {
        fetch('/FakeData.json')
            .then(res => res.json())
            .then(data => {
                
                const findServiceData = data.find(service => service.id === id)
                if (findServiceData) {
                    setService(findServiceData);
                }
            })
    }, [])
    
    return (
        <div className='row detail-bg'>
            <div  className='col-md-4'>

            </div>
            <div className='col-md-4 '>
            <Card style={{ width: '25rem'}}>
            <Card.Img variant="top" src={service.img}/>
            <Card.Body>
            <Card.Title>{service.name}</Card.Title>
            <h6>Price: ${service.price}</h6>
            <Card.Text>
              {service.des}
            </Card.Text>
            </Card.Body>
            <button className="bg-warning">Order Now</button>
            </Card>
        </div>
        <div  className='col-md-4'>

        </div>
        </div>
    );
};

export default Detail;