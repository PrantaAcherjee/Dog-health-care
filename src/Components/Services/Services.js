import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./FakeData.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div>
            <h2>Our Services & Procedures</h2>
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
                            </Card.Body>
                            <Link to={`/detail/${service.id}`}>

                                <button className="w-25 mx-auto bg-warning text-white btn">Get More Info</button>
                            </Link>
                            <p className="fw-400">Price: ${service.price}</p>
                        </Card>
                    </Col>)
                }


            </Row>

        </div >
    );
};

export default Services;