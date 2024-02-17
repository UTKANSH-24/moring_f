import React, { useEffect, useState } from "react";
import axiosInstance from "../../Helper/axiosInstance";
import toast from "react-hot-toast";


const MyBookings = () => {
    const [allBookings, setAllBookings] = useState([]);

    const getOrderData = async () => {
        const res = await axiosInstance.post('/accommodation/getMyBookingList');
        if (res.data?.success) {
            toast.success('All Bookings')
        } else {
            toast.success('Error in fetch.')
        }
        // console.log(res.data.data);
        setAllBookings(res.data.data);
    }

    useEffect(() => {
        (async () => {
            await getOrderData();
            console.log(allBookings);
        })();
    }, []);

    return (
        // <Layout>
            <div className="flex items-center h-[90vh] justify-between py-5 px-5 gap-5 rounded-md shadow-md">
                <div className="mx-[10%] w-[80%] self-center flex flex-col items-center justify-center gap-10 mb-10">
                    <div className="flex w-full items-center justify-between">
                        <h1 className="text-center test-light text-3xl font-semibold">
                            {(allBookings.length > 0) && `My Bookings`}
                        </h1>
                    </div>
                    {(allBookings.length > 0) && <table className="table overflow-x-scroll" >
                        <thead>
                            <tr>
                                <th>S No.</th>
                                {/* <th>Team Name</th> */}
                                <th>Type of <br></br>accommodation</th>
                                <th>Number of Days</th>
                                {/* <th>To date</th> */}
                                <th>Number of <br></br>Persons</th>
                                <th>Payment<br></br>Reference No.</th>
                                <th>Verification<br></br>Status</th>
                            </tr>
                        </thead>

                        <tbody>
                            {allBookings.map((element, index) => {
                                // console.log("dashboard data");console.log(element);
                                // console.log('log', index, element);
                                return (
                                    <tr key={index + 1}>
                                        <td>{index + 1}</td>
                                        {/* <td>{element.teamName}</td> */}
                                        <td>{element.accommodationType}</td>
                                        {/* <td>{element.fromDate}</td> */}
                                        {/* <td>{element.toDate}</td> */}
                                        <td>{element.numberOfDays}</td>
                                        <td>{element.numberOfPersons}</td>
                                        <td>{element.paymentReferenceNumber}</td>
                                        <td>{element.paymentVerified ? "Verified" : "Unverified"}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>}
                    <h1 className="text-center text-3xl font-semibold">{(allBookings.length < 1) && `No Bookings Yet.`}</h1>
                </div>
            </div>
        // </Layout>
    );
};

export default MyBookings;
