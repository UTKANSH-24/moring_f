import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

// Import all stylesheets

import '../css/event.css';
import '../css/bootstrap.min.css'; // Bootstrap CSS
import '../css/fontawesome-all.min.css'; // FontAwesome CSS
import '../css/swiper.min.css'; // Swiper CSS (Note: this import might differ)
import '../css/style.css';
import '../css/div_comming_css.css'
const Drama = () => {
    const handleClick = (event) => {
        // console.log(event.target.name);
        if (sessionStorage.getItem("loginToken") === null) {
            window.location = "../signin.html";
        } else {
            window.location = "../paidEventRegister.html?code=" + event.target.id;
        }
    };

    const [activeTab, setActiveTab] = useState('step-one');

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };


    return (
        <div>



            <section className="our-schedule-area">
                <h1 style={{ marginTop: '', paddingBottom: '' }} className="text-center">Dramatics Club NITJ</h1>

                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="schedule-tab">
                                {/* Nav Tabs */}
                                <ul className="nav nav-tabs wow fadeInUp" data-wow-delay="300ms" id="conferScheduleTab" role="tablist">
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <li className="nav-item">
                                        <a
                                            aria-controls="step-one"
                                            aria-expanded="true"
                                            className={`nav-link ${activeTab === 'step-one' ? 'active' : ''}`}

                                            data-toggle="tab"
                                            href="#step-one"
                                            id="tab-onr"
                                            role="tab"
                                            onClick={() => handleTabClick('step-one')}

                                        >
                                            Hallabol – Nukkad Natak
                                        </a>
                                    </li>
                                    {/* Nav Item */}
                                    <li className="nav-item">
                                        <a
                                            aria-controls="step-two"
                                            aria-expanded="true"
                                            className={`nav-link ${activeTab === 'step-two' ? 'active' : ''}`}

                                            data-toggle="tab"
                                            href="#step-two"
                                            id="tab-two"
                                            role="tab"
                                            onClick={() => handleTabClick('step-two')}

                                        >
                                            Rangmanch – Stage Play
                                        </a>
                                    </li>
                                    {/* Nav Item */}
                                    <li className="nav-item">
                                        <a
                                            aria-controls="step-three"
                                            aria-expanded="true"
                                            className={`nav-link ${activeTab === 'step-three' ? 'active' : ''}`}

                                            data-toggle="tab"
                                            href="#step-three"
                                            id="tab-three"
                                            role="tab"
                                            onClick={() => handleTabClick('step-three')}

                                        >
                                            Monoact
                                        </a>
                                    </li>
                                    &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;

                                    {/* Nav Item */}
                                    <li className="nav-item"
                                    // style={{ paddingTop: '10px' }}
                                    >
                                        <a
                                            aria-controls="step-four"
                                            aria-expanded="true"
                                            className={`nav-link ${activeTab === 'step-four' ? 'active' : ''}`}

                                            data-toggle="tab"
                                            href="#step-four"
                                            id="tab-five"
                                            role="tab"
                                            onClick={() => handleTabClick('step-four')}

                                        >
                                            MIME
                                        </a>
                                    </li>

                                    <li className="nav-item"
                                    // style={{ paddingTop: '10px' }}
                                    >
                                        <a
                                            aria-controls="step-five"
                                            aria-expanded="true"
                                            className={`nav-link ${activeTab === 'step-five' ? 'active' : ''}`}

                                            data-toggle="tab"
                                            href="#step-five"
                                            id="tab-6"
                                            role="tab"
                                            onClick={() => handleTabClick('step-five')}

                                        >
                                            Vidhushak- Comedy Stage Play
                                        </a>
                                    </li>

                                    <li className="nav-item"
                                    // style={{ paddingTop: '10px' }}
                                    >
                                        <a
                                            aria-controls="step-six"
                                            aria-expanded="true"
                                            className={`nav-link ${activeTab === 'step-six' ? 'active' : ''}`}

                                            data-toggle="tab"
                                            href="#step-six"
                                            id="tab-7"
                                            role="tab"
                                            onClick={() => handleTabClick('step-six')}

                                        >
                                            IMPROV
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            {/* Tab content */}
                            <div className="tab-content" id="conferScheduleTabContent">

                                {activeTab === 'step-one' && <div aria-labelledby="monday-tab" className="tab-pane fade show active" id="step-one" role="tabpanel">
                                    {/* Single Tab Content */}
                                    <div className="single-tab-content">
                                        <div className="row">
                                            <div className="col-12">
                                                {/* Single Schedule Area */}
                                                <div className="single-schedule-area single-page d-flex flex-wrap justify-content-between align-items-center wow fadeInUp"
                                                    data-wow-delay="300ms">
                                                    {/* Single Schedule Thumb and Info */}
                                                    <div className="single-schedule-tumb-info d-flex align-items-center">
                                                        {/* Single Schedule Thumb */}

                                                        {/* Single Schedule Info */}
                                                        <div className="single-schedule-info">
                                                            <h3>Hallabol – Nukkad Natak </h3>
                                                            <p>
                                                                Halla Bol is a popular Street Play Competition that takes place in Utkansh-Cultural Fest of NIT Jalandhar.Halla-Bol literally means "raise your voice" and the competition encourages participants to create performances that address important social issues and encourage positive change in their communities. The competition is open to teams from all over India and attracts a large audience of people who are interested in social activism and cultural expression.<br /><br />
                                                            </p>
                                                            <h6 style={{ color: 'white' }}>Rules:</h6>
                                                            <p>
                                                                1. The participants will have to submit a pdf file containing the following things in advance: Name of college, list of participants and Script.<br />
                                                                2. The time limit for the play will be 25 minutes with a 2% penalty for every extra minute. The time duration includes performance time and stage setting time. The given time duration is from the empty stage to the empty stage after performance.<br />
                                                                3. The play can be in English, Hindi, or Bi-lingual.<br />
                                                                4. Use of flammable substances such as candles, matches or cigarettes or any alcoholic product during performance on stage is not allowed and will result in disqualification.<br />
                                                                5. One team can have a maximum of 20 members and a minimum of 5 members.<br />
                                                                6. Single performance per team is only allowed.<br />
                                                                7. Inappropriate content, religious blasphemy and vulgarity/obscenity will NOT be tolerated.<br />
                                                                8. No team is allowed to spoil the stage (will lead to a penalty ranging from 10% to 40% to be decided by the judges).<br />
                                                                9. Plucking of grass is not allowed. It may lead to a penalty.<br />
                                                                10. All clothes and props are to be arranged by the team. The organizing committee is responsible for the infrastructural facilities only and shall not be responsible for the security of items left behind in green rooms or on the stage.<br />
                                                                11. The participating teams are requested to ensure that their presentation is in keeping with the dignity of the fest.<br />
                                                                12. In any case, the judge's decision will be final.<br /><br />
                                                                <b style={{ color: 'white' }}>Judging Criteria:</b><br />
                                                                • Content, Theme and Message - 30%<br />
                                                                • Voice (Modulation and Pitch) and Energy - 25%<br />
                                                                • Originality of Script – 20%<br />
                                                                • Interaction or Audience Engagement - 20%<br />
                                                                • Minimum Use of Props – 5%<br /><br />
                                                                <span style={{ color: 'white' }}><b>Prize Pool: INR 23,000/-</b></span><br /><br />
                                                                <span style={{ color: 'white' }}>Date: 24<sup>th</sup> March</span><br />
                                                                <span style={{ color: 'white' }}>Reach 1 day prior to your event.</span><br /><br />
                                                                <span style={{ color: 'white' }}>Entry Fee: 1500/- per team(for external participant)<br />
                                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0/-
                                                                    per student(for NITJ student)</span> <br /><br />
                                                            </p>
                                                        </div>
                                                    </div>
                                                    {/* Single Schedule Info */}
                                                    {/* Schedule Btn */}
                                                    <a className="btn confer-btn" id="dr0" name="Hallabol - Nukkad Natak" onClick={handleClick}>Register</a>
                                                </div>
                                            </div>
                                            {/* More Schedule Btn */}
                                        </div>
                                    </div>
                                </div>
                                }

                                {activeTab === 'step-two' && <div aria-labelledby="tuesday-tab" className="tab-pane fade show active" id="step-two" role="tabpanel">
                                    {/* Single Tab Content */}
                                    <div className="single-tab-content">
                                        <div className="row">
                                            <div className="col-12">
                                                {/* Single Schedule Area */}
                                                <div className="single-schedule-area single-page d-flex flex-wrap justify-content-between align-items-center wow fadeInUp"
                                                    data-wow-delay="300ms">
                                                    {/* Single Schedule Thumb and Info */}
                                                    <div className="single-schedule-tumb-info align-items-center">

                                                        {/* Single Schedule Info */}
                                                        <div className="single-schedule-info">
                                                            <h3>Rangmanch – Stage Play</h3>
                                                            <p>
                                                                Life is a theater set in which there are but few practicable entrances.A stage play is a form of live theater performance where actors and actresses perform in front of a live audience on a stage. It's not only about acting, script, dialogues, and lights rather, it's about living that character on stage that brings life to the audience.<br /><br />
                                                            </p>
                                                            <h6 style={{ color: 'white' }}>Rules:</h6>
                                                            <p>
                                                                1. Participants will have to submit a pdf file containing the following things in advance: name of college, list of participants, Script.<br />
                                                                2. Time limit for the play would be 60 minutes with a 2% penalty for every extra minute. The minimum time duration for the play is 20 minutes. The time duration includes performance time and stage setting time. The given time duration is from the empty stage to the empty stage.<br />
                                                                3. Play could be in English, Hindi or Bi-lingual, or a Musical Drama.<br />
                                                                4. Use of flammable substances such as candles, matches or cigarettes or any alcoholic product during performance on stage is not allowed and will result in disqualification.<br />
                                                                5. One team can have a maximum of 15 Actors and a minimum of 4 actors.<br />
                                                                6. A team can have four backstage/props managers, one light in charge, one sound in-charge and a round-up artist (if any they have to be registered).<br />
                                                                7. Also provide the name of the Director, (who may or may not be an actor in the play itself), since there is an award for the "Best Director".<br />
                                                                8. The performance can be an original or an adaptation. There are no constraints regarding that. Inappropriate content, religious blasphemy and vulgarity/obscenity will NOT be tolerated.<br />
                                                                9. Play should be restricted to the Stage area only (If done so, penalty can be imposed). <br />
                                                                10. Microphones and backstage mikes for narration, lights, and a laptop to play sounds will be provided.<br />
                                                                11. Recorded vocals are not allowed, only instrumental music is allowed. 12. The teams are expected to bring their own music on CD or pen drive for the play.<br />
                                                                13. No team is allowed to spoil the stage (will lead to a penalty ranging from 10% to 40% to be decided by the judges).<br />
                                                                14. All clothes and props are to be arranged by the team. The organizing committee is responsible for the infrastructural facilities only and shall not be responsible for the security of items left behind in green rooms or on stage.<br />
                                                                15. The participating teams are requested to ensure that their presentation is in keeping with the dignity of the fest.<br />
                                                                16. In any case, the judge's decision will be final.<br /><br />
                                                                <b style={{ color: 'white' }}>Judging Criteria:</b><br />
                                                                • Content - 40% <br />
                                                                • Acting/Expression- 30% <br />
                                                                • Direction - 20% <br />
                                                                • Miscellaneous Effects - 10%<br /><br />
                                                            </p>
                                                            <span style={{ color: 'white' }}><b>Prize Pool: INR 21,000/-</b></span><br /><br />
                                                            <p style={{ color: 'white' }}>
                                                                Date: 25<sup>th</sup> March<br />
                                                                <span style={{ color: 'white' }}>Reach 1 day prior to your event.
                                                                </span><br /><br />
                                                                <span style={{ color: 'white' }}>

                                                                    Entry Fee: 1500/- per team(for external participant)<br />
                                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                                    0/- per student(for NITJ student)<br />
                                                                </span>
                                                                <br />
                                                            </p>
                                                        </div>
                                                        <a className="btn confer-btn" id="dr1" name="Rangmanch - stage play" onClick={handleClick}>Register</a>
                                                    </div>
                                                    {/* Single Schedule Info */}

                                                </div>

                                                {/* Single Schedule Area */}


                                            </div>

                                            {/* More Schedule Btn */}

                                        </div>
                                    </div>
                                </div>
                                }

                                {activeTab === 'step-three' && <div aria-labelledby="wednesday-tab" className="tab-pane fade show active" id="step-three" role="tabpanel">
                                    {/* Single Tab Content */}
                                    <div className="single-tab-content">
                                        <div className="row">
                                            <div className="col-12">
                                                {/* Single Schedule Area */}
                                                <div className="single-schedule-area single-page d-flex flex-wrap justify-content-between align-items-center wow fadeInUp"
                                                    data-wow-delay="300ms">
                                                    {/* Single Schedule Thumb and Info */}
                                                    <div className="single-schedule-tumb-info d-flex align-items-center">
                                                        {/* Single Schedule Thumb */}
                                                        {/* Single Schedule Info */}
                                                        <div className="single-schedule-info">
                                                            <h3>Monoact </h3>
                                                            <p>
                                                                In theatre, a monologue is a theoretical or artistic piece played by a single actor portraying one character. It is the vocalization of a character's thought and to express them aloud.<br /><br />
                                                            </p>
                                                            <h6 style={{ color: 'white' }}>Rules:</h6>
                                                            <p>
                                                                1. This is an individual event. Script should be original/self-written. If found indulging in any such practices, it would result in disqualification.<br />
                                                                2. Participants will have to submit a pdf file containing the following things in advance: name of college and participant, Script.<br />
                                                                3. Language of the act can be English/Hindi.<br />
                                                                4. Total time allotted for every performance is 7 minutes (empty stage to empty stage). <br />
                                                                5. Use of flammable substances such as candles, matches or cigarettes or any alcoholic product during performance on stage is not allowed and will result in disqualification.<br />
                                                                6. If a participant exceeds the stipulated time, 15% of the total marks obtained will be deducted. If he/she exceeds 9 min, he/she stands to be debarred from the event.<br />
                                                                7. Play should be restricted to the Stage area only (If done so, penalty can be imposed).<br />
                                                                8. Participants can bring their own music for the act in a pen drive but recorded vocals are not allowed. <br />
                                                                9. Instrumental music is allowed but the participants must bring their own instruments. <br />
                                                                10. All clothes and accessories are to be arranged by the participants. The organizing committee is responsible for the infrastructural facilities only and shall not be responsible for the security of items left behind in green rooms or on stage.<br />
                                                                11. The participating teams are requested to ensure that their presentation is in keeping with the dignity of the fest.<br />
                                                                12. More than one participant from the same college are allowed but there should not be any similarities in the script.<br /><br />
                                                                <b style={{ color: 'white' }}>Judging Criteria:</b><br />
                                                                ● Acting/Expressions<br />
                                                                ● Script and Content<br />
                                                                ● Dialogue delivery<br />
                                                                ● Voice Modulation<br /><br />
                                                                <p style={{ color: 'white' }}>
                                                                    Date: 24<sup>th</sup> March<br />
                                                                    <span style={{ color: 'white' }}>Reach 1 day prior to your event.
                                                                    </span><br /><br />
                                                                </p><br /><br />
                                                            </p>
                                                        </div>
                                                    </div>

                                                    {/* Schedule Btn */}
                                                    <span style={{ color: 'white' }}>On Spot Registrations. </span><br /><br />
                                                    {/* <a className="btn confer-btn" id="dr2" name="Monoact">Register </a> */}
                                                </div>

                                                {/* Single Schedule Area */}

                                            </div>

                                            {/* More Schedule Btn */}

                                        </div>
                                    </div>
                                </div>
                                }

                                {activeTab === 'step-four' && <div aria-labelledby="monday-tab" className="tab-pane fade show active" id="step-four" role="tabpanel">
                                    {/* Single Tab Content */}
                                    <div className="single-tab-content">
                                        <div className="row">
                                            <div className="col-12">
                                                {/* Single Schedule Area */}
                                                <div className="single-schedule-area single-page d-flex flex-wrap justify-content-between align-items-center wow fadeInUp"
                                                    data-wow-delay="300ms">
                                                    {/* Single Schedule Thumb and Info */}
                                                    <div className="single-schedule-tumb-info d-flex align-items-center">
                                                        {/* Single Schedule Thumb */}
                                                        {/* Single Schedule Info */}
                                                        <div className="single-schedule-info">
                                                            <h3> MIME </h3>
                                                            <p>
                                                                “The art of mime encompasses all the feelings of the soul.” Mime is a form of physical theater that uses body language and gestures to tell a story or convey a message without the use of words. A mime artist might use facial expressions, hand gestures, and body movements to convey different emotions or actions. For example, they might pretend to be stuck in a box, or lift an invisible weight.<br /><br />
                                                            </p>
                                                            <h6 style={{ color: 'white' }}>Rules:</h6>
                                                            <p>
                                                                1. Each team can have a maximum of 10 members.<br />
                                                                2. Time limit is 10 minutes (empty stage to empty stage) for each team.<br />
                                                                3. Negative points for exceeding the time limit (5% penalty for each minute exceeded).<br />
                                                                4. The act should not contain any dialogues or lip sync.<br />
                                                                5. No act shall contain any offensive, obscene, disrespectful actions or gestures. The act will be immediately stopped and the entry will be disqualified if these instructions are not followed.<br />
                                                                6. Single performance per team is only allowed.<br />
                                                                7. Points will be given on the basis of acting, innovation, depiction of the situation, teamwork, and expressions.<br />
                                                                8. Play should be restricted to the Stage area only (If done so, a penalty can be imposed).<br />
                                                                9. In any case, the judge's decision will be final.<br /><br />
                                                            </p>

                                                            <span style={{ color: 'white' }}><b>Prize Pool: INR 10,000/-</b></span><br /><br />
                                                            <p style={{ color: 'white' }}>
                                                                Date: 26<sup>th</sup> March<br />
                                                                <span style={{ color: 'white' }}>Reach 1 day prior to your event.
                                                                </span><br /><br />
                                                                Entry fee: 500/- per team (for external participants)<br />
                                                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                                0/- per student (for NITJ students) <br />
                                                            </p><br /><br />
                                                        </div>
                                                    </div>
                                                    {/* Single Schedule Info */}

                                                    {/* Schedule Btn */}
                                                    <a className="btn confer-btn" id="dr3" name="MIME" onClick={handleClick}>Register </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                }

                                {activeTab === 'step-five' && <div aria-labelledby="monday-tab" className="tab-pane fade show active" id="step-five" role="tabpanel">
                                    {/* Single Tab Content */}
                                    <div className="single-tab-content">
                                        <div className="row">
                                            <div className="col-12">
                                                {/* Single Schedule Area */}
                                                <div className="single-schedule-area single-page d-flex flex-wrap justify-content-between align-items-center wow fadeInUp"
                                                    data-wow-delay="300ms">
                                                    {/* Single Schedule Thumb and Info */}
                                                    <div className="single-schedule-tumb-info d-flex align-items-center">
                                                        {/* Single Schedule Thumb */}
                                                        {/* Single Schedule Info */}
                                                        <div className="single-schedule-info">
                                                            <h3> MIME </h3>
                                                            <p>
                                                                “The art of mime encompasses all the feelings of the soul.” Mime is a form of physical theater that uses body language and gestures to tell a story or convey a message without the use of words. A mime artist might use facial expressions, hand gestures, and body movements to convey different emotions or actions. For example, they might pretend to be stuck in a box, or lift an invisible weight.<br /><br />
                                                            </p>
                                                            <h6 style={{ color: 'white' }}>Rules:</h6>
                                                            <p>
                                                                1. Each team can have a maximum of 10 members.<br />
                                                                2. Time limit is 10 minutes (empty stage to empty stage) for each team.<br />
                                                                3. Negative points for exceeding the time limit (5% penalty for each minute exceeded).<br />
                                                                4. The act should not contain any dialogues or lip sync.<br />
                                                                5. No act shall contain any offensive, obscene, disrespectful actions or gestures. The act will be immediately stopped and the entry will be disqualified if these instructions are not followed.<br />
                                                                6. Single performance per team is only allowed.<br />
                                                                7. Points will be given on the basis of acting, innovation, depiction of the situation, teamwork, and expressions.<br />
                                                                8. Play should be restricted to the Stage area only (If done so, a penalty can be imposed).<br />
                                                                9. In any case, the judge's decision will be final.<br /><br />
                                                            </p>

                                                            <span style={{ color: 'white' }}><b>Prize Pool: INR 10,000/-</b></span><br /><br />
                                                            <p style={{ color: 'white' }}>
                                                                Date: 26<sup>th</sup> March<br />
                                                                <span style={{ color: 'white' }}>Reach 1 day prior to your event.
                                                                </span><br /><br />
                                                                Entry fee: 500/- per team (for external participants)<br />
                                                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                                0/- per student (for NITJ students) <br />
                                                            </p><br /><br />
                                                        </div>
                                                    </div>
                                                    {/* Single Schedule Info */}

                                                    {/* Schedule Btn */}
                                                    <a className="btn confer-btn" id="dr3" name="MIME">Register </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                }
                                {activeTab === 'step-six' &&
                                    <div aria-labelledby="tuesday-tab" className="tab-pane fade show active" id="step-six" role="tabpanel">
                                        {/* Single Tab Content */}
                                        <div className="single-tab-content">
                                            <div className="row">
                                                <div className="col-12">
                                                    {/* Single Schedule Area */}
                                                    <div className="single-schedule-area single-page d-flex flex-wrap justify-content-between align-items-center wow fadeInUp"
                                                        data-wow-delay="300ms">
                                                        {/* Single Schedule Thumb and Info */}
                                                        <div className="single-schedule-tumb-info align-items-center">

                                                            {/* Single Schedule Info */}
                                                            <div className="single-schedule-info">
                                                                <h3>IMPROVy</h3>
                                                                <p>
                                                                    Life is a theater set in which there are but few practicable entrances.A stage play is a form of live theater performance where actors and actresses perform in front of a live audience on a stage. It's not only about acting, script, dialogues, and lights rather, it's about living that character on stage that brings life to the audience.<br /><br />
                                                                </p>
                                                                <h6 style={{ color: 'white' }}>Rules:</h6>
                                                                <p>
                                                                    1. Participants will have to submit a pdf file containing the following things in advance: name of college, list of participants, Script.<br />
                                                                    2. Time limit for the play would be 60 minutes with a 2% penalty for every extra minute. The minimum time duration for the play is 20 minutes. The time duration includes performance time and stage setting time. The given time duration is from the empty stage to the empty stage.<br />
                                                                    3. Play could be in English, Hindi or Bi-lingual, or a Musical Drama.<br />
                                                                    4. Use of flammable substances such as candles, matches or cigarettes or any alcoholic product during performance on stage is not allowed and will result in disqualification.<br />
                                                                    5. One team can have a maximum of 15 Actors and a minimum of 4 actors.<br />
                                                                    6. A team can have four backstage/props managers, one light in charge, one sound in-charge and a round-up artist (if any they have to be registered).<br />
                                                                    7. Also provide the name of the Director, (who may or may not be an actor in the play itself), since there is an award for the "Best Director".<br />
                                                                    8. The performance can be an original or an adaptation. There are no constraints regarding that. Inappropriate content, religious blasphemy and vulgarity/obscenity will NOT be tolerated.<br />
                                                                    9. Play should be restricted to the Stage area only (If done so, penalty can be imposed). <br />
                                                                    10. Microphones and backstage mikes for narration, lights, and a laptop to play sounds will be provided.<br />
                                                                    11. Recorded vocals are not allowed, only instrumental music is allowed. 12. The teams are expected to bring their own music on CD or pen drive for the play.<br />
                                                                    13. No team is allowed to spoil the stage (will lead to a penalty ranging from 10% to 40% to be decided by the judges).<br />
                                                                    14. All clothes and props are to be arranged by the team. The organizing committee is responsible for the infrastructural facilities only and shall not be responsible for the security of items left behind in green rooms or on stage.<br />
                                                                    15. The participating teams are requested to ensure that their presentation is in keeping with the dignity of the fest.<br />
                                                                    16. In any case, the judge's decision will be final.<br /><br />
                                                                    <b style={{ color: 'white' }}>Judging Criteria:</b><br />
                                                                    • Content - 40% <br />
                                                                    • Acting/Expression- 30% <br />
                                                                    • Direction - 20% <br />
                                                                    • Miscellaneous Effects - 10%<br /><br />
                                                                </p>
                                                                <span style={{ color: 'white' }}><b>Prize Pool: INR 21,000/-</b></span><br /><br />
                                                                <p style={{ color: 'white' }}>
                                                                    Date: 25<sup>th</sup> March<br />
                                                                    <span style={{ color: 'white' }}>Reach 1 day prior to your event.
                                                                    </span><br /><br />
                                                                    <span style={{ color: 'white' }}>

                                                                        Entry Fee: 1500/- per team(for external participant)<br />
                                                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                                        0/- per student(for NITJ student)<br />
                                                                    </span>
                                                                    <br />
                                                                </p>
                                                            </div>
                                                            <a className="btn confer-btn" id="dr1" name="Rangmanch - stage play" onClick={handleClick}>Register</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="d-flex justify-content-around mb-3">
            </div>
        </div>


    );
}

export default Drama;
