import React, { useEffect, useState } from "react";
import axiosInstance from "../../Helper/axiosInstance";
import toast from "react-hot-toast";


const MyOrders = () => {
    const [allOrders, setAllOrders] = useState([]);

    const getOrderData = async () => {
        const res = await axiosInstance.post('/merchandise/getMyOrderList');
        if (res.data?.success) {
            toast.success('All Orders')
        } else {
            toast.success('Error in fetch.')
        }
        // console.log(res.data.data);
        setAllOrders(res.data.data);
    }

    useEffect(() => {
        (async () => {
            await getOrderData();
        })();
    }, []);

    return (
        <div className="flex items-center h-[90vh] justify-between py-5 px-5 gap-5 rounded-md shadow-md">
            <div className="mx-[10%] w-[80%] self-center flex flex-col items-center justify-center gap-10 mb-10">
                <div className="flex w-full items-center justify-between">
                    <h1 className="text-center text-light text-3xl font-semibold">
                        {(allOrders.length > 0) && `My Orders`}
                    </h1>
                </div>
                <h1 className="text-center text-3xl font-semibold">{(allOrders.length < 1) && `No Order Yet.`}</h1>
                {(allOrders.length > 0) && <table className="table overflow-x-scroll" >
                    <thead>
                        <tr>
                            <th>S No.</th>
                            <th>Cloth ID</th>
                            <th>Name On cloth</th>
                            <th>Quantity</th>
                            <th>Payment Reference Number</th>
                            <th>Verification<br></br>Status</th>
                        </tr>
                    </thead>

                    <tbody>
                        {allOrders.map((element, index) => {
                            // console.log("dashboard data");console.log(element);
                            // console.log('log', index, element);
                            return (
                                <tr key={index + 1}>
                                    <td>{index + 1}</td>
                                    <td>{element.clothId}</td>
                                    <td>{element.nameOnCloth}</td>
                                    <td>{element.quantity}</td>
                                    <td>{element.paymentReferenceNumber}</td>
                                    <td>{element.paymentVerified ? "Verified" : "Unverified"}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>}
            </div>
        </div>
    );
};

export default MyOrders;
