import React from 'react';
import "./Header.css"
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/UseAuth';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        <Navbar.Brand><div className="fs-3 "><i class="fas fa-stethoscope"><span style={{color:'green'}}> ANIMAL CARE</span></i>
        </div></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
         <Nav className="me-auto">
        </Nav>
        <Nav className='header'>
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/about">About Us</NavLink>
        <NavLink to="faq">FAQ</NavLink>
        {
         user?.email?
         <NavLink to="" onClick={logOut}>Log Out</  NavLink>
        :
        <NavLink to="/login">Log in</NavLink> 
         }
        </Nav>
        </Navbar.Collapse>
         </Container>
        </Navbar>
     
        </div>
    );
};

export default Header;