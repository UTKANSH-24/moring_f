import React, { useState } from 'react';
import toast from 'react-hot-toast';
import QRPopup from '../QRCode';
import { useParams } from 'react-router-dom';
import axiosInstance from '../../Helper/axiosInstance';

function EventRegistrationForm() {

    const { eventId } = useParams();

    const [formData, setFormData] = useState({
        teamName: '',
        college: '',
        paymentReferenceNumber: '',
        participants: [{ participantName: '', participantBloodGroup: '', participantPhone: '' }],
    });
    const [formErrors, setFormErrors] = useState({});
    const [popup, setPopup] = useState(false);

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
        // console.log(formData);
    };


    const addMember = () => {
        setFormData({
            ...formData,
            participants: [...formData.participants, { participantName: '', participantBloodGroup: '', participantPhone: '' }],
        });
    };

    const deleteLastMember = () => {
        if (formData.participants.length > 0) {
            const newParticipants = [...formData.participants];
            newParticipants.pop();
            setFormData({ ...formData, participants: newParticipants });
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
                const response = await axiosInstance.post('/event/addTeamToEventByEventId', { formData, eventId });
                // console.log(response.data);
                if (response.data.success) {
                    toast.success('Form submitted successfully');
                    setFormData({
                        teamName: '',
                        college: '',
                        paymentReferenceNumber: '',
                        participants: [{ participantName: '', participantBloodGroup: '', participantPhone: '' }],
                    });
                    setFormErrors({});
                } else {
                    toast.error(response.data.message);
                }
            } catch (error) {
                console.error('Error:', error);
                toast.error('Failed to submit form');
            }
        }
    };

    return (
        <div className="container">
            <div className="row">
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
                                                <label htmlFor={`participantName`} className="form-label">Full Name</label>
                                                <input type="text" className={`form-control`} id={`participantName`} name={`participantName`} value={member[0]} onChange={(e) => handleChange(e, index)} required />
                                            </div>
                                            <div className="col-md-4 mb-3">
                                                <label htmlFor={`participantBloodGroup`} className="form-label">Blood group</label>
                                                <input type="text" className={`form-control`} id={`participantBloodGroup`} name={`participantBloodGroup`} value={member[1]} onChange={(e) => handleChange(e, index)} required />
                                            </div>
                                            <div className="col-md-4 mb-3">
                                                <label htmlFor={`participantPhone`} className="form-label">Mobile Number</label>
                                                <input type="text" className={`form-control`} id={`participantPhone`} name={`participantPhone`} value={member[2]} onChange={(e) => handleChange(e, index)} required />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                <div className="row justify-content-center">
                                    <div className="col-md-4 mb-3">
                                        <button className="btn btn-success w-100 mb-2" type="button" onClick={addMember}>Add Member</button>
                                    </div>
                                    <div className="col-md-4 mb-3">
                                        <button className="btn btn-secondary w-100 mb-2" type="button" onClick={deleteLastMember}>Delete Last Member</button>
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
