import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/UseAuth';

const Register = () => {
    const { registerWithEmailPassword, handleEmailChange, handlePasswordChange } = useAuth();
    return (
        <div>
            <h2 className="text-primary">Please Register</h2>
            <form onSubmit={registerWithEmailPassword}>
                <input onChange={handleEmailChange} type="email" placeholder="Enter your Email" required />
                <br />
                <input onChange={handlePasswordChange} type="password" name="password" placeholder="Enter your password" required />
                <br />
                <br />
                <button className="bg-warning " type="submit">Register</button>
            </form>
            <br />
            <button className="bg-warning ">Google Register</button>
            <br />
            <br />
            <p>Alredy Registered?</p>
            <Link to="/login">Please Log In</Link>
        </div>
    );
};

export default Register;