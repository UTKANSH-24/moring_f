import React, { useState } from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarkerAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import axiosInstance from '../../Helper/axiosInstance';
import toast from 'react-hot-toast';
import { useLocation } from 'react-router-dom';

const ContactSection = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(name);
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    try {
      const url = `/contact`
      const res = await axiosInstance.post(url, formData);
      console.log(res.data);
      if (res?.data?.success) {
        toast.success(res.data.message)
      } else {
        toast.error(res?.data?.message);
      }
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })

    } catch (err) {
      console.log(err);
      toast.error('Connection Error');
    }
  }
  const location = useLocation();

  return (
    <div>{(location.pathname === '/Contacts') && <div style={{ minHeight: '5rem' }}></div>}
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
                      <div className="head">Name</div>
                      <div className="sub-title">Abhishek Kumar</div>
                    </div>
                  </div>
                  <div className="row">
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                    <div className="info">
                      <div className="head">Address</div>
                      <div className="sub-title">Samastipur Bihar</div>
                    </div>
                  </div>
                  <div className="row">
                    <FontAwesomeIcon icon={faEnvelope} />
                    <div className="info">
                      <div className="head">Email</div>
                      <div className="sub-title">abhishek110803@gmail.com</div>
                    </div>
                  </div>
                </div>
              </div>


              <div className="column right">
                <div className="text">Message me</div>
                <form className='contactform' onSubmit={handleSubmit}>
                  <div className="fields">
                    <div className="field namee">
                      <input type="text" placeholder="Name" name='name' className='textarae' required onChange={handleChange} value={formData.name} />
                    </div>

                    <div className="field email">
                      <input type="email" placeholder="Email" name='email' className='textarae' required onChange={handleChange} value={formData.email} />
                    </div>
                  </div>
                  <div className="field">
                    <input type="text" placeholder="Subject" name='subject' className='textarae' required onChange={handleChange} value={formData.subject} />
                  </div>
                  <div className="field textarea textarat">
                    <textarea cols="30" rows="10" placeholder="Message.." name='message' className='textarae' required onChange={handleChange} value={formData.message} ></textarea>
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