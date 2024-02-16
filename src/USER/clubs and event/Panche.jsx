import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

import '../css/event.css';
import '../css/bootstrap.min.css'; // Bootstrap CSS
import '../css/fontawesome-all.min.css'; // FontAwesome CSS
import '../css/swiper.min.css'; // Swiper CSS (Note: this import might differ)
import '../css/style.css';
import '../css/div_comming_css.css'

export default function Panche() {
    const handleClick = (event) => {
        console.log(event.target.name);
        if (sessionStorage.getItem("loginToken") === null) {
            window.location = "../signin.html";
        } else {
            window.location = "../paidEventRegister.html?code=" + event.target.id;
        }
    };
    return (
        <div>

            {/* Our Schedule Area Start */}
            <section className="our-schedule-area">
                <h1 style={{ marginTop: '', paddingBottom: '' }} className="text-center">Panache - The Fashion Parade</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            {/* Tab Content */}
                            <div className="tab-content" id="conferScheduleTabContent">
                                <div className="tab-pane fade show active" id="step-one" role="tabpanel" aria-labelledby="monday-tab">
                                    {/* Single Tab Content */}
                                    <div className="single-tab-content">
                                        <div className="row">
                                            <div className="col-12">
                                                {/* Single Schedule Area */}
                                                <div className="single-schedule-area single-page d-flex flex-wrap justify-content-between align-items-center wow fadeInUp" data-wow-delay="300ms">
                                                    {/* Single Schedule Thumb and Info */}
                                                    <div className="single-schedule-tumb-info d-flex align-items-center">
                                                        {/* Single Schedule Thumb */}
                                                        {/* Single Schedule Info */}
                                                        <div className="single-schedule-info">
                                                            <h3>Panache - The fashion Parade</h3>
                                                            <p>
                                                                PANACHE : The Fashion Parade will feature some of the most
                                                                talented fashion models and designers , who will come together
                                                                to create an unforgettable experience for the audience.<br /><br />
                                                            </p>
                                                            <h6 style={{ color: 'white' }}>Rules:</h6>
                                                            <p>
                                                                1.Maximum number of participants per team is 25 in addition
                                                                there should be one person in charge for Music and one for the
                                                                lights.<br />
                                                                2. Cross College teams can be formed; all team members must have
                                                                valid College ID cards.<br />
                                                                3. Teams can take help from members outside college such as
                                                                designer, choreographers, makeup artists.<br />
                                                                4. On stage time for each team is limited to max to 18 minutes
                                                                which includes time for stage setup. Exceeding time limit would
                                                                lead to disqualification.<br />
                                                                5. Participants should focus on walk, dress up and attitude.<br />
                                                                6. All the clothes and accessories are to be arrange for/by the
                                                                participating team.<br />
                                                                7. Music system will be provided. You are expected to bring
                                                                their own CDs or pen drives in recognizable format.<br />
                                                                8. Designers are encouraged to document their designs and
                                                                artistic process using various photographs and written
                                                                description of their inspiration.<br />
                                                                9. Teams planning to use props must inform the organizers. Use
                                                                of liquids, fires, pets or other hazardous material is not
                                                                allowed.<br />
                                                                10. Any form of vulgarity will result in disqualification from
                                                                the event. Hence if the team feels any stunt can be deemed as
                                                                vulgar, it is strongly advised to consult the organizers.<br />
                                                                11. There must be Tech Riders each for light and sound.<br />
                                                                12. The decision of judges shall be final and binding.<br />
                                                                13. Exceeding time limit will lead to disqualification.<br />
                                                                14. Every team should have their id cards and photocopy of bank
                                                                passbook.<br /><br />
                                                            </p>
                                                            <span style={{ color: 'white' }}><b>Prize Pool: INR
                                                                40,000/-</b></span><br /><br />
                                                            <span style={{ color: 'white' }}>Date: 25<sup>th</sup>March</span><br />
                                                            <span style={{ color: 'white' }}>Reach 1 day prior to your event.
                                                            </span><br /><br />
                                                            <span style={{ color: 'white' }}>Entry Fee: 2000/- per team(for external
                                                                participant)<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0/-
                                                                per student(for NITJ student) </span><br />
                                                            <br />
                                                        </div>
                                                    </div>
                                                    {/* Single Schedule Info */}
                                                    {/* Schedule Btn */}
                                                    <a name="Panache - The Fashion Parade" id="pa0" className="btn confer-btn" onClick={handleClick}>Register </a>
                                                </div>
                                            </div>
                                            {/* More Schedule Btn */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* **** All JS Files ***** */}
            {/* jQuery 2.2.4 */}
            {/* Bootstrap */}
            {/* All Plugins */}
            {/* Active */}
            {/* NAvbar jQuery */}
            {/* Resource jQuery */}
        </div>

    )
}
