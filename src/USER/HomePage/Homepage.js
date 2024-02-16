import React, { useEffect } from 'react';
import './Homepage.css';
import AboutUsSection from '../About/About';
import ContactSection from '../Contact/Contact';
import FallingText from '../Backgroundtext/FallingText';
import Gallery from '../clubs and event/Gallery';
// import Navbar from '../navbar/Navbar';
// import Schedule from '../schedule/Horizontaltab';

import Pronightmainpage from '../Pro-Night/Pronightmainpage';
import LabTabs from '../schedule/Horizontaltab';
// import VerticalTabs from '../schedule/Schedule1';
// import VerticalTabs2 from '../schedule/Schedule2';
const Homepage = () => {

    return (

        <>  
            <FallingText />

            <AboutUsSection />
            {/* <VerticalTabs/> */}
            {/* <VerticalTabs2/> */}
            {/* <Schedule/> */}
            <Gallery />
            <LabTabs/>
            <Pronightmainpage />
            
            <ContactSection />
        </>
    );
}
export default Homepage;