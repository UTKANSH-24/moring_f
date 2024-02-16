import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link
import './nav.css';
import logoImage from './Group 59.svg'; // Import SVG image
import Layout from '../../Layout/Layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp,faUser } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const [isSticky, setSticky] = useState(false);
    const [showScrollBtn, setShowScrollBtn] = useState(false);
    const [isMenuActive, setMenuActive] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScroll = () => {
        setSticky(window.scrollY > 20);
        setShowScrollBtn(window.scrollY > 500);
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const toggleMenu = () => {
        setMenuActive(!isMenuActive);
    };

    return (<>
       
      
       <Layout/>
        <nav className={isSticky ? 'navbarnav sticky' : 'navbarnav'}>
       
            <div className="max-widthnav">
           
                <div className="logo">
                    <img className="mainlogo" src={logoImage} alt="Logo" />
                </div>

                <ul className={isMenuActive ? 'menu lafda active' : 'menu lafda'}>
                    <li><Link to="/" className="menu-btn">Home</Link></li>
                    <li><Link to="/Gallery" className="menu-btn">Gallery</Link></li>
                    <li><Link to="/clubsandevent" className="menu-btn">Clubs and Events</Link></li>
                    <li><Link to="/megaevent" className="menu-btn">Mega Events</Link></li>
                    <li><Link to="/merchandise" className="menu-btn">Merchandise</Link></li>
                    <li><Link to="/accomodationPage" className="menu-btn">Accommodation</Link></li>
                    <li><Link to="/TeamMembers" className="menu-btn">Team Members</Link></li>
                    <li><Link to="/FacultyCoordinators" className="menu-btn">Faculty Coordinator </Link></li>
                    <li><Link to="/Developers" className="menu-btn">Developers</Link></li>
                    <li><Link to="/Contacts" className="menu-btn">Contact us</Link></li>
                    <li><FontAwesomeIcon icon={faUser} style={{marginRight:'15px', marginTop:'5px'}}/></li>
                
                </ul>
                <div className="menu-btn" style={{ marginLeft: '20px' }} onClick={toggleMenu}>
                <FontAwesomeIcon icon={isMenuActive ? faTimes : faBars} />
                </div>
            </div>
            <button className={showScrollBtn ? 'scroll-up-btn show' : 'scroll-up-btn'} onClick={scrollToTop}>
            <FontAwesomeIcon icon={faArrowUp} style={{ marginBottom: '10px' }} />
           
            </button>
        </nav>
        
    </>
    );
};

export default Navbar;
