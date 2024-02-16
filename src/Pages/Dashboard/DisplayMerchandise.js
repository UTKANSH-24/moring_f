import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Layout from "../../Layout/Layout";
// import {
//     deleteEventParticipants,
//     getEventParticipants,
// } from "../../Redux/participantsSlice";

import axiosInstance from "../../Helper/axiosInstance";

const DisplayMerchandise = () => {
    // const dispatch = useDispatch();
    const navigate = useNavigate();

    // for getting the data from location of previous component

    // const eventDetails = useLocation().state;
    const [orderDetails, setOrderDetails] = useState([]);
    const { clothId, verified } = useParams();
    const getOrderDetails = async () => {
        if (verified==1) {
            const res = await axiosInstance.post(`/merchandise/getVerifiedPaymentList/${clothId}`);
            setOrderDetails(res.data.data);
            console.log('res',res.data.data);
        } else {
            const res = await axiosInstance.post(`/merchandise/getUnverifiedPaymentList/${clothId}`);
            setOrderDetails(res.data.data);
            console.log('res un',res.data.data);
        }
    }
    // console.log("orderDetailsed2rf2gtq3");
    // console.log(orderDetails);
    // const { participants } = useSelector((state) => state.lecture);
    // console.log("participants123");
    // console.log(participants);

    // const { role } = useSelector((state) => state.auth);


    // to play the video accordingly
    // const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

    // function to handle lecture delete
    // const handleLectureDelete = async (courseId, lectureId) => {
    //     const data = { courseId, lectureId };
    //     await dispatch(deleteEventParticipants(data));
    //     await dispatch(getEventParticipants(orderDetails._id));
    // };

    // fetching the course lecture data
    useEffect(() => {
        (async () => {
            // await dispatch(getEventParticipants(orderDetails._id));
            await getOrderDetails();
            console.log('okj',orderDetails);
        })();

    }, []);

    const [currentOrder, setCurrentOrder] = useState(0);


    return (
     
            <div className="flex flex-col gap-10 items-center justify-center min-h-[90vh] py-10 text-white mx-[5%]">
                {/* displaying the course name */}

                <h1 className="text-center text-2xl font-semibold text-yellow-500">
                    Cloth Id : {clothId}
                </h1>

                <div className="flex justify-center gap-10 w-full">
                    {/* left section for playing the video and displaying course details to admin */}
                    <div className="space-y-5 w-[28rem] p-2 rounded-lg shadow-[0_0_10px_black]">

                        <div>
                            <h1>
                                <span className="text-yellow-500">Applicant Name : </span>
                                {(currentOrder < orderDetails?.length) && orderDetails[currentOrder].applicantName}
                            </h1>
                            <p>
                                <span className="text-yellow-500 line-clamp-4">
                                    Payment Reference Number :{(currentOrder < orderDetails?.length) && orderDetails[currentOrder].paymentReferenceNumber}<br/>
                                    Phone Number: {(currentOrder < orderDetails?.length) && orderDetails[currentOrder].phoneNumber}<br />
                                    WhatsApp Number: {(currentOrder < orderDetails?.length) && orderDetails[currentOrder].wtpNumber}<br />
                                </span>
                            </p>
                        </div>
                    </div>

                    {/* right section for displaying all the participants of the course */}
                    <ul className="w-[28rem] p-2 rounded-lg shadow-[0_0_10px_black] space-y-4">
                        <li className="font-semibold text-xl text-yellow-500 flex items-center justify-between">
                            <p>Order List</p>
                            {/* {role === "ADMIN" && (
                                <button
                                    onClick={() =>
                                        navigate("/event/AddParticipant", {
                                            state: { ...orderDetails },
                                        })
                                    }
                                    className="btn-primary px-2 py-1 rounded-md font-semibold text-sm"
                                >
                                    Add New Participant
                                </button>
                            )} */}
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
                                    {/* {role === "ADMIN" && (
                                            <button
                                                onClick={() =>
                                                    handleLectureDelete(orderDetails?._id, element?._id)
                                                }
                                                className="btn-primary px-2 py-1 rounded-md font-semibold text-sm"
                                            >
                                                Delete Participant
                                            </button>
                                        )} */}
                                </li>
                                );
                            })}
                    </ul>
                </div>
            </div>
      
    );
};

export default DisplayMerchandise;
