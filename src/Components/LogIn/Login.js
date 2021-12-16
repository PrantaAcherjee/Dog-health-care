import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/UseAuth';
const Login = () => {
    const { signInUsingGoogle, logInWithEmailPassword,handleEmailChange,handlePasswordChange } = useAuth();
    return (
        <div className="row">
            <div className="col-md-4">
                <div>
                    <img className="img-fluid" src="https://as2.ftcdn.net/v2/jpg/03/86/51/03/500_F_386510351_03Qk3je4FGnVLo4vXRdOpoDWfZjtmajd.jpg" alt="" />
                </div>
            </div>
            <div className="col-md-8">
                <br /><br /><br />
                <h2 className="text-primary">Please Log In</h2>
         <form onSubmit={logInWithEmailPassword}>
                    <input className="my-2" type="email" placeholder="Enter your Email" required
                    onChange={handleEmailChange}
                     />
                    <br />
                    <input type="password" name="password" placeholder="Enter your password" required 
                    onChange={handlePasswordChange}/>
                    <br />
                    <br />
                    <button className="bg-success text-white px-2 rounded-pill " 
                    type="submit">Log in</button>
        </form>
                <br />
                <button onClick={signInUsingGoogle} className="bg-warning rounded-pill">Google Log in</button>
                <br />
                <br />
                <p className="fw-bold text-danger">Are You New User?</p>
                <Link to="/register">Please Register</Link>
            </div>

        </div>
    );
};

export default Login;