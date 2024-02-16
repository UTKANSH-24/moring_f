import React from "react";
import qr from './qrCode.jpg';

const QRPopup = ({ setPopup }) => {
    const handleCloseClick = () => {
        // Close the popup
        setPopup(false);
    };

    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75 z-index-100" style={{zIndex:'3'}}> 
            <div className="bg-white rounded-lg p-8 max-w-md flex flex-col items-center">
                <img src={qr} alt="QR Code" className="w-full mb-4" style={{ height: '45vh', width:'auto', zIndex:'3'}} />
                <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={handleCloseClick}>
                    Close
                </button>
            </div>
        </div>
    );
};

export default QRPopup;
