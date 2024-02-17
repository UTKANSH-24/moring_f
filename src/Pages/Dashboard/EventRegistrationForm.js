import React, { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import QRPopup from '../QRCode';
import { useLocation } from 'react-router-dom';
import { useDispatch } from "react-redux";
// import axiosInstance from '../../Helper/axiosInstance';
import { addEventParticipants } from "../../Redux/participantsSlice";

function EventRegistrationForm() {
    const location = useLocation();
    const dispatch = useDispatch();
    // const { eventdetails } = location.state || {};
    const eventId = location.state.eventId;
    console.log("--eventId", eventId);
    const [formData, setFormData] = useState({
        id: eventId,
        teamName: '',
        college: '',
        paymentReferenceNumber: '',
        participants: [{ participantName: '', participantEmail: '', participantPhone: '' }],
    });
    const [formErrors, setFormErrors] = useState({});
    const [popup, setPopup] = useState(false);
    
    useEffect(() => {
        if (eventId) {
            setFormData(prevState => ({
                ...prevState,
                eventId
            }));
        }
    }, [eventId]);
    
    const handleChange = (e, index) => {
        const { name, value } = e.target;
        setFormData(prevFormData => {
            if (name.startsWith('participant')) {
                return {
                    ...prevFormData,
                    participants: prevFormData.participants.map((participant, i) =>
                        i === index ? { ...participant, [name]: value } : participant
                    )
                };
            } else {
                return { ...prevFormData, [name]: value };
            }
        });
    };

    const addMember = () => {
        if (formData.participants.length < location.state.maxParticipants) {
            setFormData({
                ...formData,
                participants: [...formData.participants, { participantName: '', participantEmail: '', participantPhone: '' }],
            });
        } else {
            toast.error(`You have reached the maximum allowed participants (${location.state.maxParticipants}).`);
        }
    };

    const deleteLastMember = () => {
        if (formData.participants.length > location.state.minParticipants) {
            const newParticipants = [...formData.participants];
            newParticipants.pop();
            setFormData({ ...formData, participants: newParticipants });
        } else {
            toast.error(`You need at least ${location.state.minParticipants} participant(s).`);
        }
    };

    const registerToEvent = async () => {
        const errors = {};
        for (const key in formData) {
            if (typeof formData[key] === 'string' && !formData[key].trim()) {
                errors[key] = `${key.charAt(0).toUpperCase() + key.slice(1)} is required`;
            }
        }
        formData.participants.forEach((member, index) => {
            for (const key in member) {
                if (!(member[key].trim())) {
                    errors[`${key}${index}`] = `${key.charAt(0).toUpperCase() + key.slice(1)} is required`;
                }
            }
        });
        if (Object.keys(errors).length === 0) {
            try {
                console.log("formData",formData);
                const response = await dispatch(addEventParticipants(formData));
                console.log("response",response);
                if (response.payload.success) {
                    // toast.success('Form submitted successfully');
                    setFormData({
                        teamName: '',
                        college: '',
                        paymentReferenceNumber: '',
                        participants: [{ participantName: '', participantEmail: '', participantPhone: '' }],
                    });
                    setFormErrors({});
                    
                } else {
                    toast.error(response.data.message);
                }
            } catch (error) {
                console.error('Error:', error);
                toast.error('Failed to submit form');
            }
        } else {
            setFormErrors(errors);
        }
    };

    return (
        <div className="container" style={{ minHeight: '90vh' }}>
            <div className="row" style={{ paddingTop: '50px' }}>
                <div className="col-sm-8 col-md-9 col-lg-12 mx-auto">
                    <div className="card card-signin my-5" id="user_container">
                        <div className="card-body">
                            <h1 className="card-title text-center" id="titleForEvent">Event Title</h1>
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-6 col-lg-4 mb-3">
                                        <label htmlFor="teamName" className="form-label">Team Name</label>
                                        <input type="text" className={`form-control ${formErrors.teamName ? 'is-invalid' : ''}`} id="teamName" name="teamName" value={formData.teamName} onChange={handleChange} required />
                                        {formErrors.teamName && <div className="invalid-feedback">{formErrors.teamName}</div>}
                                    </div>
                                    <div className="col-md-6 col-lg-4 mb-3">
                                        <label htmlFor="college" className="form-label">College Name</label>
                                        <input type="text" className={`form-control ${formErrors.college ? 'is-invalid' : ''}`} id="college" name="college" value={formData.college} onChange={handleChange} required />
                                        {formErrors.college && <div className="invalid-feedback">{formErrors.college}</div>}
                                    </div>
                                    <div className="col-md-6 col-lg-4 mb-3">
                                        <label htmlFor="paymentReferenceNumber" className="form-label">Payment Ref. No.</label>
                                        <div className="input-group">
                                            <input type="text" className={`form-control ${formErrors.paymentReferenceNumber ? 'is-invalid' : ''}`} id="paymentReferenceNumber" name="paymentReferenceNumber" value={formData.paymentReferenceNumber} onChange={handleChange} required />
                                            <button className="btn btn-success" type="button" onClick={() => setPopup(true)} style={{ zIndex: '0' }}>Open QR</button>
                                        </div>
                                        {formErrors.paymentReferenceNumber && <div className="invalid-feedback">{formErrors.paymentReferenceNumber}</div>}
                                        <div className="mt-3">
                                            <button className="btn btn-success w-100 d-md-none mb-3" type="button" onClick={() => setPopup(true)}>Open QR</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {popup && <QRPopup setPopup={setPopup} />}
                        <div className="card-body">
                            <form className="needs-validation container mx-auto" noValidate>
                                {formData.participants.map((member, index) => (
                                    <div key={index} className="mb-4">
                                        <h2 style={{ color: 'grey', textAlign: 'center', marginBottom: '1rem' }}>Details of Member {index + 1}</h2>
                                        <div className="row">
                                            <div className="col-md-4 mb-3">
                                                <label htmlFor={`participantName${index}`} className="form-label">Full Name</label>
                                                <input type="text" className={`form-control ${formErrors[`participantName${index}`] ? 'is-invalid' : ''}`} id={`participantName${index}`} name={`participantName`} value={member.participantName} onChange={(e) => handleChange(e, index)} required />
                                                {formErrors[`participantName${index}`] && <div className="invalid-feedback">{formErrors[`participantName${index}`]}</div>}
                                            </div>
                                            <div className="col-md-4 mb-3">
                                                <label htmlFor={`participantEmail${index}`} className="form-label">Email</label>
                                                <input type="email" className={`form-control ${formErrors[`participantEmail${index}`] ? 'is-invalid' : ''}`} id={`participantEmail${index}`} name={`participantEmail`} value={member.participantEmail} onChange={(e) => handleChange(e, index)} required />
                                                {formErrors[`participantEmail${index}`] && <div className="invalid-feedback">{formErrors[`participantEmail${index}`]}</div>}
                                            </div>
                                            <div className="col-md-4 mb-3">
                                                <label htmlFor={`participantPhone${index}`} className="form-label">Mobile Number</label>
                                                <input type="text" className={`form-control ${formErrors[`participantPhone${index}`] ? 'is-invalid' : ''}`} id={`participantPhone${index}`} name={`participantPhone`} value={member.participantPhone} onChange={(e) => handleChange(e, index)} required />
                                                {formErrors[`participantPhone${index}`] && <div className="invalid-feedback">{formErrors[`participantPhone${index}`]}</div>}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                <div className="row justify-content-center">
                                    <div className="col-md-4 mb-3">
                                        <button className="btn btn-success w-100 mb-2" type="button" onClick={addMember}>Add Member</button>
                                    </div>
                                    <div className="col-md-4 mb-3">
                                        <button className="btn btn-secondary w-100 mb-2" type="button" onClick={deleteLastMember} disabled={formData.participants.length <= 1}>Delete Last Member</button>
                                    </div>
                                    <div className="col-md-4 mb-3">
                                        <button className="btn btn-danger w-100" type="button" onClick={registerToEvent}>Submit</button>
                                    </div>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default EventRegistrationForm;
