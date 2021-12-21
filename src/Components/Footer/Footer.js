import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
    faFacebookSquare,
    faInstagramSquare,
    faTwitterSquare,
    faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
    faPhoneVolume,
    faMapMarkedAlt,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    return (
        <div>
            {/* footer section started  */}

            <div className="footer-container">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="left-container text-start">
                                <h1>ANIMAL CARE</h1>
                                <div className="icons-container d-flex text-center ">
                                    <div className="icon">
                                        <FontAwesomeIcon icon={faInstagramSquare} />
                                    </div>
                                    <div className="icon">
                                        <FontAwesomeIcon icon={faTwitterSquare} />
                                    </div>
                                    <div className="icon">
                                        <FontAwesomeIcon icon={faYoutube} />
                                    </div>
                                    <div className="icon">
                                        <FontAwesomeIcon icon={faFacebookSquare} />
                                    </div>
                                </div>
                                <p className="mt-4 ">
                                    <small>
                                        Eiusmod qui pig veniam nostrud. Chicken mollit flank ground round est short loin ad do bacon velit bresaola excepteur eu. Doner turducken aute, ut lorem alcatra pork belly capicola short ribs meatball. Excepteur quis nostrud, et dolor laborum pig bresaola corned beef officia.


                                    </small>
                                </p>

                                <p className="mt-5">
                                 COPYRIGHT <span style={{color:'green'}}>ANIMAL CARE</span> <small> © All RIGHT RESERVED.</small>
                                </p>
                            </div>
                        </div>
                        
                        <div className="col-md-3 pb-2">
                        <h4>OUICK MENU</h4>
                        <div className="m-4">
                        <h6 className="my-3">LOGIN</h6>
                        <h6 className="my-3"> HOME</h6>
                        <h6 className="my-3"> SERVICE</h6>
                        <h6 className="my-3"> REGISTER</h6>
                        </div>
                        </div>
                        <div className="col-md-4">
                            <div className="right-footer-container">
                                <h3>Get your Service.</h3>
                                <input
                                    className="footer-input"
                                    type="text"
                                    placeholder="Let's serve your pets !!!"
                                />
                                <div className="phone d-flex align-items-center justify-content-center mt-4">
                                    <div className="foter-phone-icon">
                                        <FontAwesomeIcon icon={faPhoneVolume} />
                                    </div>
                                    <div>
                                        <h5>++2 33 343 567 650</h5>
                                    </div>
                                </div>
                                <div className="map d-flex align-items-center justify-content-center">
                                    <div className="foter-phone-icon">
                                        <FontAwesomeIcon icon={faMapMarkedAlt} />
                                    </div>
                                    <div>
                                        <p>

                                            95 Faubourg Saint Honore
                                            <br />
                                            Ile-de-France Paris-75019
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
