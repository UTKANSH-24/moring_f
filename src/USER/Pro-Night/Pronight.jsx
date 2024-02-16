import React, { useEffect } from 'react';
import './pronight.css';
import videoFile from './fast_clip_1.mp4'; // Import the video file
import arrow from './arrow-down-double-line.svg';

export default function Pronight() {

    useEffect(() => {
        var cursor = document.querySelector('#cursor');
        var body = document.querySelector('.main');
        var heading = document.querySelector('.pronight_title_pro');
        var card = document.querySelector('.pronight_card');
        var down = document.querySelector('.pronight_arrow');

        heading.addEventListener('mousewheel', () => {
            heading.style.transform = ' translate(-50%, -50%) scale(1.5) ';
            heading.style.top = '10% ';
            heading.style.opacity = '0';
        });

        heading.addEventListener('mousewheel', () => {
            card.style.transform = ' translate(-50%, -50%) scale(1.2) ';
            card.style.top = '40% ';
            // down.style.opacity='0'
            // down.style.transform=' translate(-50%, -50%) scale(0) '
        });

        card.addEventListener('mousewheel', () => {
            card.style.top = '100%';
            card.style.transform = ' translate(-50%, -50%) scale(0) ';
            // card.style.opacity='0'
            heading.style.opacity = '1';
            heading.style.top = '40%';
            heading.style.left = '50%';
            heading.style.transform = 'translate(-50%, -50%) scale(3)';
        });
    }, []);

    return (
        <div>
            <section className="pronight_pro_night">
                <div id="pro-night">
                    {/* Use the imported video file */}
                    <video src={videoFile} className="pronight_pro_video" loop autoPlay muted>
                        Your browser does not support the video tag.
                    </video>
                    <h1 className="pronight_title_pro">ProNight</h1>
                    <div className="pronight_card" style={{ width: '20rem' }}>
                        {/* <img className="card-img-top" src="./pronight_section/star image.jpg" alt="Card image cap" /> */}
                        <div className="card-body">
                            <h5 className="pronight_card-title-p">TO BE REVEALED</h5>
                        </div>
                    </div>
                    {/* <a href="/pronight_section/pronight.html">
                        <div className="pronight_reveal_card">
                            <h2>REVEAL</h2>
                        </div>
                    </a> */}
                    <div className="pronight_arrow">
                        <img src={arrow} alt="arrow" srcSet="" />
                    </div>
                </div>
            </section>
        </div>
    );
}
