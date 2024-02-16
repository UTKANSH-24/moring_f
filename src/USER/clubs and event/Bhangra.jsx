// src/components/BhangraClub.js

import React from 'react';

import '../css/event.css';
import '../css/bootstrap.min.css';
import '../css/fontawesome-all.min.css';
import '../css/swiper.min.css';
import '../css/style.css';
import '../css/div_comming_css.css';
import { useNavigate } from 'react-router-dom';

const BhangraClub = () => {
    const navigate = useNavigate();
    

    const handleClick = (event) => {
        // console.log(event.target.name);
        if (sessionStorage.getItem('loginToken') === null) {
            window.location = '../signin.html';
        } else {
            window.location = `../paidEventRegister.html?code=${event.target.id}`;
        }
    };


    
    return (
        <div>

           


            <section className="our-schedule-area">
                
            <h1 style={{ marginTop: '', paddingBottom: '' }} className="text-center">
                Bhangra And Giddha Club
            </h1>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="schedule-tab">
                                <ul className="nav nav-tabs wow fadeInUp" data-wow-delay="300ms" id="conferScheduleTab" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active" id="tab-one" data-toggle="tab" href="#step-one" role="tab"
                                            aria-controls="step-one" aria-expanded="true">BHANGRA FIESTA </a>
                                    </li>
                                </ul>
                            </div>

                            <div className="tab-content" id="conferScheduleTabContent">
                                <div className="tab-pane fade show active" id="step-one" role="tabpanel" aria-labelledby="monday-tab">
                                    <div className="single-tab-content">
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="single-schedule-area single-page d-flex flex-wrap justify-content-between align-items-center wow fadeInUp"
                                                    data-wow-delay="300ms">
                                                    <div className="single-schedule-tumb-info d-flex align-items-center">
                                                        {/* <!-- Single Schedule Info --> */}
                                                        <div className="single-schedule-info">
                                                            <h3> BHANGRA FIESTA </h3>
                                                            <p>
                                                                One of the main events of Utkansh. BHANGRA FIESTA is the event that brings participation in the form of folk dances. The folk of our regions bring us close to our roots and give us the feeling of belongingness and identity.<br /><br />
                                                            </p>
                                                            <h6 style={{ color: 'white' }}>Rules:</h6>
                                                            <p>
                                                                1. Only Group performances are allowed. <br />
                                                                2. Dances from all cultures are allowed.<br />
                                                                3. A team must have a minimum of 8 members and not more than 16 members. <br />
                                                                4. Performance must be completely folk, and all the team should strictly adhere to rules of different folk dances. (Modern dance forms are not allowed).<br />
                                                                5. Time limit of the performance is 8-11 mins, and the time will start when music starts or when the first dagga on dhol is hit.<br />
                                                                6. Props must be brought by the performers themselves. Use of props (like kirpaan) which can harm the stage is not allowed.<br />
                                                                7. Any kind of vulgarity shall not be tolerated. <br />
                                                                8. Teams must bring their soundtrack(if required) on a pendrive and submit it prior to the competition. (The track should be in .mp3 format)<br />
                                                                9. There will be only one round. <br />
                                                                10. Every team should have their id cards and photocopy of the bank passbook for prize money transfer.<br /><br />
                                                                <b style={{ color: 'white' }}>GIDDHA:</b><br />
                                                                • The dress of giddha girls should be according to Punjabi culture.<br />
                                                                • Action shall be in accordance with traditional dholak taals and traditional style of boli singing.<br /><br />
                                                                <b style={{ color: 'white' }}>Bhangra:</b><br />
                                                                • Actions of the performance will be in accordance with traditional form of dhol rhythm such as luddi, dhamal, mirza, chalaan etc.<br />
                                                                • The dress of Bhangra teams should be according to Punjabi folk.<br /><br />
                                                                <b style={{ color: 'white' }}>GROUP DANCE:</b><br />
                                                                • Any Indian folk dance and tribal dance are allowed but western group dance is not allowed. <br /><br />

                                                                <span style={{ color: 'white' }}><b>Prize Pool: INR 50,000/-</b></span><br /><br />
                                                                <span style={{ color: 'white' }}>Date: 25<sup>th</sup> March</span><br />
                                                                <span style={{ color: 'white' }}>Reach 1 day prior to your event. </span><br /><br />
                                                                <span style={{ color: 'white' }}>Entry Fee: 1500/- per team(for external participant)<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0/- per student(for NITJ student) </span><br /><br />
                                                            </p>
                                                        </div>

                                                    </div>
                                                    <a name="Folk Lore" id="bh0" className="btn confer-btn" onCanPlay={handleClick}>Register </a>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="d-flex justify-content-around mb-3">
                {/* Contact information */}
            </div>

            {/* **** All JS Files ***** */}
            <script src="../js/jquery.min.js"></script>
            <script src="../js/bootstrap.min.js"></script>
            <script src="../js/confer.bundle.js"></script>
            <script src="../js/active.js"></script>
            <script src="../js/jquery-2.1.1.js"></script>
            <script src="../js/velocity.min.js"></script>
            <script src="../js/main.js"></script>

            {/* Resource jQuery */}
            <script type='text/javascript' src='../js/jquery.js'></script>
            <script type='text/javascript' src='../js/masonry.pkgd.min.js'></script>
            <script type='text/javascript' src='../js/jquery.collapsible.min.js'></script>
            <script type='text/javascript' src='../js/swiper.min.js'></script>
            <script type='text/javascript' src='../js/jquery.countdown.min.js'></script>
            <script type='text/javascript' src='../js/circle-progress.min.js'></script>
            <script type='text/javascript' src='../js/jquery.countTo.min.js'></script>
            <script type='text/javascript' src='../js/custom.js'></script>
        </div>
    );
};

export default BhangraClub;
