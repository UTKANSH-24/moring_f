import React, { useEffect } from "react";
import Layout from "../../Layout/Layout";

import { BsCollectionPlayFill, BsTrash } from "react-icons/bs";
import { MdOutlineModeEdit ,MdGppBad,MdGppGood} from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteEvent, getAllEvent } from "../../Redux/eventSlice";


const AccomodationDashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();



  

  // getting the courses data from redux toolkit store
  const myCourses = useSelector((state) => state.event.eventsData);

  // function to handle the course delete
  const handleCourseDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete the course?")) {
      const res = await dispatch(deleteEvent(id));

      // fetching the new updated data for the course
      console.log(res);
      // if (success) {
        await dispatch(getAllEvent());
      // }
    }
  };

  useEffect(() => {
    (async () => {
      await dispatch(getAllEvent());
      // await dispatch(getPaymentRecord());
    })();
  }, []);

  return (
   
      <div className="min-h-[90vh] pt-5 flex flex-col flex-wrap gap-10 text-white">
        <h1 className="text-center text-3xl font-semibold text-yellow-500">
          Accomodation Dashboard
        </h1>

        {/* creating the records card and chart for sales and user details */}
       

        {/* CRUD courses section */}
        <div className="mx-[10%] w-[80%] self-center flex flex-col items-center justify-center gap-10 mb-10">
          <div className="flex w-full items-center justify-between">
            <h1 className="text-center text-3xl font-semibold">
            Accomodation Overview
            </h1>

            {/* add course card */}
            <button
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
              List New Accomodation
            </button>
          </div>

          <table className="table overflow-x-scroll" >
            <thead>
              <tr>
                <th>S No.</th>
                <th>Accomodation Name</th>
                <th>Type</th>
                {/* <th>Instructor</th> */}
                <th>Total Bookings</th>
                {/* <th>Course Description</th> */}
                <th>View</th>
                <th>Accomodation<br></br>Coordinator</th>
                {/* <th>Tca<br></br>Coordinator</th> */}
                {/* <th>Faculty<br></br>Coordinator</th> */}
                <th>Verified <br></br>Booking</th>
                <th>Unverified <br></br>Booking</th>

              </tr>
            </thead>

            <tbody>
              {myCourses?.map((element, index) => {
                // console.log("dashboard data");console.log(element);
                return (

                  <tr key={element?._id}>
                    <td>{index + 1}</td>
                    <td>
                      <textarea
                        readOnly
                        className="w-40 h-auto bg-transparent resize-none"
                        value={element?.title}
                      ></textarea>
                    </td>
                    <td>{element?.category}</td>
                    {/* <td>{element?.createdBy}</td> */}
                    <td>{element?.numberOfLectures}</td>
                    {/* <td className="max-w-28 overflow-hidden text-ellipsis whitespace-nowrap">
                      <textarea
                        readOnly
                        className="w-80 h-auto bg-transparent resize-none"
                        value={element?.description}
                      ></textarea>
                    </td> */}

                    <td >
                      {/* to edit the course */}
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
                    </td>
                    <td>


                      {/* to CRUD the lectures */}
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
                    </td>
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
                          navigate("/course/displaylectures", {
                            state: { ...element },
                          })
                        }
                        className="bg-green-500 hover:bg-green-600 transition-all ease-in-out duration-30 text-xl py-2 px-4 rounded-md font-bold"
                      >
                        <MdGppGood />
                      </button>
                    </td>
                    <td>

                      <button
                        onClick={() =>
                          navigate("/course/displaylectures", {
                            state: { ...element },
                          })
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

export default AccomodationDashboard;
