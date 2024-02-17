import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import {
  deleteEventParticipants,
  getEventParticipants,
  changeparticipantsverification
} from "../../Redux/participantsSlice";
import Popup from "../Popup/Popup.js";

const DisplayParticipants = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // for getting the data from location of previous component
  const eventDetails = useLocation().state;
  const { participants } = useSelector((state) => state.lecture);
  const { role } = useSelector((state) => state.auth);
  const [PopUp, setPopUp] = useState(false);
  const [userdata, setUserdata] = useState({
    courseId: '',
    lectureId: ''
  });

  // Initialize currentVideoIndex state
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  // function to handle lecture delete
  const handleparticipantDelete = async (courseId, lectureId) => {
    const data = { courseId, lectureId };
    await dispatch(deleteEventParticipants(data));
    await dispatch(getEventParticipants({ courseId: eventDetails._id, isVerified: false }));
  };

  const handleverificationchange = async (courseId, lectureId) => {
    const data = { courseId, lectureId, isverified: true };
    await dispatch(changeparticipantsverification(data));
    await dispatch(getEventParticipants({ courseId: eventDetails._id, isVerified: false }));
  };

  const handlrejection = async (courseId, lectureId) => {
    setPopUp(true)
    setUserdata({
      courseId: courseId,
      lectureId: lectureId
    });
  };

  useEffect(() => {
    (async () => {
      await dispatch(getEventParticipants({ courseId: eventDetails._id, isVerified: false }));
    })();
  }, [PopUp]);

  let size = participants.length
  return (
    <>
      {size === 0 && <h1 className="text-center text-2xl font-semibold text-yellow-500">
        No More Participants To Verify...
      </h1>}
      {/* <Layout> */}
      {size !== 0 &&
        < div className="flex flex-col gap-10 items-center justify-center min-h-[90vh] py-10 text-white mx-[5%]">
          <h1 className="text-center text-2xl font-semibold text-yellow-500" style={{ marginTop: '50px' }}>
            Event Name : {eventDetails?.title}
          </h1>
          <div className="flex justify-center gap-10 w-full">
            <div className="space-y-5 w-[28rem] p-2 rounded-lg shadow-[0_0_10px_black]">
              <div>
                <h1>
                  <span className="text-yellow-500">Team Name : </span>
                  {participants && participants[currentVideoIndex]?.title}
                </h1>
                <p>
                  {" "}
                  <span className="text-yellow-500 line-clamp-4">
                    Description :{" "}
                  </span>
                  {participants && participants[currentVideoIndex]?.description}
                </p>
              </div>
              {role === "ADMIN" && (
                <button
                  onClick={() =>
                    handleparticipantDelete(eventDetails?._id, participants[currentVideoIndex]?._id)
                  }
                  className="btn-primary px-2 py-1 rounded-md font-semibold text-sm"
                >
                  Delete Participant
                </button>
              )}
              {role === "ADMIN" && (
                <button
                  onClick={() =>
                    handleverificationchange(eventDetails?._id, participants[currentVideoIndex]?._id)
                  }
                  className="btn-primary px-2 py-1 rounded-md font-semibold text-sm"
                >
                  Verify Participant
                </button>
              )}
              {role === "ADMIN" && (
                <button
                  onClick={() =>
                    handlrejection(eventDetails?._id, participants[currentVideoIndex]?._id)
                  }
                  className="btn-primary px-2 py-1 rounded-md font-semibold text-sm"
                >
                  Reject Participant
                </button>
              )}
            </div>
            <ul className="w-[28rem] p-2 rounded-lg shadow-[0_0_10px_black] space-y-4">
              <li className="font-semibold text-xl text-yellow-500 flex items-center justify-between">
                <p>Participants List</p>
                {role === "ADMIN" && (
                  <button
                    onClick={() =>
                      navigate("/event/AddParticipant", {
                        state: { ...eventDetails },
                      })
                    }
                    className="btn-primary px-2 py-1 rounded-md font-semibold text-sm"
                  >
                    Add New Participant
                  </button>
                )}
              </li>
              {participants &&
                participants.map((element, index) => {
                  return (
                    <li className="space-y-2" key={element._id}>
                      <p
                        className="cursor-pointer"
                        onClick={() => setCurrentVideoIndex(index)}
                      >
                        <span className="text-yellow-500">
                          {" "}
                          Participant {index + 1} :{" "}
                        </span>
                        {element?.title}
                      </p>
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>}
      {PopUp && <Popup usersdata={userdata} setPopup={setPopUp} />}
      {/* </Layout> */}
    </>
  );
};

export default DisplayParticipants;
