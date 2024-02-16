import React from 'react';
import './background.css';
import'../css/register-button.css';
import { useNavigate } from 'react-router-dom';

const FallingText = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/login');
  }
  return (<div>
    <div className="container56">
      <div className="words">
        <span className="w1">U</span>
        <span className="w2">T</span>
        <span className="w3">K</span>
        <span className="w4">A</span>
        <span className="w5">N</span>
        <span className="w6">S</span>
        <span className="w7">H</span>
      </div>
      <div className="tagline">
        <h2>The cultural Kaleidoscope</h2>
      </div>

    </div>
    <div className="regbutton">
      <button className="button-49" role="button" onClick={handleClick}>REGISTER/LOGIN</button>

    </div>
    </div>
  );
};

export default FallingText;
