import React from 'react';
import "./Header.css"
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/UseAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <div className="row col-sm-12 d-flex justify-content-between align-items-center mx-auto BGC py-3">

               <div className="col-md-6">
                    <div className="fs-3 "><i class="fas fa-stethoscope"> Ensure the best Care</i>
                    </div>
                </div>
                <div className="header fs-4 col-md-6">
                    <NavLink to="/home">Home</NavLink>
                    <NavLink to="/services">Services</NavLink>
                    <NavLink to="/about">About Us</NavLink>
                    <NavLink to="faq">FAQ</NavLink>
                    {
                        user?.email?
                       <NavLink to="" onClick={logOut}>Log Out</NavLink>
                        :
                        <NavLink to="/login">Log in</NavLink> 
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;