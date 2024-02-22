import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom'; // Import Link from react-router-dom
import './Tshirtdetails.css'; // Import CSS file
import t1 from './t1.png';
import t2 from './t2.png';
import t3 from './t3.png';
import t4 from './t4.png';
const Tshirtdetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/merchandise/tshirtdetails/checkout/${id}`);
  }
  const handleSmallImageClick = (index) => {
    const mainImg = document.getElementById('MainImg');
    const smallImgs = document.getElementsByClassName('small-img');
    mainImg.src = smallImgs[index].src;
  };

  return (
    <section id="merchandise" className="merchandise">
      <div className="single-tshirt-image">
        <img src={t1} id="MainImg" alt="" />

        <div className="small-tshirt-group">
          <div className="small-tshirt-col">
            <img
              src={t1}
              width="100%"
              className="small-img"
              alt=""
              onClick={() => handleSmallImageClick(0)}
            />
          </div>
          <div className="small-tshirt-col">
            <img
              src={t2}
              width="100%"
              className="small-img"
              alt=""
              onClick={() => handleSmallImageClick(1)}
            />
          </div>
          <div className="small-tshirt-col">
            <img
              src={t3}
              width="100%"
              className="small-img"
              alt=""
              onClick={() => handleSmallImageClick(2)}
            />
          </div>
          <div className="small-tshirt-col">
            <img
              src={t4}
              width="100%"
              className="small-img"
              alt=""
              onClick={() => handleSmallImageClick(3)}
            />
          </div>
        </div>
      </div>

      <div className="single-tshirt-details">
        <h2 style={{ fontFamily: 'Roboto' }}>Basic Utkansh T-shirt</h2>
        <h3>₹350.00</h3>

        <button onClick={handleClick}>Book Now</button>

        <h4>Product Details</h4>
        <span>
        Indulge in the eternal charm of simplicity with our Classic Utkansh T-Shirt! 🌟 This design showcases the iconic Utkansh logo in a clean and minimalist style, letting the festival's essence shine through effortlessly. 🎨 The timeless Utkansh lettering is seamlessly incorporated, crafting a refined and adaptable appearance ideal for any occasion. 🎓 Whether you're partaking in events, workshops, or just flaunting your college fest spirit, this T-shirt is the ultimate pick for those who cherish understated elegance. 💫
        </span>
      </div>
    </section>
  );
};

export default Tshirtdetails;
