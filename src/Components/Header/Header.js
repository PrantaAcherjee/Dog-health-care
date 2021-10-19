import React from 'react';
import "./Header.css"
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/UseAuth';


const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <div className="row d-flex justify-content-between align-items-center mx-auto BGC py-3">

                <div className="col-md-6">
                    <div className="fs-4 "><i class="fas fa-stethoscope"> Ensure the best Care</i>
                    </div>
                </div>
                <div className="header fs-4 col-md-6">
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
        </div>
    );
};

export default Header;