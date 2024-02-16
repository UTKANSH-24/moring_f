import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';


import '../css/event.css';
import '../css/bootstrap.min.css'; // Bootstrap CSS
import '../css/fontawesome-all.min.css'; // FontAwesome CSS
import '../css/swiper.min.css'; // Swiper CSS (Note: this import might differ)
import '../css/style.css';
import '../css/div_comming_css.css'
export default function Animation() {
    const handleClick = (event) => {
        // console.log(event.target.name);
        if (sessionStorage.getItem("loginToken") === null) {
            window.location = "../signin.html";
        } else {
            window.location = "../paidEventRegister.html?code=" + event.target.id;
        }
    };

    const [activeTab, setActiveTab] = useState('step-1');

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };
    return (<div>

        {/* Our Schedule Area Start */}
        <section className="our-schedule-area">
            <h1 style={{ marginTop: '', paddingBottom: '' }} className="text-center">Animation Club</h1>

            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="schedule-tab">
                            {/* Nav Tabs */}
                            <ul className="nav nav-tabs wow fadeInUp" data-wow-delay="300ms" id="conferScheduleTab" role="tablist">
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <li className="nav-item">
                                    <a aria-controls="step-one" aria-expanded="true" onClick={() => handleTabClick('step-1')}

                                        className={`nav-link ${activeTab === 'step-1' ? 'active' : ''}`} data-toggle="tab" href="#step-one" id="tab-onr" role="tab"> COSCON </a>
                                </li>
                                {/* Nav Item */}
                                <li className="nav-item">
                                    <a aria-controls="step-two" aria-expanded="true" onClick={() => handleTabClick('step-2')}

                                        className={`nav-link ${activeTab === 'step-2' ? 'active' : ''}`} data-toggle="tab" href="#step-two" id="tab-two" role="tab"> EXHIBITION </a>
                                </li>
                            </ul>
                        </div>
                        {/* Tab Content */}
                        <div className="tab-content" id="conferScheduleTabContent">
                            {activeTab === 'step-1' && <div aria-labelledby="monday-tab" className="tab-pane fade show active" id="step-one" role="tabpanel">
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
                                                        <h3>COSCON </h3><br />
                                                        <p>Get ready to unveil the singer within you as Utkansh presents The
                                                            Voice, the solo singing competition through which talented
                                                            singers from across the nation take a shot at fame. From folk to
                                                            filmy songs, the stage is set for you to mesmerize the audience
                                                            and win exciting prizes.</p><br />
                                                        <h6 style={{ color: 'white' }}>Rules:</h6>
                                                        <p>
                                                            1. In the Registration process itself, Students have to submit
                                                            their video of 2-3 min. A list of shortlisted students will
                                                            perform on stage at NITJ on UTKANSH.<br />
                                                            2. Participants can perform in Hindi and English language only
                                                            within 3 minutes after which 20% marks will be deducted after 10
                                                            seconds and disqualification may occur after 20 seconds.( any
                                                            number as time is fixed ).<br />
                                                            3. Participants can perform with instrumental accompaniment or
                                                            with a backing track but the judging will be done solely on the
                                                            basis of vocal performance.<br />
                                                            4. Performers can be disqualified on the spot for misconduct,
                                                            obscenity or foul language. Judging will be done solely on the
                                                            basis of vocal performance. <br /><br />
                                                            <b style={{ color: 'white' }}>Judging Criteria:</b><br />
                                                            • Quality of voice<br />
                                                            • Sense of scale and beat<br />
                                                            • Improvisation<br />
                                                            • Pronunciation of lyrics<br />
                                                            • Mood and expression<br />
                                                            • Overall impact<br /><br />
                                                            <span style={{ color: 'white' }}><b>Prize Pool: 6,000/-
                                                                INR</b></span><br /><br />
                                                            <span style={{ color: 'white' }}>Date: 24<sup>th</sup> March</span><br />
                                                            <span style={{ color: 'white' }}>Reach 1 day prior to your event.
                                                            </span><br /><br />
                                                            <span style={{ color: 'white' }}>Entry Fee: 200/- per participation(for
                                                                external
                                                                participant)<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0/-
                                                                per student(for NITJ student) </span> <br /><br />
                                                        </p>
                                                    </div>
                                                </div>
                                                {/* Single Schedule Info */}
                                                {/* Schedule Btn */}
                                                <a className="btn confer-btn" id="mu0" name="COSCON" onClick={handleClick}>Register
                                                </a>
                                            </div>
                                        </div>
                                        {/* More Schedule Btn */}
                                    </div>
                                </div>
                            </div>}
                            {activeTab === 'step-2' && <div aria-labelledby="tuesday-tab" className="tab-pane fade  show active" id="step-two" role="tabpanel">
                                {/* Single Tab Content */}
                                <div className="single-tab-content">
                                    <div className="row">
                                        <div className="col-12">
                                            {/* Single Schedule Area */}
                                            <div className="single-schedule-area single-page d-flex flex-wrap justify-content-between align-items-center wow fadeInUp" data-wow-delay="300ms">
                                                {/* Single Schedule Thumb and Info */}
                                                <div className="single-schedule-tumb-info align-items-center">
                                                    {/* Single Schedule Info */}
                                                    <div className="single-schedule-info">
                                                        <h3>EXHIBITION</h3><br />
                                                        <p>Be ready to fulfill your love for rock at the Utkansh Band Battle
                                                            finals at NITJ! It is a western and eastern rock band
                                                            competition, open to any college or semi-professional band from
                                                            India. </p><br />
                                                        <h6 style={{ color: 'white' }}>Rules:</h6>
                                                        <p>
                                                            1. In Registration process itself, bands have to submit a video
                                                            of 3-5 minutes. By videos, shortlisted bands will get an invite
                                                            to perform on stage at NITJ on UTKANSH.<br />
                                                            2. The main event at NITJ will consist of one performance by
                                                            each band.
                                                            <br /> 3. In finals, a group will be required to perform any
                                                            number of songs as per their choice within 10 minutes (Amps on
                                                            to amps off inclusive of sound check).
                                                            <br /> 4. Bands will be disqualified on the spot for misconduct,
                                                            obscenity or foul language, and will be banned from performing
                                                            at all subsequent editions of spring fest.
                                                            <br /> 5. Only English and Hindi Rock Music are allowed.
                                                            <br /> 6. Bands will have to bring their own musical instruments
                                                            and special effects. However, programmed music is not allowed.
                                                            <br /> 7. Equipment provided will be:
                                                            <br />• 3 Guitar Cables
                                                            <br />• Keyboard stand (only)
                                                            <br />• 7 microphones (Cordless: 4, with cord 3)
                                                            <br />• Drum set (Participants can bring along with your own
                                                            cymbals and chokes/high hats)
                                                            <br />• Bass (1)
                                                            <br />• Keyboard cable (1)
                                                            <br /> 8. Utkansh fest will not be held responsible for the
                                                            failure of any of your instruments.
                                                        </p>
                                                        <br /><span style={{ color: 'white' }}><b>Prize Pool: INR
                                                            25,000/-</b></span><br />
                                                        <br />
                                                        <p style={{ color: 'white' }}>
                                                            Date: 25<sup>th</sup> March<br />
                                                            <span style={{ color: 'white' }}>Reach 1 day prior to your event.
                                                            </span><br /><br />
                                                            <span style={{ color: 'white' }}>
                                                                {/* Last date to register XX March<br/></span> */}
                                                                Entry Fee: 1000/- per team(for external participant)<br />
                                                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                                0/- per student(for NITJ student)<br />
                                                                <br />
                                                            </span></p>
                                                    </div>
                                                    <a className="btn confer-btn" id="mu1" name="EXHIBITION" onClick={handleClick}>Register
                                                    </a>
                                                </div>
                                                {/* Single Schedule Info */}
                                            </div>
                                            {/* Single Schedule Area */}
                                        </div>
                                        {/* More Schedule Btn */}
                                    </div>
                                </div>
                            </div>}
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* Our Schedule Area End */}
        <div className="d-flex justify-content-around mb-3">
        </div>

    </div>

    )
}
