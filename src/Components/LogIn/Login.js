import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <h2>Please Log In</h2>
            <form>
                <input type="email" placeholder="Enter your Email" />
                <br />
                <input type="password" name="password" placeholder="Enter your password" />
                <br />
                <br />
                <button type="submit">Log in</button>
            </form>
            <br />
            <button>Google Log in</button>
            <br />
            <br />
            <p>Are You New User?</p>
            <Link to="/register">Please Register</Link>
        </div>
    );
};

export default Login;