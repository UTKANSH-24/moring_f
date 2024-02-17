import React, { useEffect, useState } from "react";
import {  MdGppGood, MdGppBad } from "react-icons/md";
import { useNavigate } from "react-router-dom";

import axiosInstance from "../../Helper/axiosInstance";

const MerchandiseDashboard = () => {
  const navigate = useNavigate();
 
  const [allOrders, setAllOrders] = useState([]);

  // let cloths = [];
  const [cloths, setCloths] = useState([]);

  const getOrderData = async () => {
    const res = await axiosInstance.post('/merchandise/getAllOrderList');
    // console.log(res.data.orderList);
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
      // console.log(cloths);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      await getOrderData();
    })();
  }, []);



  return (
  
    <div className="min-h-[90vh] pt-5 flex flex-col flex-wrap gap-10 text-white" style={{ minHeight: '90vh' }}>
      <h1 className="text-center text-3xl font-semibold text-yellow-500" style={{ marginTop: '50px' }}>
          Merchandise Dashboard
        </h1>

        <div className="mx-[10%] w-[80%] self-center flex flex-col items-center justify-center gap-10 mb-10">
          <div className="flex w-full items-center justify-between">
            <h1 className="text-center text-3xl font-semibold">
              Merchandise Overview
            </h1>
          </div>

          <table className="table overflow-x-scroll" >
            <thead>
              <tr>
                <th>S No.</th>
                <th>T-Shirt Name</th>
                <th>Type</th>
                <th>Total Orders</th>
                <th>Verified <br></br>Orders</th>
                <th>Unverified <br></br>Orders</th>

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
                    <td>{element.totalOrders}</td>
                    <td>
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
                    </td>

                  </tr>


                );
              })}
            </tbody>
          </table>
        </div>
      </div>

  );
};

export default MerchandiseDashboard;
