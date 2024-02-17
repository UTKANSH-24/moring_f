import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ExportCSV from "../../ExportCsv/ExportCSV";

import axiosInstance from "../../Helper/axiosInstance";
import toast from "react-hot-toast";
import PopupRejectionMail from "../PopupRejectionMail";


const DisplayMerchandise = () => {
    const [orderDetails, setOrderDetails] = useState([]);
    const { clothId, verified } = useParams();
    const [popUp, setPopup] = useState(false);

    // console.log('clothId', clothId, 'verified', verified);

    const getOrderDetails = async () => {
        if (verified === '1') {
            const res = await axiosInstance.post(`/merchandise/getVerifiedPaymentList/${clothId}`);
            setOrderDetails(res.data.data);
            // console.log('res', res.data.data);
        } else {
            const res = await axiosInstance.post(`/merchandise/getUnverifiedPaymentList/${clothId}`);
            setOrderDetails(res.data.data);
            // console.log('res un', res.data.data);
        }
    }

    useEffect(() => {
        (async () => {
            await getOrderDetails();
            // console.log('okj', orderDetails);
        })();

    }, []);

    const [currentOrder, setCurrentOrder] = useState(0);

    const handleVerificationStatus = async (newState) => {

        if (newState == false) {
            setPopup(true);
        } else {
            const res = await axiosInstance.post('/merchandise/changeOrderVerificationStatus', {
                orderId: orderDetails[currentOrder]._id,
                status: newState,
            });
            // console.log(res.data);
            if (res.data.success) {
                await getOrderDetails();
                toast.success('Reloaded');
            }
            // console.log(res.data.message);
        }

    };

    const fileName = `merchandise_record_${(verified === '1' ? 'verified' : 'unverified')}_clothId_${clothId}`;

    const csvHeaders = [
        { label: 'Print Name', key: 'nameOnCloth' },
        { label: 'Applicant Name', key: 'applicantName' },
        { label: 'Quantity', key: 'quantity' },
        { label: 'Size', key: 'sizeOfCloth' },
        { label: 'Hostel Name', key: 'hostelName' },
        { label: 'Payment Reference Number', key: 'paymentReferenceNumber' },
        { label: 'Payment Verification status', key: 'paymentReferenceNumber' },
        { label: 'Roll Number', key: 'rollNumber' },
        { label: 'Phone Number', key: 'phoneNumber' },
        { label: 'WhatsApp Number', key: 'wtpNumber' },
    ];
    //label: Title of column in csv file
    //kay: should use same key, that is in Database(schema).

    const handleDelete = async () => {
        console.log(orderDetails);
        try {
            const res = await axiosInstance.post('/merchandise/deleteMerchandise', {
                orderId: orderDetails[currentOrder]._id
            });
            if (res?.data?.success) {
                toast.success(res.data.message);
                await getOrderDetails();
            }
        } catch (err) {
            console.log(err);
        }
    }

    return (
        // <Layout>
        <div className="flex flex-col gap-10 items-center justify-center min-h-[90vh] py-10 text-white mx-[5%]" style={{ minHeight: '90vh' }}>
            {/* displaying the course name */}

            <h1 className="text-center text-2xl font-semibold text-yellow-500" style={{ marginTop: '50px' }}>
                Cloth Id : {clothId}
            </h1>
            {popUp && <PopupRejectionMail
                subject={'Merchandise payment rejection'}
                email={orderDetails[currentOrder]?.registrantId.email}
                setPopup={setPopup} />}

            {(orderDetails.length > 0) ? <div className="flex justify-center gap-10 w-full">
                {/* left section for playing the video and displaying course details to admin */}
                <div className="space-y-5 w-[28rem] p-4 rounded-lg shadow-[0_0_10px_black]">

                    <div>
                        <h1>
                            <span className="text-yellow-500">Applicant Name : </span>
                            {orderDetails[currentOrder].applicantName}
                        </h1>
                        <p>
                            <span className="text-yellow-500 line-clamp-4">
                                Payment Reference Number: {orderDetails[currentOrder].paymentReferenceNumber}<br />
                                Phone Number: {orderDetails[currentOrder].phoneNumber}<br />
                                WhatsApp Number: {orderDetails[currentOrder].wtpNumber}<br />
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


                {/* right section for displaying all the participants of the course */}
                <ul className="w-[28rem] p-4 rounded-lg shadow-[0_0_10px_black] space-y-4">
                    <li className="font-semibold text-xl text-yellow-500 flex items-center justify-between">
                        <p>Order List</p>
                        <p>{(orderDetails.length > 0) && <ExportCSV headers={csvHeaders} data={orderDetails} fileName={fileName} />}</p>
                    </li>

                    {orderDetails &&
                        orderDetails.map((element, index) => {
                            return (<li className="space-y-2" key={element._id}>
                                <p
                                    className="cursor-pointer"
                                    onClick={() => setCurrentOrder(index)}
                                >
                                    <span className="text-yellow-500">
                                        {" "}
                                        Participant {index + 1} :{" "}
                                    </span>
                                    {element?.applicantName}
                                </p>

                            </li>
                            );
                        })}
                </ul>
            </div> : (
                <h1 className="text-center text-3xl font-semibold">No Oder Yet.</h1>
            )}
        </div>
        // </Layout>
    );
};

export default DisplayMerchandise;
