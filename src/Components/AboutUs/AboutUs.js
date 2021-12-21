import React from 'react';
import { Card, Carousel } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import './AboutUs.css'
import animalOne from "../../images/animal one.jpg"
import animalTwo from "../../images/animal two.jpg"
import animalThree from "../../images/animal three.jpg"
import cardImg from "../../images/card.jpg"
const AboutUs = () => {
    return (
        <div className='bg-black'>
            {/* slider  */}
            <h2 className='text-white pt-3'>OUR GOAL IS TO SERVER YOUR PET</h2> 
            <div className='row pt-3'>
            <div className="col-md-1"></div>
            <div className='col-md-10'>
            <Carousel>
     <Carousel.Item>
     <img
      className="d-block w-100"
      src= {animalOne}
      alt="First slide"
    />
     <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
        <img
      className="d-block w-100"
      src={animalTwo}
      alt="Second slide"
    />

     <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
     <img
      className="d-block w-100"
      src={animalThree}
      alt="Third slide"
    />

        <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
    </Carousel.Item>
    </Carousel>
    </div>
    <div className="col-md-1"></div>
    </div>

        <div className="row mt-5">
        <div className='col-md-6 px-4'>
        <h2 style={{textAlign:'left',color:'green'}}>OUR STORY</h2> 
        <h6 style={{textAlign:'left',color:'green'}}>WE CARE YOUR PET</h6>
        <br />
            <p style={{textAlign:'left',color:'white'}}>OUR STORY           
            We have been grooming for many years now and we love every part of our job! We provide a very warm and friendly environment for your pets. Our professional team made sure your pet always gets the highest level of care, because we treat all pets as if they were our own! <br />
            <br />
            <button className='bg-success text-white'>READ MORE</button>
            </p>
           
        </div>
        <div className="col-md-2"></div>
        <div className="col-md-4 py-3">
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={cardImg} />
        <Card.Body>
         <Card.Title className='text-info'>Ensure The Best</Card.Title>
        <Card.Text className='text-secondary'>
        Some quick example text to build on the card title and make up the bulk of
        the card's content.
        </Card.Text>
        </Card.Body>
        </Card>
        </div>       
            <Footer></Footer>
        </div >
        </div>
    );
};

export default AboutUs;