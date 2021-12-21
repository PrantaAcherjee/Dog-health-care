import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('/FakeData.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div className='pb-3'>
            <h2>Our Services & Procedures</h2>
            <h4>We love every Pet</h4>
            <Row xs={1} md={2} className="g-4">
                {
                    services.map(service => <Col key={service.id}>
                        <Card>
                            <Card.Img variant="top" src={service.img} />
                            <Card.Body>
                                <Card.Title className="text-success ">{service.name}</Card.Title>
                                <Card.Text>
                                    {service.des}
                                </Card.Text>
                                <h5 className="fw-400">Price: ${service.price}</h5>
                                <Link to={`/detail/${service.id}`}>

                                <button className="w-25 mx-auto bg-warning text-white btn">Explore More</button>
                            </Link>
                            </Card.Body>
                        </Card>
                    </Col>)
                }


            </Row>

        </div >
    );
};

export default Services;