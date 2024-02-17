import React, { useEffect } from "react";
import { BsCollectionPlayFill, BsTrash } from "react-icons/bs";
import { MdOutlineModeEdit, MdOutlineDownload } from "react-icons/md";
import { MdGppGood,MdPeople,MdOutlineDetails, MdGppBad } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteEvent, getAllEvent } from "../../Redux/eventSlice";



const UserDashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const userData = useSelector((state) => state?.auth?.data);
console.log('a',userData);
  // getting the courses data from redux toolkit store
  const myEvents = useSelector((state) => state.event.eventsData);
  console.log("myEvents", myEvents);

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


        </div>

        <table className="table overflow-x-scroll" >
          <thead>
            <tr >
              <th>S No.</th>
              <th>Event Title</th>
              <th>Club</th>
              <th>Total Participants</th>
              <th>Details</th>
              <th>Contact Person</th>
              <th>Status</th>
              <th>Receipt</th>

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
                   
                      <MdOutlineDetails  onClick={() =>
                        navigate("/event/details", {
                          state: {
                            initialEventData: {
                              newEvent: false,
                              ...element,
                            },
                          },
                        })
                      }/>
                    
                  </td>




                  <td>
                   
                      <MdPeople  onClick={() =>
                        navigate("/user/displaycontactperson", {
                          state: { ...element },
                        })
                      }/>

                  





                  </td>


                  <td>
                  {element.participant.some(obj => (obj.enrolledby === userData._id) && (obj.isverified === true)) ? 'Verified' : 'Unverified'}


                    {/* to CRUD the lectures */}
                    {/* <button
                      onClick={() =>
                        navigate("/event/displayparticipants", {
                          state: { ...element },
                        })
                      }
                      className="bg-green-500 hover:bg-green-600 transition-all ease-in-out duration-30 text-xl py-2 px-4 rounded-md font-bold"
                    ><MdGppGood />

                    </button> */}
                  </td>


                  <td>
{/* 
                    <button
                      onClick={() =>
                        navigate("/event/displayUnverifiedparticipants", {
                          state: { ...element },
                        })
                      }
                      className="bg-none hover:bg-green-600 transition-all ease-in-out duration-30 text-xl py-2 px-4 rounded-md font-bold color-black"
                    > */}
                      <MdOutlineDownload onClick={() =>
                        navigate("/event/displayUnverifiedparticipants", {
                          state: { ...element },
                        })
                      }/>
                    {/* </button> */}
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

export default UserDashboard;
