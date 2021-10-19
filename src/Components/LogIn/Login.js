import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/UseAuth';
const Login = () => {
    const { signInUsingGoogle, logInWithEmailPassword } = useAuth()
    return (
        <div>
            <h2 className="text-primary">Please Log In</h2>
            <form>
                <input type="email" placeholder="Enter your Email" required />
                <br />
                <input type="password" name="password" placeholder="Enter your password" required />
                <br />
                <br />
                <button className="bg-warning " onSubmit={logInWithEmailPassword} type="submit">Log in</button>
            </form>
            <br />
            <button className="bg-warning" onClick={signInUsingGoogle}>Google Log in</button>
            <br />
            <br />
            <p>Are You New User?</p>
            <Link to="/register">Please Register</Link>
        </div>
    );
};

export default Login;