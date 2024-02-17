import React, { useState } from "react";
import { toast } from "react-hot-toast";
import axiosInstance from "../Helper/axiosInstance";
import "./Popup.css";


const PopupRejectionMail = ({ email, setPopup, subject }) => {
    const [userInput, setUserInput] = useState({
        message: "",
    });

    // Function to handle the input change
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserInput({ ...userInput, [name]: value });
    };

    // Function to send form data to backend
    const handleFormSubmit = async (event) => {
        event.preventDefault();

        // Check for empty fields
        if (!userInput.message) {
            toast.error("All fields are mandatory");
            return;
        }

        try {
            // Send form data to backend

            const data = { email, subject, message: userInput.message };
            console.log("Popup Data :", data);
            const res = axiosInstance.post('/rejectionMail', data)
                .then(() => {
                    console.log('Sended.')
                    // Clear input fields after successful submission
                    setUserInput({
                        message: "",
                    });
                    // Close the popup
                    setPopup(false);
                });
            toast.promise(res, {
                loading: "Sending E-mail",
                success: "Sent Successfully",
                error: 'Failed to send',
            });

        } catch (error) {
            toast.error("Operation failed...");
        }
    };

    // Function to handle cancel button click
    const handleCancelClick = () => {
        // Close the popup
        setPopup(false);
    };

    return (
        <div className="popup-container">
            <div className="popup-content">

                <form onSubmit={handleFormSubmit} className="popup-form">
                    <h1 className="popup-title">Write the reason</h1>


                    <div className="popup-input-group">
                        <textarea
                            name="message"
                            id="message"
                            value={userInput.message}
                            onChange={handleInputChange}
                            className="popup-textarea"
                            placeholder="Enter your message"
                        ></textarea>
                    </div>
                    <div className="flex space-x-4">
                        <button
                            type="button"
                            className="bg-gray-300 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-400 focus:outline-none focus:ring focus:border-blue-300"
                            onClick={handleCancelClick}
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:border-blue-300"
                        >
                            Submit
                        </button>

                    </div>

                </form>
            </div>
        </div>
    );
};

export default PopupRejectionMail;
