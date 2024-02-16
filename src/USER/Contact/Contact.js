import React from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarkerAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import { useLocation } from 'react-router-dom';

const ContactSection = () => {
  const location = useLocation();
  return (
    <div>
      {(location.pathname === '/Contacts') && <div style={{ minHeight: '5rem' }}></div>}
      <section style={{ backgroundColor: 'aliceblue', padding: '30px 0px 30px' }}>
        <div className="contact" id="contact">
          <div className="max-width">
            <h2 className="title" style={{ textAlign: 'center', color: '#070707', marginBottom: '30px' }}>Contact Us</h2>

            <div className="contact-content">
              <div className="column left">
                <div className="text">Get in Touch</div>
                <div className="icons">
                  <div className="row">



                    <FontAwesomeIcon icon={faUser} />
                    <div className="info">
                      {/* <div className="head">Name</div> */}
                      <div className="sub-title">Utkansh Management Team</div>
                    </div>
                  </div>
                  <div className="row">
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                    <div className="info">
                      <div className="head">Address</div>
                      <div className="sub-title">NIT Jalandhar
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <FontAwesomeIcon icon={faEnvelope} />
                    <div className="info">
                      <div className="head">Email</div>
                      <div className="sub-title">utkansh@nitj.ac.in</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="column right">
                <div className="text">Message me</div>
                <form action="#" className='contactform'>
                  <div className="fields">
                    <div className="field namee">
                      <input type="text" placeholder="Name" className='textarae' required />
                    </div>

                    <div className="field email">
                      <input type="email" placeholder="Email" className='textarae' required />
                    </div>
                  </div>
                  <div className="field">
                    <input type="text" placeholder="Subject" className='textarae' required />
                  </div>
                  <div className="field textarea textarat">
                    <textarea cols="30" rows="10" placeholder="Message.." className='textarae' required></textarea>
                  </div>
                  <div className="button-area">
                    <button type="submit">Send message</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactSection;
