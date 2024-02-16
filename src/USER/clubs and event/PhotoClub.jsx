import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';


import '../css/event.css';
import '../css/bootstrap.min.css'; // Bootstrap CSS
import '../css/fontawesome-all.min.css'; // FontAwesome CSS
import '../css/swiper.min.css'; // Swiper CSS (Note: this import might differ)
import '../css/style.css';
import '../css/div_comming_css.css'
export default function PhotoClub() {
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
            <h1 style={{ marginTop: '', paddingBottom: '' }} className="text-center">Netra-Photography Club </h1>
           
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="schedule-tab">
                                {/* Nav Tabs */}
                                <ul className="nav nav-tabs wow fadeInUp" data-wow-delay="300ms" id="conferScheduleTab" role="tablist">
                                    <li className="nav-item">
                                        <a onClick={() => handleTabClick('step-1')}

                                            className={`nav-link ${activeTab === 'step-1' ? 'active' : ''}`} id="tab-onr" data-toggle="tab" href="#step-one" role="tab" aria-controls="step-one" aria-expanded="true">DRISHYA
                                        </a>
                                    </li>
                                    {/* Nav Item */}
                                    <li className="nav-item">
                                        <a onClick={() => handleTabClick('step-2')}

                                            className={`nav-link ${activeTab === 'step-2' ? 'active' : ''}`} id="tab-two" data-toggle="tab" href="#step-two" role="tab" aria-controls="step-two" aria-expanded="true"> NAZARIYA
                                        </a>
                                    </li>
                                    {/* Nav Item */}
                                    <li className="nav-item">
                                        <a onClick={() => handleTabClick('step-3')}

                                            className={`nav-link ${activeTab === 'step-3' ? 'active' : ''}`} id="tab-three" data-toggle="tab" href="#step-three" role="tab" aria-controls="step-three" aria-expanded="true">SNAP TREASURE
                                        </a>
                                    </li>
                                    {/* Nav Item */}
                           
                                    <li className="nav-item ">
                                        <a onClick={() => handleTabClick('step-5')}

                                            className={`nav-link ${activeTab === 'step-5' ? 'active' : ''}`} id="tab-five" data-toggle="tab" href="#step-five" role="tab" aria-controls="step-five" aria-expanded="true"> Weekend Dairy (CINEPULSE)
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            {/* Tab Content */}
                            <div className="tab-content" id="conferScheduleTabContent">
                                {activeTab==='step-1' &&<div className="tab-pane fade show active" id="step-one" role="tabpanel" aria-labelledby="monday-tab">
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
                                                            <h3> DRISHYA </h3>
                                                            <p>It is an exquisite photography exhibition – a collection of beautiful photographs from all over the nation. Moreover, it’s not just an exhibition, it’s a photography competition as well as the best photographs will be awarded.
                                                            </p><br />
                                                            <h6 style={{ color: 'white' }}>Rules:</h6>
                                                            <p>
                                                                <b><font size={4}> Event rules and guidelines</font> </b><br />
                                                                <br />1. All the entries must have subject as DRISHYA_NAME.
                                                                <br />2. All the entries in the google form should be filled properly.
                                                                <br />3. Each entry should consist of a maximum of 2 photographs.
                                                                <br />4. Picture size should be greater than 5MP.
                                                                <br />5. Mobile clicks are also allowed (picture resolution should be of greater than or equal to 5 MP ).
                                                                <br />6. Submit before 18 MARCH, 11:59 PM.
                                                                <br />7. Submit your entry at <a style={{ color: 'white' }} href="https://forms.gle/6S4dyXxSmJjistuK9">https://forms.gle/6S4dyXxSmJjistuK9</a>
                                                                <br />8. The decision taken by the judges shall be final and binding. In case of any disputes NIT Jalandhar reserves the rights in its sole discretion
                                                            </p>
                                                            <br /><br />
                                                            <span style={{ color: 'white' }}><b>Prize Pool: 3,000/- INR</b></span><br /><br />
                                                            <span style={{ color: 'white' }}>Date: 24-26<sup>th</sup> March.</span><br />
                                                            <span style={{ color: 'white' }}>Entry Fee: 50 INR/- per participation<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0/- per student(for NITJ student) </span> <br /><br />
                                                            <span style={{ color: 'white' }}>Reach 1 day prior to your event. </span><br /><br />
                                                        </div>
                                                    </div>
                                                    {/* Single Schedule Info */}
                                                    {/* Schedule Btn */}
                                                    <a name="DRISHYA" href="../eventregister.html" id="netra0" className="btn confer-btn">Register </a>
                                                </div>
                                            </div>
                                            {/* More Schedule Btn */}
                                        </div>
                                    </div>
                                </div>}
                                {activeTab==='step-2' &&<div className="tab-pane fade show active" id="step-two" role="tabpanel" aria-labelledby="tuesday-tab">
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
                                                            <h3> NAZARIYA </h3>
                                                            <p>Use your creativity to click theme based photos. Send us an entry from the theme given.
                                                            </p><br />
                                                            <h6 style={{ color: 'white' }}>Rules:</h6>
                                                            <p>
                                                                <b><font size={4}> Event rules and guidelines</font> </b><br />
                                                                <br />1. This is an individual event.
                                                                <br />2. All the entries must have FILE NAME as NAZARIYA_NAME_THEME.
                                                                <br />3. All the entries in the google form should be filled properly.
                                                                <br />4. Story must be depicted through 3-6 photographs.
                                                                <br />5. Picture size should be greater than 5 MP and mobile clicks are also allowed.
                                                                <br />6. Submit before 22 March, 11:59 pm.
                                                                <br />7. Submit your entry at <a style={{ color: 'white' }} href="https://forms.gle/G8ZmSQeeaXgio8bH7">https://forms.gle/G8ZmSQeeaXgio8bH7</a>
                                                                <br />8. Image EXIF data should be present and should be shown if demanded.
                                                                <br />9. Participants should showcase their story telling skills using pictures only.
                                                                <br />10. The decision taken by the judges shall be final and binding. In case of any disputes, NIT Jalandhar reserves the rights at its sole discretion.
                                                            </p>
                                                            <br /><br />
                                                            <span style={{ color: 'white' }}><b>Prize Pool: 3,000/- INR</b></span><br /><br />
                                                            <span style={{ color: 'white' }}>Date: 26<sup>th</sup> March.</span><br />
                                                            <span style={{ color: 'white' }}>Entry Fee: 50 INR/- per participation<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0/- per student(for NITJ student) </span> <br /><br />
                                                            <span style={{ color: 'white' }}>Reach 1 day prior to your event. </span><br /><br />
                                                        </div>
                                                    </div>
                                                    {/* Single Schedule Info */}
                                                    {/* Schedule Btn */}
                                                    <a name="NAZARIYA" id="netra1" className="btn confer-btn">Register </a>
                                                </div>
                                            </div>
                                            {/* More Schedule Btn */}
                                        </div>
                                    </div>
                                </div>}
                                {activeTab==='step-3' &&<div className="tab-pane fade show active" id="step-three" role="tabpanel" aria-labelledby="wednesday-tab">
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
                                                            <h3>SNAP TREASURE</h3>
                                                            <h6 style={{ color: 'white' }}>Rules:</h6>
                                                            <p>
                                                                <b> RULES:</b><br />
                                                            </p><h5>This event is for NIT JALANDHAR students only.</h5>
                                                            1.Each team must consist of 3-5
                                                            members only.<br />
                                                            2.The event will consist of 3 rounds, where each round is further
                                                            split into levels. <br />
                                                            3.Photos of different locations inside the campus will be uploaded
                                                            as Insta stories on the official page of NETRA as hints. <br />
                                                            4.Teams have to guess and reach the locations and click pictures as
                                                            specified for each round. <br />
                                                            5.Round 1 is a qualifying round where only the first 10 teams to
                                                            complete the given tasks will be selected for Round 2.<br />
                                                            6.The 10 teams will compete in Round 2 and only 5 teams with the
                                                            best pictures will be selected for Round 3.<br />
                                                            7.Teams will be judged on their creativity and quality of photos in
                                                            Round 2 &amp; 3 which will decide the final result. <br />8.The result
                                                            will not be based on Round 1.<br />
                                                            9.Teams must reach the venue on time as rules will be disclosed in
                                                            further detail at the venue.<br />
                                                            <br /><br />
                                                            {/* <span style="color:white">Date: XX<sup>nd</sup> March</span><br>
                                              <span style="color:white">Venue: OAT</span> <br>
                                              <span style="color:white">Time: XX:XX AM to XX:XX PM </span><br> */}
                                                            <p />
                                                        </div>
                                                    </div>
                                                    {/* Schedule Btn */}
                                                    {/* <a name="SNAP TREASURE" id="ne4" className="btn confer-btn">Register </a> */}
                                                </div>
                                                {/* Single Schedule Area */}
                                            </div>
                                            {/* More Schedule Btn */}
                                        </div>
                                    </div>
                                </div>}
                                {activeTab==='step-4' &&<div className="tab-pane fade show active" id="step-four" role="tabpanel" aria-labelledby="monday-tab">
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
                                                            <h3>PHOTO MANIPULATION </h3>
                                                            <h6 style={{ color: 'white' }}>Rules:</h6>
                                                            <p>
                                                                "You just don't take a Photograph, you make it"
                                                                manipulation&nbsp;involves&nbsp;transforming or altering&nbsp;a&nbsp;photograph&nbsp;using
                                                                various methods and techniques .The event aims to provoke strong
                                                                opinions among photographers.<br />
                                                                <b>Prize:</b> Prizes worth TBD <br />
                                                                <b> RULES:</b><br />
                                                            </p><h5>This event is for NIT JALANDHAR students only.</h5>
                                                            1. All the entries mailed must have subject as
                                                            MANIPULATION_NAME<br />2. The mail must have participants Name,
                                                            College Name, Contact
                                                            Number and FB Id Link , Instagram username.<br />3. Picture size
                                                            should be greater than 5MP.<br />
                                                            4. Submission before 23rd Mar, 8 PM. <br />5. The decision taken by the
                                                            judges shall be final and binding. In case
                                                            of any disputes NIT Jalandhar reserves the rights in its sole
                                                            discretion. <br />
                                                            <p />
                                                        </div>
                                                    </div>
                                                    {/* Single Schedule Info */}
                                                    {/* Schedule Btn */}
                                                    {/* <a name="Photo Manipulation" id="ne3" className="btn confer-btn">Register </a> */}
                                                </div>
                                            </div>
                                            {/* More Schedule Btn */}
                                        </div>
                                    </div>
                                </div>}
                                {activeTab==='step-5' &&<div className="tab-pane fade show active" id="step-five" role="tabpanel" aria-labelledby="monday-tab">
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
                                                            <h3>Weekend Dairy (CINEPULSE) </h3>
                                                            <h6 style={{ color: 'white' }}>Rules:</h6>
                                                            <p>
                                                                "There is only you and your camera. The limitations in your
                                                                photography are
                                                                in yourself, for what we see is what we are.” The event indulges you
                                                                to click
                                                                amazing pictures this Utkansh and send them to us and let the world
                                                                see what
                                                                the fest means to you .The best entries , clicked during three days
                                                                of the fest , shall be awarded.<br />
                                                                <b>Prize:</b> Prizes worth ₹2000.<br />
                                                                <b>RULES:</b><br />
                                                            </p><h5>This event is for NIT JALANDHAR students only.</h5>
                                                            1. All the entries mailed must have subject as
                                                            WEEKEND_NAME<br />2. The mail must have participants Name, College
                                                            Name, Contact
                                                            Number and FB Id Link, Instagram username and a good caption .<br />3.
                                                            2 entries per person is allowed.<br />
                                                            4. Picture size should be greater than 5MP.<br />
                                                            5. Submission before 27 March, 4 PM. <br />
                                                            6. Photos clicked during Utkansh'20.<br />7. The decision taken by the
                                                            judges shall be final and binding. In case
                                                            of any disputes NIT Jalandhar reserves the rights in its sole
                                                            discretion.<br />
                                                            <p /><br />
                                                            {/* <p style="color:white">
                                              Date: <sup></sup> March<br>
                                              Venue: TBD<br>
                                              Time: TBD </p> */}
                                                        </div>
                                                    </div>
                                                    {/* Single Schedule Info */}
                                                    {/* Schedule Btn */}
                                                    {/* <a name="Weekend Dairy (CINEPULSE)" id="ne2" className="btn confer-btn">Register </a> */}
                                                </div>
                                            </div>
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
                {/* <div className="p-2"><h4>Dilip Kumar</h4>  <h5>+918872382503</h5></div>
    <div className="p-2"><h4>Jalam Rathore</h4>  <h5>+918107149470</h5></div> */}
            </div>
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
