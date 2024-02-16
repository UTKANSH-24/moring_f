import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import Swiper from 'swiper';

import './schedule.css'
import './schedule-button.css'

const Schedule = () => {

    const swiperRef = useRef(null);

    useEffect(() => {
        const timelineSwiper = new Swiper('.timeline .swiper-container', {
            direction: 'vertical',
            loop: false,
            speed: 1600,
            pagination: '.swiper-pagination',
            paginationBulletRender: function (swiper, index, className) {
                const year = document.querySelectorAll('.swiper-slide')[index].getAttribute('data-year');
                return `<span class="${className}">${year}</span>`;
            },

            paginationClickable: true,
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            breakpoints: {
                768: {
                    // direction: 'horizontal',
                }
            }
        });

        swiperRef.current = timelineSwiper;

        return () => {
            if (swiperRef.current) {
                swiperRef.current.destroy();
            }
        };
    }, []);

    const handleNextButtonClick = () => {
        if (swiperRef.current) {
            swiperRef.current.slideNext();
        }
    };

    const handlePrevButtonClick = () => {
        if (swiperRef.current) {
            swiperRef.current.slidePrev();
        }
    };


    return (
        <div>
            <Helmet>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/3.4.2/css/swiper.min.css" />
            </Helmet>
            <section className="schedule" id="schedule-section-1">
                <div className="tcontainer">
                    <div className="timeline">
                        <div className="swiper-container">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide" style={{ backgroundImage: 'url(https://unsplash.it/1920/500?image=11)' }} data-year="2011">
                                    <div className="swiper-slide-content">
                                        <span className="timeline-year">2011</span>
                                        <h4 className="timeline-title">nice super title</h4>
                                        <p className="timeline-text">Lorem ipsum dolor site amet, consectetur adipscing elit, sed do eisumod tempor incididut ut labore et dolore magna aliqua. Ut enim ad mimim venjam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                    </div>
                                </div>
                                <div className="swiper-slide" style={{ backgroundImage: 'url(https://unsplash.it/1920/500?image=12)' }} data-year="2012">
                                    <div className="swiper-slide-content">
                                        <span className="timeline-year">2012</span>
                                        <h4 className="timeline-title">Our nice super title</h4>
                                        <p className="timeline-text">Lorem ipsum dolor site amet, consectetur adipscing elit, sed do eisumod tempor incididut ut labore et dolore magna aliqua. Ut enim ad mimim venjam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                    </div>
                                 </div>
                                <div className="swiper-slide" style={{ backgroundImage: 'url(https://unsplash.it/1920/500?image=13)' }} data-year="2013">
                                    <div className="swiper-slide-content">
                                        <span className="timeline-year">2013</span>
                                        <h4 className="timeline-title">Our nice super title</h4>
                                        <p className="timeline-text">Lorem ipsum dolor site amet, consectetur adipscing elit, sed do eisumod tempor incididut ut labore et dolore magna aliqua. Ut enim ad mimim venjam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                    </div>
                                </div>
                                <div className="swiper-slide" style={{ backgroundImage: 'url(https://unsplash.it/1920/500?image=14)' }} data-year="2014">
                                    <div className="swiper-slide-content">
                                        <span className="timeline-year">2014</span>
                                        <h4 className="timeline-title">Our nice super title</h4>
                                        <p className="timeline-text">Lorem ipsum dolor site amet, consectetur adipscing elit, sed do eisumod tempor incididut ut labore et dolore magna aliqua. Ut enim ad mimim venjam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                    </div>
                                </div>
                                <div className="swiper-slide" style={{ backgroundImage: 'url(https://unsplash.it/1920/500?image=15)' }} data-year="2015">
                                    <div className="swiper-slide-content">
                                        <span className="timeline-year">2015</span>
                                        <h4 className="timeline-title">Our nice super title</h4>
                                        <p className="timeline-text">Lorem ipsum dolor site amet, consectetur adipscing elit, sed do eisumod tempor incididut ut labore et dolore magna aliqua. Ut enim ad mimim venjam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                    </div>
                                </div>
                                <div className="swiper-slide" style={{ backgroundImage: 'url(https://unsplash.it/1920/500?image=16)' }} data-year="2016">
                                    <div className="swiper-slide-content">
                                        <span className="timeline-year">2016</span>
                                        <h4 className="timeline-title">Our nice super title</h4>
                                        <p className="timeline-text">Lorem ipsum dolor site amet, consectetur adipscing elit, sed do eisumod tempor incididut ut labore et dolore magna aliqua. Ut enim ad mimim venjam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                    </div>
                                </div>
                                <div className="swiper-slide" style={{ backgroundImage: 'url(https://unsplash.it/1920/500?image=16)' }} data-year="2017">
                                    <div className="swiper-slide-content">
                                        <span className="timeline-year">2017</span>
                                        <h4 className="timeline-title">Our nice super title</h4>
                                        <p className="timeline-text">Lorem ipsum dolor site amet, consectetur adipscing elit, sed do eisumod tempor incididut ut labore et dolore magna aliqua. Ut enim ad mimim venjam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-button-prev" onClick={handlePrevButtonClick}></div>
                            <div className="swiper-button-next" onClick={handleNextButtonClick}></div>
                            <div className="swiper-pagination"></div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Schedule;
