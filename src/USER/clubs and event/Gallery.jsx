import React, { useEffect } from 'react';
import '../css/gallery.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useLocation } from 'react-router-dom';


export default function Gallery() {

    const galleryItems = [
        'https://res.cloudinary.com/dijzvijky/image/upload/v1677902291/gallery/1_prffnm.jpg',
        'https://res.cloudinary.com/dijzvijky/image/upload/v1677902284/gallery/1_2_jcq82k.jpg',
        'https://res.cloudinary.com/dijzvijky/image/upload/v1677902284/gallery/1_3_hqdecm.jpg',
        'https://res.cloudinary.com/dijzvijky/image/upload/v1677902286/gallery/1_4_vlvtip.jpg',
        'https://res.cloudinary.com/dijzvijky/image/upload/v1677902287/gallery/1_7_t6x92w.jpg',
        'https://res.cloudinary.com/dijzvijky/image/upload/v1677902287/gallery/1_6_n7toyb.jpg',
        'https://res.cloudinary.com/dijzvijky/image/upload/v1677902287/gallery/1_8_kshskq.jpg',
        'https://res.cloudinary.com/dijzvijky/image/upload/v1677902288/gallery/1_9_yoexyu.jpg'
    ];

    const location = useLocation();
    let margin = "90px 0px 0px 0px";
    
    useEffect(() => {
        const next = document.querySelector('.next-gallery');
        const prev = document.querySelector('.prev-gallery');

        const nextClickHandler = () => {
            const items = document.querySelectorAll('.item-gallery');
            document.querySelector('.slide-gallery').appendChild(items[0]);
        };

        const prevClickHandler = () => {
            const items = document.querySelectorAll('.item-gallery');
            document.querySelector('.slide-gallery').prepend(items[items.length - 1]);
        };

        next.addEventListener('click', nextClickHandler);
        prev.addEventListener('click', prevClickHandler);

        // Cleanup function to remove event listeners
        return () => {
            next.removeEventListener('click', nextClickHandler);
            prev.removeEventListener('click', prevClickHandler);
        };
    }, []); // Empty dependency array ensures this effect runs only once after the component is mounted

    return (
        <div className='galleryX'>
            {(location.pathname ==='/Gallery')&&<div style={{ height: '5rem' }}></div>}
            <h2 className="titl" style={{ textAlign: 'center', margin: `${margin}`, fontSize: '3.6rem', zIndex: 100 }}>
                Gallery
            </h2>
            <br />
            <section className="galleryC">
                <div className="gallery-sec">
                    <div className="gallery_container">
                        <div className="slide-gallery">
                            {galleryItems.map((item, index) => (
                                <div key={index} className={`item-gallery`} style={{ backgroundImage: `url(${item})` }}>
                                    <div className="content-gallery"></div>
                                </div>
                            ))}
                        </div>
                        <div className="gallery_button">
                            <button className="prev-gallery">
                                {/* <img src="./arrow-left-s-fill.svg" alt="Previous" srcSet /> */}
                                <FontAwesomeIcon icon={faArrowLeft} size="10x" style={{ color: 'black' }} />
                            </button>
                            <button className="next-gallery" >
                                <FontAwesomeIcon icon={faArrowRight} size="10x" style={{ color: 'black' }} />
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}