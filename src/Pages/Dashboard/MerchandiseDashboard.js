import React, { useEffect, useState } from "react";


import { MdOutlineModeEdit, MdGppGood, MdGppBad } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import axiosInstance from "../../Helper/axiosInstance";

const MerchandiseDashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

 
  

  
  const [allOrders, setAllOrders] = useState([]);

  // let cloths = [];
  const [cloths, setCloths] = useState([]);

  const getOrderData = async () => {
    const res = await axiosInstance.post('/merchandise/getAllOrderList');
    console.log(res.data.orderList);
    setAllOrders(res.data.orderList);
  }


  // // function to handle the course delete
  // const handleCourseDelete = async (id) => {
  //   if (window.confirm("Are you sure you want to delete the course?")) {
  //     const res = await dispatch(deleteCourse(id));

  //     // fetching the new updated data for the course
  //     console.log(res);
  //     // if (success) {
  //     await dispatch(getAllMerchandise());
  //     // }
  //   }
  // };


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
      // await dispatch(getPaymentRecord());
      await getOrderData();
    })();
  }, []);



  return (
  
      <div className="min-h-[90vh] pt-5 flex flex-col flex-wrap gap-10 text-white">
        <h1 className="text-center text-3xl font-semibold text-yellow-500">
          Merchandise Dashboard
        </h1>

        {/* creating the records card and chart for sales and user details */}
     
        {/* CRUD courses section */}
        <div className="mx-[10%] w-[80%] self-center flex flex-col items-center justify-center gap-10 mb-10">
          <div className="flex w-full items-center justify-between">
            <h1 className="text-center text-3xl font-semibold">
              Merchandise Overview
            </h1>

            {/* add course card */}

            {/* abhi no need */}
            {/* <button
              onClick={() => {
                navigate("/course/create", {
                  state: {
                    initialCourseData: {
                      newCourse: true,
                      title: "",
                      category: "",
                      createdBy: "",
                      description: "",
                      thumbnail: undefined,
                      previewImage: "",
                    },
                  },
                });
              }}
              className="w-fit bg-yellow-500 hover:bg-yellow-600 transition-all ease-in-out duration-300 rounded py-2 px-4 font-semibold text-lg cursor-pointer"
            >
              List New Product
            </button> */}
          </div>

          <table className="table overflow-x-scroll" >
            <thead>
              <tr>
                <th>S No.</th>
                <th>T-Shirt Name</th>
                <th>Type</th>
                {/* <th>Instructor</th> */}
                <th>Total Orders</th>
                {/* <th>Course Description</th> */}
                {/* <th>View</th>
                <th>Merchandise<br></br>Coordinator</th> */}
                {/* <th>Tca<br></br>Coordinator</th> */}
                {/* <th>Faculty<br></br>Coordinator</th> */}
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
                    {/* <td>{element?.createdBy}</td> */}
                    <td>{element.totalOrders}</td>
                    {/* <td className="max-w-28 overflow-hidden text-ellipsis whitespace-nowrap">
                      <textarea
                        readOnly
                        className="w-80 h-auto bg-transparent resize-none"
                        value={element?.description}
                      ></textarea>
                    </td> */}


                    {/* to edit the course */}
                    {/* <td >
                      <button
                        onClick={() =>
                          navigate("/course/create", {
                            state: {
                              initialCourseData: {
                                newCourse: false,
                                ...element,
                              },
                            },
                          })
                        }
                        className="bg-yellow-500 hover:bg-yellow-600 transition-all ease-in-out duration-300 text-xl py-2 px-4 rounded-md font-bold"
                      >
                        <MdOutlineModeEdit />
                      </button>
                    </td> */}


                    {/* to CRUD the lectures */}
                    {/* <td>
                      <button
                        onClick={() =>
                          navigate("/course/displaylectures", {
                            state: { ...element },
                          })
                        }
                        className="bg-green-500 hover:bg-green-600 transition-all ease-in-out duration-30 text-xl py-2 px-4 rounded-md font-bold"
                      >
                        <BsCollectionPlayFill />
                      </button>
                    </td> */}
                    {/* <td>

                      <button
                        onClick={() =>
                          navigate("/course/displaylectures", {
                            state: { ...element },
                          })
                        }
                        className="bg-green-500 hover:bg-green-600 transition-all ease-in-out duration-30 text-xl py-2 px-4 rounded-md font-bold"
                      >
                        <BsCollectionPlayFill />
                      </button>
                    </td> */}
                    {/* <td>
                      <button
                        onClick={() =>
                          navigate("/course/displayfacultycoordinator", {
                            state: { ...element },
                          })
                        }
                        className="bg-green-500 hover:bg-green-600 transition-all ease-in-out duration-30 text-xl py-2 px-4 rounded-md font-bold"
                      >
                        <BsCollectionPlayFill />

                      </button>





                    </td> */}

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
