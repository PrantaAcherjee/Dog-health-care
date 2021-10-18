import React from 'react';
import "./Header.css"
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/UseAuth';


const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div className="row">
            <div className="col-md-6"></div>
            <div className="header col-md-6">
                <Link to="/home">Home</Link>
                <Link to="/services">Services</Link>
                <Link to="/about">About us</Link>
                <Link to="faq">FAQ</Link>
                <Link to="/login">Log in</Link>
                {user?.email &&
                    <button className="btn" onClick={logOut}>Log out</button>
                }
            </div>
        </div>
    );
};

export default Header;