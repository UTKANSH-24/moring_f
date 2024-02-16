import React, { useState } from 'react';
import './Checkout.css'
import QRPopup from '../../Pages/QRCode';
import toast from 'react-hot-toast';
import axiosInstance from '../../Helper/axiosInstance';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'; // Import Link from react-router-dom


const MerchandiseForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [checkoutDisabled, setCheckoutDisabled] = useState(true);
    const [formData, setFormData] = useState({
        nameOnCloth: '',
        applicantName: '',
        clothId: id,
        quantity: 1,
        sizeOfCloth: '',
        hostelName: '',
        paymentReferenceNumber: '',
        rollNumber: '',
        phoneNumber: '',
        wtpNumber: '',
        email: '',
    });


    const [popup, setPopup] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    }


    const handleInputChange = () => {
        const personalForm = document.getElementById("personal-form");
        const tshirtForm = document.getElementById("tshirt-form");

        const areFormsFilled = () => {
            const personalData = new FormData(personalForm);
            const tshirtData = new FormData(tshirtForm);
            for (let value of personalData.values()) {
                if (!value) return false;
            }
            for (let value of tshirtData.values()) {
                if (!value) return false;
            }
            return true;
        }

        setCheckoutDisabled(!areFormsFilled());
    }

    const handleCheckoutButton = async (event) => {
        event.preventDefault();
        try {
            const url = '/merchandise/registerTshirt';
            const res = await axiosInstance.post(url, formData);
            if (res?.data.success) {

                toast.success(res.data.message);
                setFormData({
                    nameOnCloth: '',
                    applicantName: '',
                    quantity: '',
                    sizeOfCloth: '',
                    hostelName: '',
                    paymentReferenceNumber: '',
                    rollNumber: '',
                    phoneNumber: '',
                    wtpNumber: '',
                    email: '',
                });
                navigate(`/merchandise`);


            } else {
                toast.error(res.data.message);
            }

        } catch (err) {
            console.log(err);
            toast.error('Server Error');
        }
    }


    return (
        
        <div className="containercontact">
            <div className="left-section">
                <form id="personal-form" onChange={handleInputChange}>
                    <h2 style={{ color: 'rgb(71, 71, 71)', marginBottom: '20px' }}>Personal Details</h2>
                    <label htmlFor="name">Applicant Name</label>
                    <input type="text" id="name" name="applicantName" onChange={handleChange} value={formData.applicantName} required />
                    <label htmlFor="roll">Roll Number</label>
                    <input type="text" id="roll" name="rollNumber" onChange={handleChange} value={formData.rollNumber} required />
                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" id="phone" name="phoneNumber" onChange={handleChange} value={formData.phoneNumber} required />
                    <label htmlFor="whatsapp">WhatsApp Number</label>
                    <input type="tel" id="whatsapp" name="wtpNumber" onChange={handleChange} value={formData.wtpNumber} required />
                    <label htmlFor="email">Email Address</label>
                    <input type="email" id="email" name="email" onChange={handleChange} value={formData.email} required />
                    <label htmlFor="hostel">Hostel Name</label>
                    <input type="text" id="hostel" name="hostelName" onChange={handleChange} value={formData.hostelName} required />
                    <p id="personal-message"></p>
                </form>
            </div>
            <div className="right-section">
                <div className="upper-section">
                    <form id="tshirt-form" onChange={handleInputChange}>
                        <h2 style={{ color: 'rgb(71, 71, 71)', marginBottom: '20px' }}>T-Shirt Details</h2>
                        <label htmlFor="print">Name to Print</label>
                        <input type="text" id="print" name="nameOnCloth" onChange={handleChange} value={formData.nameOnCloth} required />
                        <label htmlFor="size">Size</label>
                        <select id="size" name="sizeOfCloth" onChange={handleChange} value={formData.sizeOfCloth} required>
                            <option value="">Select a size</option>
                            <option value="S">Small</option>
                            <option value="M">Medium</option>
                            <option value="L">Large</option>
                            <option value="XL">Extra Large</option>
                        </select>
                        <label htmlFor="quantity">Quantity</label>
                        <input type="number" id="quantity" name="quantity" min="1" max="10" onChange={handleChange} value={formData.quantity} required />
                        <div>
                            Payable amount: ₹{formData.quantity * 350}
                        </div>
                        <p id="tshirt-message"></p>
                        <button style={{alignItems:'center'}} id="checkout-button" onClick={() => setPopup(true)} >
                            <h3 style={{textAlign:'center'}}>Make Payment</h3>
                        </button>
                        <label htmlFor="reference">Enter the reference number of payment</label>
                        <input type="text" id="reference" name="paymentReferenceNumber" onChange={handleChange} value={formData.paymentReferenceNumber} required />
                    </form>

                    {popup && <QRPopup setPopup={setPopup} />}

                </div>
                <div className="lower-section" style={{ marginTop: '75px' }}>

                    <button id="checkout-button" onClick={handleCheckoutButton} disabled={checkoutDisabled}>
                        <h3>Submit</h3>
                    </button>
                </div>

            </div>
        </div>
    );
};

export default MerchandiseForm;
