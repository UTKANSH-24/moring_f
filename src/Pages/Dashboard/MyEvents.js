import React, { useEffect, useState } from "react";
import Layout from "../../Layout/Layout";
// import {
//     Chart as ChartJS,
//     ArcElement,
//     Tooltip,
//     Legend,
//     CategoryScale,
//     LinearScale,
//     BarElement,
//     Title,
// } from "chart.js";
// import { Pie, Bar } from "react-chartjs-2";
// import { FaUsers } from "react-icons/fa";
// import { GiMoneyStack } from "react-icons/gi";
// import { FcSalesPerformance } from "react-icons/fc";
// import { BsCollectionPlayFill, BsTrash } from "react-icons/bs";
// import { MdOutlineModeEdit, MdGppGood, MdGppBad } from "react-icons/md";
// import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { deleteCourse } from "../../Redux/courseSlice";
// import { getAllMerchandise } from "../../Redux/merchandiseSlice.js";
// import { getStatsData } from "../../Redux/statSlice";
// import { getPaymentRecord } from "../../Redux/razorpaySlice";
import axiosInstance from "../../Helper/axiosInstance";

// ChartJS.register(
//     ArcElement,
//     Tooltip,
//     Legend,
//     CategoryScale,
//     LinearScale,
//     BarElement,
//     Title
// );

const MyEvents = () => {
    

    const [allOrders, setAllOrders] = useState([]);

    // let cloths = [];
    const [cloths, setCloths] = useState([]);

    const getOrderData = async () => {
        const res = await axiosInstance.post('/merchandise/getAllOrderList');
        console.log(res.data.orderList);
        setAllOrders(res.data.orderList);
    }


    useEffect(() => {
        (async () => {
            await getOrderData();
            setCloths([
                {
                    clothName: "t1",
                    type: "Round",
                    totalOrders: allOrders.filter(cloth => cloth.clothId === '1').length
                },
                {
                    clothName: "t2",
                    type: "Round2",
                    totalOrders: allOrders.filter(cloth => cloth.clothId === '2').length
                },
                {
                    clothName: "t3",
                    type: "Round3",
                    totalOrders: allOrders.filter(cloth => cloth.clothId === '3').length
                },
            ])
            console.log(cloths);
        })();
    }, []);

    useEffect(() => {
        (async () => {
            // await dispatch(getAllMerchandise());
            // dispatch(getStatsData());
            // await dispatch(getPaymentRecord());
            await getOrderData();
        })();
    }, []);



    return (<Layout>

        <div className="flex items-center h-[90vh] justify-between py-5 px-5 gap-5 rounded-md shadow-md">
            {/* CRUD courses section */}
            <div className="mx-[10%] w-[80%] self-center flex flex-col items-center justify-center gap-10 mb-10">
                <div className="flex w-full items-center justify-between">
                    <h1 className="text-center text-3xl text-light font-semibold">
                        {(allOrders.length > 0) && `My Events`}
                    </h1>
                </div>

                <table className="table overflow-x-scroll" >
                    <thead>
                        <tr>
                            <th>S No.</th>
                            <th>Team name</th>
                            <th>Event name</th>
                            <th>Event Description</th>

                            <th>Participants</th>
                            <th>Payment <br></br>Reference<br></br>Number</th>

                            <th>Payment <br></br>verification<br></br>Status</th>
                            <th>Coordinator Details</th>
                            {/* <th>Verified <br></br>Orders</th>
                            <th>Unverified <br></br>Orders</th> */}

                        </tr>
                    </thead>

                    <tbody>
                        {cloths.map((element, index) => {
                            // console.log("dashboard data");console.log(element);
                            // console.log('log', index, element);
                            return (

                                <tr key={index + 1}>
                                    <td>{index + 1}</td>
                                    <td>
                                        <textarea
                                            readOnly
                                            className="w-40 h-auto bg-transparent resize-none"
                                            value={element.clothName}
                                        ></textarea>
                                    </td>
                                    <td>{element.type}</td>
                                    {/* <td>{element?.createdBy}</td> */}
                                    <td>{element.totalOrders}</td>

                                    {/* <td>
                                        <button
                                            onClick={() =>
                                                navigate(`/admin/merchandise/verification/${index + 1}/1`)
                                            }
                                            className="bg-green-500 hover:bg-green-600 transition-all ease-in-out duration-30 text-xl py-2 px-4 rounded-md font-bold"
                                        >
                                            <MdGppGood />
                                        </button>
                                    </td>
                                    <td>

                                        <button
                                            onClick={() =>
                                                navigate(`/admin/merchandise/verification/${index + 1}/0`)
                                            }
                                            className="bg-red-500 hover:bg-green-600 transition-all ease-in-out duration-30 text-xl py-2 px-4 rounded-md font-bold"
                                        >
                                            <MdGppBad />
                                        </button>
                                    </td> */}

                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    </Layout>
    );
};

export default MyEvents;
