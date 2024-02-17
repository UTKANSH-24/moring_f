import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Tshirt.css';

const Merchandise = () => {
    return (
        <div className='outer' style={{minHeight:'90vh'}}>
            <h1 className="Merchandise">Merchandise</h1>
            <div className="ram ">
                <div className=" column">
                    <figure className="featured-image align-center ">
                        <img src="https://res.cloudinary.com/dijzvijky/image/upload/v1677902127/merchandise/polo_t-shirt-removebg-preview_yrxa9n.png" width="400px" height="220px" alt="Utkansh Tshirt Black" />
                    </figure>
                    <h3 className="text-center" style={{ fontFamily: 'mountains,serif', color: '#ffffff' }}>Utkansh Tshirt Black</h3>
                    <h5 className="text-center pt-2" style={{ fontFamily: 'mountains,serif', color: '#ffffff' }}>Price 350/-</h5>
                    {/* Replace anchor tag with Link */}
                    <h2 style={{ fontWeight: 'bold', color: 'blue' }} className="text-center">
                        <Link to="/merchandise/tshirtdetails/1" style={{ color: 'blue' }}>Order Now</Link>
                    </h2>
                </div>
                <div className="">
                    <figure className="featured-image ">
                        <img src="https://res.cloudinary.com/dijzvijky/image/upload/v1677902127/merchandise/round_neck-removebg-preview_pgewsb.png" width="400px" height="220px" alt="Utkansh Tshirt Gray" />
                    </figure>
                    <h3 className="text-center" style={{ fontFamily: 'mountains,serif', color: '#ffffff' }}>Utkansh Tshirt Gray</h3>
                    <h5 className="text-center pt-2" style={{ fontFamily: 'mountains,serif', color: '#ffffff' }}>Price 300/-</h5>
                    {/* Replace anchor tag with Link */}
                    <h2 style={{ fontWeight: 'bold', color: 'blue' }} className="text-center">
                        <Link to="/merchandise/tshirtdetails/2" style={{ color: 'blue' }}>Order Now</Link>
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default Merchandise;
