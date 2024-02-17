import React, { useState } from 'react';
import toast from 'react-hot-toast';
import QRPopup from '../QRCode';
import {  useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
// import { useDispatch } from "react-redux";
import axiosInstance from '../../Helper/axiosInstance';

function AccomodationRegistrationForm() {
    const navigate = useNavigate();
   
    // const dispatch = useDispatch();
    const { planId } = useParams();
    const [formData, setFormData] = useState({
        accommodationType: planId,
        // teamName: '',
        college: '',
        paymentReferenceNumber: '',
        numberOfPersons: 1,
        numberOfDays: 1,
        persons: [{ participantName: '', participantEmail: '', participantPhone: '' }],
    });
    const [formErrors, setFormErrors] = useState({});
    const [popup, setPopup] = useState(false);


    const handleChange = (e, index) => {
        const { name, value } = e.target;
        setFormData(prevFormData => {
            if (name.startsWith('participant')) {
                return {
                    ...prevFormData,
                    persons: prevFormData.persons.map((participant, i) =>
                        i === index ? { ...participant, [name]: value } : participant
                    )
                };
            } else {
                return { ...prevFormData, [name]: value };
            }
        });
    };

    const addMember = () => {
        if (formData.persons.length < formData.numberOfPersons) {
            setFormData({
                ...formData,
                persons: [...formData.persons, { participantName: '', participantEmail: '', participantPhone: '' }],
            });
        } else {
            toast.error(`You have reached the maximum allowed persons (${formData.numberOfPersons}).`);
        }
    };

    const deleteLastMember = () => {
        if (formData.persons.length > 1) {
            const newParticipants = [...formData.persons];
            newParticipants.pop();
            setFormData({ ...formData, persons: newParticipants });
        } else {
            toast.error(`You need at least one participant.`);
        }
    };

    const registerAccommodation = async () => {
        if (formData.persons.length !== formData.numberOfPersons) { toast.error('Enter the details of all the members.'); }
        else {
            const errors = {};
            for (const key in formData) {
                if (typeof formData[key] === 'string' && !formData[key].trim()) {
                    errors[key] = `${key.charAt(0).toUpperCase() + key.slice(1)} is required`;
                }
            }
            formData.persons.forEach((member, index) => {
                for (const key in member) {
                    if (!(member[key].trim())) {
                        errors[`${key}${index}`] = `${key.charAt(0).toUpperCase() + key.slice(1)} is required`;
                    }
                }
            });
            if (Object.keys(errors).length === 0) {
                try {
                    // console.log("formData", formData);
                    const url = `accommodation/registerAccommodation`
                    const response = await axiosInstance.post(url, formData);
                    // console.log("response", response);
                    if (response?.data.success) {
                        setFormData({
                            // teamName: '',
                            college: '',
                            paymentReferenceNumber: '',
                            numberOfPersons: 1,
                            numberOfDays: 1,
                            persons: [{ participantName: '', participantEmail: '', participantPhone: '' }],
                        });
                        toast.success('Request Submitted.')
                        navigate(`/accomodationPage`);
                        setFormErrors({});
                    } else {
                        toast.error(response?.data.message);
                    }
                } catch (error) {
                    console.error('Error:', error);
                    toast.error('Failed to submit form');
                }
            } else {
                setFormErrors(errors);
            }
        }
    };

    return (
        <div className="container" style={{ paddingTop: '100px' , minHeight: '90vh' }}>
            <div className="row">
                <div className="col-sm-8 col-md-9 col-lg-12 mx-auto">
                    <div className="card card-signin my-5" id="user_container">
                        <div className="card-body">
                            <h1 className="card-title text-center" id="titleForEvent">Event Title</h1>
                            <div className="container">
                                <div className="row">
                                    {/* <div className="col-md-6 col-lg-4 mb-3">
                                        <label htmlFor="teamName" className="form-label">Team Name</label>
                                        <input type="text" className={`form-control ${formErrors.teamName ? 'is-invalid' : ''}`} id="teamName" name="teamName" value={formData.teamName} onChange={handleChange} required />
                                        {formErrors.teamName && <div className="invalid-feedback">{formErrors.teamName}</div>}
                                    </div> */}
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
                                    <div className="col-md-6 col-lg-4 mb-3">
                                        <label htmlFor="numberOfPersons" className="form-label">Number of Members</label>
                                        <input type="number" className={`form-control ${formErrors.numberOfPersons ? 'is-invalid' : ''}`} id="numberOfPersons" name="numberOfPersons" value={formData.numberOfPersons} onChange={handleChange} required />
                                        {formErrors.numberOfPersons && <div className="invalid-feedback">{formErrors.numberOfPersons}</div>}
                                    </div>
                                    <div className="col-md-6 col-lg-4 mb-3">
                                        <label htmlFor="numberOfDays" className="form-label">Number of Days</label>
                                        <input type="number" className={`form-control ${formErrors.numberOfDays ? 'is-invalid' : ''}`} id="numberOfDays" name="numberOfDays" value={formData.numberOfDays} onChange={handleChange} required />
                                        {formErrors.numberOfDays && <div className="invalid-feedback">{formErrors.numberOfDays}</div>}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {popup && <QRPopup setPopup={setPopup} />}
                        <div className="card-body">
                            <form className="needs-validation container mx-auto" noValidate>
                                {formData.persons.map((member, index) => (
                                    <div key={index} className="mb-4">
                                        <h2 style={{ color: 'grey', textAlign: 'center', marginBottom: '1rem' }}>Details of Member {index + 1}</h2>
                                        <div className="row">
                                            <div className="col-md-4 mb-3">
                                                <label htmlFor={`participantName${index}`} className="form-label">Full Name</label>
                                                <input type="text" className={`form-control ${formErrors.participantName ? 'is-invalid' : ''}`} id={`participantName${index}`} name="participantName" value={member.participantName} onChange={(e) => handleChange(e, index)} required />
                                                {formErrors.participantName && <div className="invalid-feedback">{formErrors.participantName}</div>}
                                            </div>
                                            <div className="col-md-4 mb-3">
                                                <label htmlFor={`participantEmail${index}`} className="form-label">Email</label>
                                                <input type="email" className={`form-control ${formErrors.participantEmail ? 'is-invalid' : ''}`} id={`participantEmail${index}`} name="participantEmail" value={member.participantEmail} onChange={(e) => handleChange(e, index)} required />
                                                {formErrors.participantEmail && <div className="invalid-feedback">{formErrors.participantEmail}</div>}
                                            </div>
                                            <div className="col-md-4 mb-3">
                                                <label htmlFor={`participantPhone${index}`} className="form-label">Mobile Number</label>
                                                <input type="text" className={`form-control ${formErrors.participantPhone ? 'is-invalid' : ''}`} id={`participantPhone${index}`} name="participantPhone" value={member.participantPhone} onChange={(e) => handleChange(e, index)} required />
                                                {formErrors.participantPhone && <div className="invalid-feedback">{formErrors.participantPhone}</div>}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                <div className="row justify-content-center">
                                    <div className="col-md-4 mb-3">
                                        <button className="btn btn-success w-100 mb-2" type="button" onClick={addMember}>Add Member</button>
                                    </div>
                                    <div className="col-md-4 mb-3">
                                        <button className="btn btn-secondary w-100 mb-2" type="button" onClick={deleteLastMember} disabled={formData.persons.length <= 1}>Delete Last Member</button>
                                    </div>
                                    <div className="col-md-4 mb-3">
                                        <button className="btn btn-danger w-100" type="button" onClick={registerAccommodation}>Submit</button>
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
export default AccomodationRegistrationForm;