import React, { useEffect } from 'react';
import './Accomodation.css';
import VanillaTilt from './Vanillatilt.js'; // Import the default export from VanillaTilt.js
import { useState } from 'react';

import { useNavigate } from "react-router-dom";

const AccomodationPage = () => {
  const navigate = useNavigate();

  const [planno, setPlanno] = useState(1);
  useEffect(() => {
    VanillaTilt.init(document.querySelectorAll(".cardss"), {
      max: 25,
      speed: 400
    });
  }, []);

 const handleClick = (planId) => {
  console.log("planId", planId);
  setPlanno(planId);
  navigate(`/event/registeraccomodation/${planId}`); 
}

  return (
    <div className="containeraco">
      <div className="grid">
        <div className="cardss">
          <h2 className="card_title">Basic</h2>
          <p className="pricing">₹ 20<span className="small">/per day</span></p>
          <hr />
          <ul className="features">
            <li>24*7 Wi-Fi</li>
            <li>Water Hot and Cold</li>
            <li>Combined Rooms</li>
          </ul>
          <hr />
          <p className="features"><b>Note: </b>Food Will Cost Extra.</p>
          <a className="cta_btn" onClick={() => handleClick(1)}>Buy Now</a>
        </div>

        {/* Repeat the card component for each card */}

        <div className="cardss">
          <h2 className="card_title">Basic</h2>
          <p className="pricing">₹ 20<span className="small">/per day</span></p>
          <hr />
          <ul className="features">
            <li>24*7 Wi-Fi</li>
            <li>Water Hot and Cold</li>
            <li>Combined Rooms</li>
          </ul>
          <hr />
          <p className="features"><b>Note: </b>Food Will Cost Extra.</p>
          <a  className="cta_btn" onClick={() => handleClick(2)}>Buy Now</a>
        </div>

        <div className="cardss">
          <h2 className="card_title">Basic</h2>
          <p className="pricing">₹ 20<span className="small">/per day</span></p>
          <hr />
          <ul className="features">
            <li>24*7 Wi-Fi</li>
            <li>Water Hot and Cold</li>
            <li>Combined Rooms</li>
          </ul>
          <hr />
          <p className="features"><b>Note: </b>Food Will Cost Extra.</p>
          <a  className="cta_btn" onClick={() => handleClick(3)}>Buy Now</a>
        </div>
      </div>
    </div>
  );
};

export default AccomodationPage;
