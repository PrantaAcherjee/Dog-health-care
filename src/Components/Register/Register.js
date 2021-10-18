import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <h2>Please Register</h2>
            <form>
                <input type="email" placeholder="Enter your Email" />
                <br />
                <input type="password" name="password" placeholder="Enter your password" />
                <br />
                <br />
                <button type="submit">Register</button>
            </form>
            <br />
            <button>Google Register</button>
            <br />
            <br />
            <p>Alredy Registered?</p>
            <Link to="/login">Please Log In</Link>
        </div>
    );
};

export default Register;