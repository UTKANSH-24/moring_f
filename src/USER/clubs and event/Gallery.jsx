import React, { useEffect } from 'react';
import '../css/gallery.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useLocation } from 'react-router-dom';


export default function Gallery() {

    const galleryItems = [
        'https://i.ibb.co/qCkd9jS/img1.jpg',
        'https://i.ibb.co/jrRb11q/img2.jpg',
        'https://i.ibb.co/NSwVv8D/img3.jpg',
        'https://i.ibb.co/Bq4Q0M8/img4.jpg',
        'https://i.ibb.co/jTQfmTq/img5.jpg',
        'https://i.ibb.co/RNkk6L0/img6.jpg'
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