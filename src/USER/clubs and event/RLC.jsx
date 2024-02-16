import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';


import '../css/event.css';
import '../css/bootstrap.min.css'; // Bootstrap CSS
import '../css/fontawesome-all.min.css'; // FontAwesome CSS
import '../css/swiper.min.css'; // Swiper CSS (Note: this import might differ)
import '../css/style.css';
import '../css/div_comming_css.css'
export default function RLC() {
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
            <h1 style={{ marginTop: '', paddingBottom: '' }} className="text-center">Regional Language Club</h1>
            
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="schedule-tab">
                                {/* Nav Tabs */}
                                <ul className="nav nav-tabs wow fadeInUp" data-wow-delay="300ms" id="conferScheduleTab" role="tablist">
                                    <li className="nav-item">
                                        <a onClick={() => handleTabClick('step-1')}

                                            className={`nav-link ${activeTab === 'step-1' ? 'active' : ''}`} id="tab-onr" data-toggle="tab" href="#step-one" role="tab" aria-controls="step-one" aria-expanded="true"> FOLK SINGING </a>
                                    </li>
                                    {/* Nav Item */}
                                    <li className="nav-item">
                                        <a onClick={() => handleTabClick('step-2')}

                                            className={`nav-link ${activeTab === 'step-2' ? 'active' : ''}`} id="tab-two" data-toggle="tab" href="#step-two" role="tab" aria-controls="step-two" aria-expanded="true">MUSHAIRA </a>
                                    </li>

                                    {/* <li className="nav-item">
                                        <a onClick={() => handleTabClick('step-3')}

                                            className={`nav-link ${activeTab === 'step-3' ? 'active' : ''}`} id="tab-three" data-toggle="tab" href="#step-three" role="tab" aria-controls="step-three" aria-expanded="true">PATROKAR BABU</a>
                                    </li>
                                    <li className="nav-item">
                                        <a onClick={() => handleTabClick('step-4')}

                                            className={`nav-link ${activeTab === 'step-4' ? 'active' : ''}`} id="tab-four" data-toggle="tab" href="#step-four" role="tab" aria-controls="step-three" aria-expanded="true">FILMY SANGRAM</a>
                                    </li>
                                    <li className="nav-item">
                                        <a onClick={() => handleTabClick('step-5')}

                                            className={`nav-link ${activeTab === 'step-5' ? 'active' : ''}`} id="tab-five" data-toggle="tab" href="#step-five" role="tab" aria-controls="step-three" aria-expanded="true">JASHN-E-UTKANSH</a>
                                    </li> */}
                                    {/* <li className="nav-item">
                                        <a onClick={() => handleTabClick('step-6')}

                                            className={`nav-link ${activeTab === 'step-6' ? 'active' : ''}`} id="tab-six" data-toggle="tab" href="#step-six" role="tab" aria-controls="step-three" aria-expanded="true">KAVYA KALA</a>
                                    </li> */}
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
                                                            <h3> FOLK SINGING </h3>
                                                            <p>This event is basically an open mic event in which each of the
                                                                participants will have to recite their self-written content. The
                                                                content must be in Hindi. It will lay down the benefits for new
                                                                emerging college student poet. Its an open mic competition where
                                                                students get chance to present whatever they vouch for in Hindi
                                                                language.
                                                            </p><br />
                                                            <h6 style={{ color: 'white' }}>Rules:</h6>
                                                            <p>
                                                                <b>
                                                                    <font size={4}> Event rules and guidelines</font>
                                                                </b><br />
                                                                <br /> 1.There is individual participation.
                                                                <br /> 2. Students can present any poem, stand-up comedy, rap,
                                                                Shayari or song etc. in Hindi language.
                                                                <br /> 3. There will be one round only.
                                                                <br /> 4. There will be total 3 winners at 3 positions.
                                                                <br /> 5. The judgement of judges will be final.
                                                                <br /> 6. The content of each participant should be of minimum 2
                                                                minutes and maximum 3 minutes .
                                                                <br /> 7. The content presented is to be self written.
                                                                <br /> 8. The content should be decent, and it should not be
                                                                delivering any offensive message.
                                                            </p>
                                                            <br /><br />
                                                            <span style={{ color: 'white' }}><b>Prize Pool: 8,000/-
                                                                INR</b></span><br /><br />
                                                            <span style={{ color: 'white' }}>Date: 24<sup>th</sup> March.</span><br />
                                                            <span style={{ color: 'white' }}>Entry Fee: 150 INR/- per person(for
                                                                external
                                                                participant)<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0/-
                                                                per student(for NITJ student) </span> <br /><br />
                                                            <span style={{ color: 'white' }}>Reach 1 day prior to your event.
                                                            </span><br /><br />
                                                        </div>
                                                    </div>
                                                    {/* Single Schedule Info */}
                                                    {/* Schedule Btn */}
                                                    <a name="MEHFIL" id="ra0" className="btn confer-btn">Register </a>
                                                </div>
                                            </div>
                                            {/* More Schedule Btn */}
                                        </div>
                                    </div>
                                </div>}
                                {activeTab==='step-2' &&<div className="tab-pane fade show active" id="step-two" role="tabpanel" aria-labelledby="monday-tab">
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
                                                            <h3> MUSHAIRA </h3>
                                                            <p>This event is an extempore in which the participants will be
                                                                given any random topic. Each participant will have to speak on
                                                                the topic given to him in Hindi. The time limit will be told
                                                                before commencement of competition.
                                                            </p><br />
                                                            <h6 style={{ color: 'white' }}>Rules:</h6>
                                                            <p>
                                                                <b>
                                                                    <font size={4}> Event rules and guidelines</font>
                                                                </b><br />
                                                                <br />1. There is individual participation.
                                                                <br />2. Each participant will be given a topic and they will have
                                                                to speak on that topic(extempore).
                                                                <br />3. The time limit is 1.5 minutes.
                                                                <br />4. There will be one round only.
                                                                <br />5. There will be total 3 winners at 3 positions.
                                                                <br />6. The judgement of judges will be final.
                                                            </p>
                                                            <br /><br />
                                                            <span style={{ color: 'white' }}><b>Prize Pool: 8,000/-
                                                                INR</b></span><br /><br />
                                                            <span style={{ color: 'white' }}>Date: 25<sup>th</sup> March.</span><br />
                                                            <span style={{ color: 'white' }}>Entry Fee: 150 INR/- per student(for
                                                                external
                                                                participant)<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0/-
                                                                per student(for NITJ student) </span> <br /><br />
                                                            <span style={{ color: 'white' }}>Reach 1 day prior to your event.
                                                            </span><br /><br />
                                                        </div>
                                                    </div>
                                                    {/* Single Schedule Info */}
                                                    {/* Schedule Btn */}
                                                    <a name="PRAGHYANSH" id="ra1" className="btn confer-btn">Register </a>
                                                </div>
                                            </div>
                                            {/* More Schedule Btn */}
                                        </div>
                                    </div>
                                </div>}
                                {activeTab==='step-3' &&<div className="tab-pane fade show active" id="step-three" role="tabpanel" aria-labelledby="monday-tab">
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
                                                            <h3> PATROKAR BABU </h3>
                                                            <p>This event is basically the modification of TV Debates or Common
                                                                man’s views as we see everyday. It will consist of various
                                                                participants and they will have to speak for or against the
                                                                topic provided to them in Hindi. It will enhance individual’s
                                                                speaking and communicational skills.
                                                            </p><br />
                                                            <h6 style={{ color: 'white' }}>Rules:</h6>
                                                            <p>
                                                                <b>
                                                                    <font size={4}> Event rules and guidelines</font>
                                                                </b><br />
                                                                <br /> 1. There is individual participation.
                                                                <br /> 2. Each participant will be given a topic before the
                                                                competition, and they will have to speak in for and against the
                                                                motion of topic (debate).
                                                                <br /> 3. There will be two rounds only.
                                                                <br /> 4. There will be total 3 winners at 3 positions.
                                                                <br /> 5. The judgement of judges will be final.
                                                                <br /> 6. Time limit will be asserted before commencement of
                                                                competition.
                                                                <br /> 7. During debate, first students have to present their
                                                                topic and then they will be given time for cross- questioning.
                                                            </p>
                                                            <br /><br />
                                                            <span style={{ color: 'white' }}><b>Prize Pool: 8,000/-
                                                                INR</b></span><br /><br />
                                                            <span style={{ color: 'white' }}>Date: 26<sup>th</sup> March.</span><br />
                                                            <span style={{ color: 'white' }}>Entry Fee: 150 INR/- per student(for
                                                                external
                                                                participant)<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0/-
                                                                per student(for NITJ student) </span> <br /><br />
                                                            <span style={{ color: 'white' }}>Reach 1 day prior to your event.
                                                            </span><br /><br />
                                                        </div>
                                                    </div>
                                                    {/* Single Schedule Info */}
                                                    {/* Schedule Btn */}
                                                    <a name="PATROKAR BABU" id="ra2" className="btn confer-btn">Register </a>
                                                </div>
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
                                                            <h3> FILMY SANGRAM </h3>
                                                            <h6 style={{ color: 'white' }}>Rules:</h6>
                                                            <p>
                                                                <b>
                                                                    <font size={4}> Event rules and guidelines</font>
                                                                </b> <br />
                                                            </p><h5>This event is for NIT JALANDHAR students only.</h5>
                                                            A) All The decisions will be reserved to Rajbhasha.<br />
                                                            B) Some of the rounds will be presented at that time only.<br />
                                                            C) No entry fee will be there<br />
                                                            D) Rounds are of team events having 2 to 3 members in each.<br />
                                                            E) Indiscipline will not be allowed in any case.<br />
                                                            F) Use of mobile phones in the venue is strictly prohibited<p />
                                                            {/* <span style="color:white">Reach 1 day prior to your event. </span><br><br>  */}
                                                        </div>
                                                    </div>
                                                    {/* Single Schedule Info */}
                                                    {/* Schedule Btn */}
                                                    {/* <a name="Pragyansh" id="ra3" className="btn confer-btn">Register </a> */}
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
                                                            <h3> JASHN-E-UTKANSH </h3>
                                                            <h6 style={{ color: 'white' }}>Rules:</h6>
                                                            <p>
                                                            </p><p style={{ textAlign: 'left' }}>
                                                                <b>
                                                                    <font size={4}> Event rules and guidelines </font>
                                                                </b><br />
                                                            </p><h5>This event is for NIT JALANDHAR students only.</h5>
                                                            A) All The decisions will be reserved to Rajbhasha.<br />
                                                            B) Some of the rounds will be presented at that time only.<br />
                                                            C) No entry fee will be there<br />
                                                            D) Rounds are of team events having 2 to 3 members in each.<br />
                                                            E) Indiscipline will not be allowed in any case.<br />
                                                            F) Use of mobile phones in the venue is strictly prohibited. <p />
                                                            {/* <span style="color:white">Reach 1 day prior to your event. </span><br><br>  */}
                                                        </div>
                                                    </div>
                                                    {/* Single Schedule Info */}
                                                    {/* Schedule Btn */}
                                                    {/* <a name="JASHN-E-UTKANSH" id="ra5"
                                     className="btn confer-btn">Register </a> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>}
                                {activeTab==='step-6' &&<div className="tab-pane fade show active" id="step-six" role="tabpanel" aria-labelledby="monday-tab">
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
                                                            <h3> Kavya Kala</h3>
                                                            <h6 style={{ color: 'white' }}>Rules:</h6>
                                                            <p>
                                                            </p><p style={{ textAlign: 'left' }}>
                                                                <b>
                                                                    <font size={4}> Event rules and guidelines</font>
                                                                </b> <br />
                                                            </p><h5>This event is for NIT JALANDHAR students only.</h5>
                                                            A) All The decisions will be reserved to Rajbhasha.<br />
                                                            B) Some of the rounds will be presented at that time only.<br />
                                                            C) No entry fee will be there.<br />
                                                            D) Rounds are of team events having 2 to 3 members in each.<br />
                                                            E) Indiscipline will not be allowed in any case.<br />
                                                            F) Use of mobile phones in the venue is strictly prohibited <p />
                                                            {/* <span style="color:white">Reach 1 day prior to your event. </span><br><br>  */}
                                                        </div>
                                                    </div>
                                                    {/* Single Schedule Info */}
                                                    {/* Schedule Btn */}
                                                    {/* <a name="Kavya Kala" id="ra7" className="btn confer-btn">Register </a> */}
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
                {/* <div className="p-2"><h4>Rahul kumar Ranjan</h4>  <h5>+916280349542</h5></div>
    <div className="p-2"><h4>Sombir Singh</h4>  <h5>+916284192596</h5></div> */}
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
