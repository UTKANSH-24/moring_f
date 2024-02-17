import React from 'react';
import './Footer.css';
import { MdOutlineModeEdit } from "react-icons/md";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTelegram,faFacebook,faYoutube,faInstagram } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <ul className="ulik" style={{ listStyle: 'none' }} id="C">
        <li className="lin"><a className="anchor" href="https://www.facebook.com/utkansh" target="_blank"><FontAwesomeIcon icon={faFacebook} size="3x" style={{ color: 'black' }}/></a></li>
        <li className="lin"><a className="anchor" href="https://www.youtube.com/@UtkanshNITJalandhar" target="_blank"><FontAwesomeIcon icon={faYoutube} size="3x" style={{ color: 'black' }}/></a></li>
        <li><a className="anchor" href="https://www.instagram.com/utkansh.nitj/" target="_blank"> <FontAwesomeIcon icon={faInstagram} size="3x" style={{ color: 'black' }} /></a></li>
        {/* <li><a className="anchor" href="https://www.linkedin.com/in/abhishek-kumar-992757211/"><FontAwesomeIcon icon={faTelegram} size="3x"/></a></li> */}
        {/* <li><a className="anchor" href="https://www.instagram.com/abhishek1108032022/"><FontAwesomeIcon icon={faTelegram} size="3x"/></a></li> */}
      </ul>
      {/* <br /> */}
      <div>Created By Team Utkansh-24</div>
      <div> 2024 All rights reserved.</div>

      
    </footer>
  );
};

export default Footer;
