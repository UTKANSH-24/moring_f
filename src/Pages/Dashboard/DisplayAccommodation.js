import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import Layout from "../../Layout/Layout";

import axiosInstance from "../../Helper/axiosInstance";
import ExportCSV from "../../ExportCsv/ExportCSV";
import toast from "react-hot-toast";
import PopupRejectionMail from "../PopupRejectionMail";

const DisplayAccommodation = () => {
    const [accommodationDetails, setAccommodationDetails] = useState([]);
    const { accommodationType, verified } = useParams();
    const [popUp, setPopup] = useState(false);


    const getAccommodationDetails = async () => {
        if (verified === '1') {
            const res = await axiosInstance.post(`/accommodation/getVerifiedAccommodationList/${accommodationType}`);
            setAccommodationDetails(res.data.data);
            // console.log('res', res.data.data);
        } else {
            const res = await axiosInstance.post(`/accommodation/getUnverifiedAccommodationList/${accommodationType}`);
            setAccommodationDetails(res.data.data);
            // console.log('res un', res.data.data);
        }
    }

    useEffect(() => {
        (async () => {
            await getAccommodationDetails();
            // console.log('okj', accommodationDetails);
        })();

    }, []);

    const [currentOrder, setCurrentOrder] = useState(0);

    const handleVerificationStatus = async (newState) => {

        if (newState === false) {
            setPopup(true);
        } else {
            const res = await axiosInstance.post('/accommodation/changeAccommodationVerificationStatus', {
                accommodationId: accommodationDetails[currentOrder]._id,
                status: newState,
            });
            if (res?.data.success) {
                toast.success('Updated');
                await getAccommodationDetails();
            }
            // console.log(res.data.message);
        }

    };

    const handleDelete = async () => {
        console.log(accommodationDetails);
        try {
            const res = await axiosInstance.post('/accommodation/deleteAccommodation', {
                accommodationId: accommodationDetails[currentOrder]._id
            });
            if (res?.data?.success) {
                toast.success(res.data.message);
                await getAccommodationDetails();
            }
        } catch (err) {
            console.log(err);
        }
    }



    const fileName = `accommodation_record_${(verified === '1' ? 'verified' : 'unverified')}_accommodationId_${accommodationType}`;

    const csvHeaders = [
        { label: 'Accommodation Type', key: 'accommodationType' },
        { label: 'Registrant email', key: 'registrantId.email' },
        { label: 'Number of Persons', key: 'numberOfPersons' },
        { label: 'Number of Days', key: 'numberOfDays' },
        { label: 'Payment Reference Number', key: 'paymentReferenceNumber' },
        { label: 'Payment Verified', key: 'paymentVerified' },
    ];

    //label: Title of column in csv file
    //kay: should use same key, that is in Database(schema).

    return (
        // <Layout>
        <div className="flex flex-col gap-10 items-center justify-center min-h-[90vh] py-10 text-white mx-[5%]" style={{ minHeight: '100vh' }}>
            {/* displaying the course name */}

            <h1 className="text-center text-2xl font-semibold text-yellow-500" style={{ marginTop: '50px' }}>
                Accommodation Type : {accommodationType}
            </h1>

            {popUp && <PopupRejectionMail
                subject={'Accommodation payment rejection'}
                email={accommodationDetails[currentOrder]?.registrantId.email}
                setPopup={setPopup} />}

            {(accommodationDetails.length > 0) ? <div className="flex justify-center gap-10 w-full">
                {/* left section for playing the video and displaying course details to admin */}
                <div className="space-y-5 w-[28rem] p-4 rounded-lg shadow-[0_0_10px_black]">

                    <div>
                        <h3>
                            <span className="text-yellow-500 line-clamp-4">Applicant Email : </span>
                            {accommodationDetails[currentOrder]?.registrantId.email}
                        </h3>
                        <p>
                            <span className="text-yellow-500 line-clamp-4">
                                Accommodation Type :{accommodationDetails[currentOrder].accommodationType}<br />
                                Number of persons :{accommodationDetails[currentOrder].numberOfPersons}<br />
                                Number of Days :{accommodationDetails[currentOrder].numberOfDays}<br />
                                Payment Reference Number :{accommodationDetails[currentOrder].paymentReferenceNumber}<br />
                            </span>
                        </p>
                        <br />

                        <div className="text-center space-x-4">
                            {(verified === '0') && <div>
                                <button
                                    onClick={() => handleVerificationStatus(true)}
                                    className="btn-primary px-2 py-1 rounded-md font-semibold text-sm bg-green-500 hover:bg-green-600 text-white"
                                >
                                    Verify
                                </button>
                                <button
                                    onClick={() => {
                                        setPopup(true);
                                        handleVerificationStatus(false)
                                    }}
                                    className="btn-primary px-2 py-1 rounded-md font-semibold text-sm bg-red-500 hover:bg-red-600 text-white"
                                >
                                    Reject
                                </button>
                                <button
                                    onClick={() => handleDelete()}
                                    className="btn-primary px-2 py-1 rounded-md font-semibold text-sm bg-red-500 hover:bg-red-600 text-white"
                                >
                                    Delete
                                </button>
                            </div>}
                        </div>
                    </div>
                </div>


                <ul className="w-[28rem] p-4 rounded-lg shadow-[0_0_10px_black] space-y-4">
                    <li className="font-semibold text-xl text-yellow-500 flex items-center justify-between">
                        <p>Order List</p>
                        {accommodationDetails && <ExportCSV data={accommodationDetails} headers={csvHeaders} fileName={fileName} />}
                    </li>
                    {accommodationDetails &&
                        accommodationDetails.map((element, index) => {
                            return (<li className="space-y-2" key={element._id}>
                                <p
                                    className="cursor-pointer"
                                    onClick={() => setCurrentOrder(index)}
                                >
                                    <span className="text-yellow-500">
                                        {" "}
                                        Participant {index + 1} :{" "}
                                    </span>
                                    {element?.registrantId.email}
                                </p>
                            </li>
                            );
                        })}
                </ul>
            </div> : (
                <h1 className="text-center text-3xl font-semibold">No Accommodation Yet.</h1>
            )}
        </div>
        // </Layout>
    );
};

export default DisplayAccommodation;
