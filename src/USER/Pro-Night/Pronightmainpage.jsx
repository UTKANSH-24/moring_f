import React from 'react';
import './pronight.css';
import videoFile from './fast_clip_1.mp4'; // Import the video file
import arrow from './arrow-down-double-line.svg';

class ProNightSection extends React.Component {
    handleClick = () => {
        // Navigate to /megaevent
        window.location.href = '/megaevent';
    }

    render() {
        return (
            <>
                {/* pro-night */}
                {/* <div id="pro-night"> */}
                <h2 className="titl" style={{ textAlign: 'center', margin: '90px 0px 30px 0', fontSize: '3.6rem', zIndex: 100 }}>
                    Pro Night
                </h2>
                <video src={videoFile} className="pro_video" loop autoPlay muted />
                {/* <h1 className="pronighthome">ProNight</h1> */}
                <button className='revelbutton' onClick={this.handleClick}>Reveal</button>
                {/* </div> */}
            </>
        );
    }
}

export default ProNightSection;
