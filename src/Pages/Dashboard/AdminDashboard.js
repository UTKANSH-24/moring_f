import React, { useEffect } from "react";
import { BsCollectionPlayFill, BsTrash } from "react-icons/bs";
import { MdOutlineModeEdit } from "react-icons/md";
import { MdGppGood, MdGppBad } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteEvent, getAllEvent } from "../../Redux/eventSlice";



const AdminDashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();




  // getting the courses data from redux toolkit store
  const myEvents = useSelector((state) => state.event.eventsData);
  // console.log("Admin Dashboard");
  // console.log(myEvents);

  // function to handle the course delete
  const handleEventDelete = async (id) => {
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

    <div className="min-h-[90vh] pt-5 flex flex-col flex-wrap gap-10 text-white" style={{ minHeight: '90vh' }}>
      <h1 className="text-center text-3xl font-semibold text-yellow-500" style={{ marginTop: '50px' }}>
        Event Dashboard
      </h1>

      {/* creating the records card and chart for sales and user details */}

      {/* CRUD courses section */}
      <div className="mx-[10%] w-[80%] self-center flex flex-col items-center justify-center gap-10 mb-10">
        <div className="flex w-full items-center justify-between">
          <h1 className="text-center text-3xl font-semibold">
            Event Overview
          </h1>

          {/* add course card */}
          <button
            onClick={() => {
              navigate("/event/createevent", {
                state: {
                  initialEventData: {
                    newEvent: true,
                    title: "",
                    club: "",
                    createdBy: "",
                    description: "",

                  },
                },
              });
            }}
            className="w-fit bg-yellow-500 hover:bg-yellow-600 transition-all ease-in-out duration-300 rounded py-2 px-4 font-semibold text-lg cursor-pointer"
          >
            Create New Event
          </button>
        </div>

        <table className="table overflow-x-scroll" >
          <thead>
            <tr >
              <th>S No.</th>
              <th>Event Title</th>
              <th>Club</th>
              {/* <th>Instructor</th> */}
              <th>Total Participants</th>
              {/* <th>Course Description</th> */}
              <th>View</th>
              <th>Faculty<br></br>Coordinator</th>
              <th>Tca<br></br>Coordinator</th>

              <th>Club<br></br>Coordinator</th>
              <th>Verified <br></br>Participants</th>
              <th>Unverified <br></br>Participants</th>

            </tr>
          </thead>

          <tbody>
            {myEvents?.map((element, index) => {
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
                  <td>{element?.club}</td>
                  {/* <td>{element?.createdBy}</td> */}
                  <td>{element?.numberOfParticipants}</td>


                  <td >
                    {/* to edit the course */}
                    <button
                      onClick={() =>
                        navigate("/event/createevent", {
                          state: {
                            initialEventData: {
                              newEvent: false,
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

                    <button
                      onClick={() =>
                        navigate("/event/displayfacultycoordinator", {
                          state: { ...element },
                        })
                      }
                      className="bg-green-500 hover:bg-green-600 transition-all ease-in-out duration-30 text-xl py-2 px-4 rounded-md font-bold"
                    >
                      <BsCollectionPlayFill />
                    </button>
                  </td>




                  <td>

                    <button
                      onClick={() =>
                        navigate("/event/displaytcacoordinator", {
                          state: { ...element },
                        })
                      }
                      className="bg-green-500 hover:bg-green-600 transition-all ease-in-out duration-30 text-xl py-2 px-4 rounded-md font-bold"
                    >
                      <BsCollectionPlayFill />
                    </button>
                  </td>


                  <td>
                    <button
                      onClick={() =>
                        navigate("/event/displayclubcoordinator", {
                          state: { ...element },
                        })
                      }
                      className="bg-green-500 hover:bg-green-600 transition-all ease-in-out duration-30 text-xl py-2 px-4 rounded-md font-bold"
                    >
                      <BsCollectionPlayFill />

                    </button>





                  </td>


                  <td>


                    {/* to CRUD the lectures */}
                    <button
                      onClick={() =>
                        navigate("/event/displayparticipants", {
                          state: { ...element },
                        })
                      }
                      className="bg-green-500 hover:bg-green-600 transition-all ease-in-out duration-30 text-xl py-2 px-4 rounded-md font-bold"
                    ><MdGppGood />

                    </button>
                  </td>


                  <td>

                    <button
                      onClick={() =>
                        navigate("/event/displayUnverifiedparticipants", {
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

export default AdminDashboard;
