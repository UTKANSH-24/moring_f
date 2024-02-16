import React from 'react';
import './Event.css';

const BhangraClub = () => {
  const handleRegisterClick = () => {
    if (sessionStorage.getItem("loginToken") === null) {
      window.location = "../signin.html";
    } else {
      window.location = "../paidEventRegister.html?code=bh0";
    }
  };

  return (
    <section className="our-schedule-area">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="schedule-tab">
              <ul className="nav nav-tabs" id="conferScheduleTab" role="tablist">
                <li className="nav-item">
                  <a className="nav-link active" id="tab-one" data-toggle="tab" href="#step-one" role="tab" aria-controls="step-one" aria-expanded="true">Folklore</a>
                </li>
              </ul>
            </div>

            <div className="tab-content" id="conferScheduleTabContent">
              <div className="tab-pane fade show active" id="step-one" role="tabpanel">
                <div className="single-tab-content">
                  <div className="row">
                    <div className="col-12">
                      <div className="single-schedule-area single-page">
                        <div className="single-schedule-tumb-info">
                          <div className="single-schedule-info">
                            <h3>Folklore</h3>
                            <p>
                              One of the main events of Utkansh. Folklore brings participation in the form of folk dances, providing a sense of belongingness and identity to our regions.<br /><br />
                              <span style={{ color: "white" }}><b>Rules:</b></span><br />
                              {/* Include rules here */}
                              <span style={{ color: "white" }}><b>Prize Pool: INR 50,000/-</b></span><br /><br />
                              <span style={{ color: "white" }}>Date: 25<sup>th</sup> March</span><br />
                              <span style={{ color: "white" }}>Reach 1 day prior to your event.</span><br /><br />
                              <span style={{ color: "white" }}>Entry Fee: 1500/- per team(for external participant)<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                            </p>
                          </div>
                        </div>
                        <button className="btn confer-btn" onClick={handleRegisterClick}>Register</button>
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
  );
};

export default BhangraClub;
