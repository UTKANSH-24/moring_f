import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link
import './nav.css';
import logoImage from './Group 59.svg'; // Import SVG image
import Layout from '../../Layout/Layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const [isSticky, setSticky] = useState(false);
    const [showScrollBtn, setShowScrollBtn] = useState(false);

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

    return (<>


        <Layout />
        <nav className={isSticky ? 'navbarnav sticky' : 'navbarnav'}>

            <div className="max-widthnav">

                <div className="logo">
                    <img className="mainlogo" src={logoImage} alt="Logo" />
                </div>
                <ul className={ 'menu lafda'} style={{marginRight:'45px'}}>
                    <li><Link style={{textDecoration:'none'}} to="/" className="menu-btn">Home</Link></li>
                    <li><Link style={{textDecoration:'none'}} to="/Gallery" className="menu-btn">Gallery</Link></li>
                    <li><Link style={{textDecoration:'none'}} to="/clubsandevent" className="menu-btn">Events</Link></li>
                    <li><Link style={{textDecoration:'none'}} to="/megaevent" className="menu-btn">Mega Events</Link></li>
                    <li><Link style={{textDecoration:'none'}} to="/merchandise" className="menu-btn">Merchandise</Link></li>
                    <li><Link style={{textDecoration:'none'}} to="/accomodationPage" className="menu-btn">Accommodation</Link></li>
                    <li><Link style={{textDecoration:'none'}} to="/TeamMembers" className="menu-btn">Team Members</Link></li>
                    <li><Link style={{textDecoration:'none'}} to="/FacultyCoordinators" className="menu-btn">Faculty Coordinator </Link></li>
                    <li><Link style={{textDecoration:'none'}} to="/Developers" className="menu-btn">Developers</Link></li>
                    <li><Link style={{textDecoration:'none'}} to="/Contacts" className="menu-btn">Contact us</Link></li>
                </ul>
            </div>
            <button className={showScrollBtn ? 'scroll-up-btn show' : 'scroll-up-btn'} onClick={scrollToTop}>
                <FontAwesomeIcon icon={faArrowUp} style={{ marginBottom: '10px' }} />

            </button>
        </nav>
    </>
    );
};

export default Navbar;
