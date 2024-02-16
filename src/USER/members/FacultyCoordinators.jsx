import React, { useEffect } from 'react';
import './member.css';
import VanillaTilt from './Vanillatilt.js'; // Import the default export from VanillaTilt.js
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faYoutube, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const FacultyCoordinators = () => {
    // useEffect(() => {
    //     VanillaTilt.init(document.querySelectorAll(".card4545"), {
    //         max: 11,
    //         speed: 1200
    //     });
    // }, []);

    return (
        <div>

            <div className="container1">
                <h2 className='teamheading' style={{ textAlign: 'center', }}>Faculty Coordinators</h2>
                <div className="cont">
                    <div className="card4545 card1">
                        <h3>Lovish Garg</h3>
                        <h4>Convenor</h4>
                        <span>
                            <img src="https://res.cloudinary.com/dijzvijky/image/upload/v1676977602/core_members/lovish_garg_e2rvqt.jpg" alt="" />
                        </span>
                        <div className="content">
                            <h2>01</h2>
                            <div>
                                <a href="https://www.instagram.com/" target="_blank">
                                    <FontAwesomeIcon icon={faInstagram} size="2x" style={{ color: 'black' }} /></a>
                                <a href="https://www.linkedin.com/home" target="_blank">
                                    <FontAwesomeIcon icon={faLinkedinIn} size="2x" style={{ color: 'black' }} />
                                </a>
                                <a href="https://github.com/" target="_blank">
                                    <FontAwesomeIcon icon={faFacebook} size="2x" style={{ color: 'black' }} />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="card4545 card1">
                        <h3>Lovish Garg</h3>
                        <h4>Convenor</h4>
                        <span>
                            <img src="https://res.cloudinary.com/dijzvijky/image/upload/v1676977602/core_members/lovish_garg_e2rvqt.jpg" alt="" />
                        </span>
                        <div className="content">
                            <h2>01</h2>
                            <div>
                                <a href="https://www.instagram.com/" target="_blank">
                                    <FontAwesomeIcon icon={faInstagram} size="2x" style={{ color: 'black' }} /></a>
                                <a href="https://www.linkedin.com/home" target="_blank">
                                    <FontAwesomeIcon icon={faLinkedinIn} size="2x" style={{ color: 'black' }} />
                                </a>
                                <a href="https://github.com/" target="_blank">
                                    <FontAwesomeIcon icon={faFacebook} size="2x" style={{ color: 'black' }} />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="card4545 card1">
                        <h3>Lovish Garg</h3>
                        <h4>Convenor</h4>
                        <span>
                            <img src="https://res.cloudinary.com/dijzvijky/image/upload/v1676977602/core_members/lovish_garg_e2rvqt.jpg" alt="" />
                        </span>
                        <div className="content">
                            <h2>01</h2>
                            <div>
                                <a href="https://www.instagram.com/" target="_blank">
                                    <FontAwesomeIcon icon={faInstagram} size="2x" style={{ color: 'black' }} /></a>
                                <a href="https://www.linkedin.com/home" target="_blank">
                                    <FontAwesomeIcon icon={faLinkedinIn} size="2x" style={{ color: 'black' }} />
                                </a>
                                <a href="https://github.com/" target="_blank">
                                    <FontAwesomeIcon icon={faFacebook} size="2x" style={{ color: 'black' }} />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="card4545 card1">
                        <h3>Lovish Garg</h3>
                        <h4>Convenor</h4>
                        <span>
                            <img src="https://res.cloudinary.com/dijzvijky/image/upload/v1676977602/core_members/lovish_garg_e2rvqt.jpg" alt="" />
                        </span>
                        <div className="content">
                            <h2>01</h2>
                            <div>
                                <a href="https://www.instagram.com/" target="_blank">
                                    <FontAwesomeIcon icon={faInstagram} size="2x" style={{ color: 'black' }} /></a>
                                <a href="https://www.linkedin.com/home" target="_blank">
                                    <FontAwesomeIcon icon={faLinkedinIn} size="2x" style={{ color: 'black' }} />
                                </a>
                                <a href="https://github.com/" target="_blank">
                                    <FontAwesomeIcon icon={faFacebook} size="2x" style={{ color: 'black' }} />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="card4545 card1">
                        <h3>Lovish Garg</h3>
                        <h4>Convenor</h4>
                        <span>
                            <img src="https://res.cloudinary.com/dijzvijky/image/upload/v1676977602/core_members/lovish_garg_e2rvqt.jpg" alt="" />
                        </span>
                        <div className="content">
                            <h2>01</h2>
                            <div>
                                <a href="https://www.instagram.com/" target="_blank">
                                    <FontAwesomeIcon icon={faInstagram} size="2x" style={{ color: 'black' }} /></a>
                                <a href="https://www.linkedin.com/home" target="_blank">
                                    <FontAwesomeIcon icon={faLinkedinIn} size="2x" style={{ color: 'black' }} />
                                </a>
                                <a href="https://github.com/" target="_blank">
                                    <FontAwesomeIcon icon={faFacebook} size="2x" style={{ color: 'black' }} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FacultyCoordinators;
