import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';


import '../css/event.css';
import '../css/bootstrap.min.css'; // Bootstrap CSS
import '../css/fontawesome-all.min.css'; // FontAwesome CSS
import '../css/swiper.min.css'; // Swiper CSS (Note: this import might differ)
import '../css/style.css';
import '../css/div_comming_css.css'
export default function Movie() {
    const handleClick = (event) => {
        console.log(event.target.name);
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
    return (
        <div>

            {/* Our Schedule Area Start */}
            <section className="our-schedule-area">
                <h1 style={{ marginTop: '', paddingBottom: '' }} className="text-center">NITJ Movie Club (Deja Vu)</h1>

                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="schedule-tab">
                                {/* Nav Tabs */}
                                <ul className="nav nav-tabs wow fadeInUp" data-wow-delay="300ms" id="conferScheduleTab" role="tablist">
                                    <li className="nav-item">
                                        <a onClick={() => handleTabClick('step-1')}

                                            className={`nav-link ${activeTab === 'step-1' ? 'active' : ''}`} id="tab-one" data-toggle="tab" href="#step-one" role="tab" aria-controls="step-one" aria-expanded="true"> FILM MAKING </a>
                                    </li>
                                    {/* Nav Item */}
                                    <li className="nav-item">
                                        <a onClick={() => handleTabClick('step-2')}

                                            className={`nav-link ${activeTab === 'step-2' ? 'active' : ''}`} id="tab-two" data-toggle="tab" href="#step-two" role="tab" aria-controls="step-two" aria-expanded="true">MAD-ADS </a>
                                    </li>

                                    <li className="nav-item">
                                        <a onClick={() => handleTabClick('step-3')}

                                            className={`nav-link ${activeTab === 'step-3' ? 'active' : ''}`} id="tab-three" data-toggle="tab" href="#step-three" role="tab" aria-controls="step-three" aria-expanded="true">CREATIVE CHAOS</a>
                                    </li>
                                </ul>
                            </div>
                            {/* Tab Content */}
                            <div className="tab-content" id="conferScheduleTabContent">
                                {activeTab === 'step-1' && <div className="tab-pane fade show active" id="step-one" role="tabpanel" aria-labelledby="monday-tab">
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
                                                            <h3> FILM MAKING </h3>
                                                            <p> Filmmaking Competition is designed to allow young students to tell their stories about the ocean while discovering and enhancing their skills as filmmakers. Judged by an elite jury of professional filmmakers, the top three winners will receive a cash prize and all of the finalists will have their films screened in person.
                                                            </p><br />
                                                            <h6 style={{ color: 'white' }}>Rules:</h6>
                                                            <p>
                                                                <b><font size={4}> Event rules and guidelines</font> </b><br />
                                                                <br /> 1. Each film must be 1 to 5 minutes long. Opening and/or closing credits are not required, but (if added) may add up to an additional 10 seconds in total.
                                                                <br /> 2.Films may be in any language or have no dialogue at all. Non-English audio (and important on-screen text) must have English subtitles.
                                                                <br /> 3.Ensure that all content in your film (including footage, music, images, props, etc.) is your own. If you include any copyrighted or trademarked content, you must be able to provide written permission for its use. Entries containing any unauthorized content will be disqualified.
                                                                <br /> 4.The theme for the competition would be announced on the club’s Instagram page.
                                                                <br /> 5.The event is also open to people outside NIT Jalandhar.
                                                            </p>
                                                            <br /><br />
                                                            <span style={{ color: 'white' }}><b>Prize Pool: INR 10,000/- </b></span><br /><br />
                                                            <span style={{ color: 'white' }}>Date: 25<sup>th</sup> March.</span><br />
                                                            <span style={{ color: 'white' }}>Reach 1 day prior to your event. </span><br /><br />
                                                            <span style={{ color: 'white' }}>Entry Fee: FREE</span> <br /><br />
                                                        </div>
                                                    </div>
                                                    {/* Single Schedule Info */}
                                                    {/* Schedule Btn */}
                                                    <a name="Filmmaking" id="movie0" className="btn confer-btn" onClick={handleClick}>Register </a>
                                                </div>
                                            </div>
                                            {/* More Schedule Btn */}
                                        </div>
                                    </div>
                                </div>}
                                {activeTab === 'step-2' && <div className="tab-pane fade show active" id="step-two" role="tabpanel" aria-labelledby="wednesday-tab">
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
                                                            <h3>Mad Ads </h3>
                                                            <h6 style={{ color: 'white' }}>Rules:</h6>
                                                            <h5>This event is for NIT JALANDHAR students only.</h5>
                                                            <p>This is an advertisement making competition where the participants
                                                                are
                                                                required to create an ad of a product showcasing their creativity
                                                                and must be
                                                                convincing enough for a customer.<br />
                                                                1. No plagiarism allowed,No harm to the nature<br />
                                                                2. Final Ad created must be less than 1 minute.<br />
                                                                3. Must not offend religious believes.<br />
                                                                4. Must not be discriminating on any basis.<br />
                                                                5. Should be funny.</p>
                                                            {/* <p style="color:white"> Date: XX<sup>st</sup> March<br> Venue: SB1 <br>Time: XX:XX AM to XX:XX PM</p> */}
                                                        </div>
                                                    </div>
                                                    {/* Schedule Btn */}
                                                    {/* <a name="Mad Ads" id="movie2" className="btn confer-btn">Register </a> */}
                                                </div>
                                                {/* Single Schedule Area */}
                                            </div>
                                            {/* More Schedule Btn */}
                                        </div>
                                    </div>
                                </div>}

                                {activeTab === 'step-3' && <div className="tab-pane fade show active" id="step-three" role="tabpanel" aria-labelledby="wednesday-tab">
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
                                                            <h3>CREATIVE CHAOS</h3>
                                                            <h6 style={{ color: 'white' }}>Rules:</h6>
                                                            <h5>This event is for NIT JALANDHAR students only.</h5>
                                                            <p>This is an advertisement making competition where the participants
                                                                are
                                                                required to create an ad of a product showcasing their creativity
                                                                and must be
                                                                convincing enough for a customer.<br />
                                                                1. No plagiarism allowed,No harm to the nature<br />
                                                                2. Final Ad created must be less than 1 minute.<br />
                                                                3. Must not offend religious believes.<br />
                                                                4. Must not be discriminating on any basis.<br />
                                                                5. Should be funny.</p>
                                                            {/* <p style="color:white"> Date: XX<sup>st</sup> March<br> Venue: SB1 <br>Time: XX:XX AM to XX:XX PM</p> */}
                                                        </div>
                                                    </div>
                                                    {/* Schedule Btn */}
                                                    {/* <a name="Mad Ads" id="movie2" className="btn confer-btn">Register </a> */}
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
