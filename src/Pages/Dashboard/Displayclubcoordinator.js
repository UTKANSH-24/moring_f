import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import Layout from "../../Layout/Layout";
import {
  deleteEventParticipants,
  getEventParticipants,
} from "../../Redux/participantsSlice";

const Displayclubcoordinator = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // for getting the data from location of previous component
  const courseDetails = useLocation().state;
  console.log(courseDetails);
  const { lectures } = useSelector((state) => state.lecture);
  // console.log(lectures);

  const { role } = useSelector((state) => state.auth);

  // to play the video accordingly
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  // function to handle lecture delete
  const handleLectureDelete = async (courseId, lectureId) => {
    const data = { courseId, lectureId };
    await dispatch(deleteEventParticipants(data));
    await dispatch(getEventParticipants(courseDetails._id));
  };

  // fetching the course lecture data
  useEffect(() => {
    (async () => {
      await dispatch(getEventParticipants(courseDetails._id));
    })();
  }, []);
  return (
    
      <div className="flex flex-col gap-10 items-center justify-center min-h-[90vh] py-10 text-white mx-[5%]">
        {/* displaying the course name */}

        <h1 className="text-center text-2xl font-semibold text-yellow-500">
          Event Name : {courseDetails?.title}
        </h1>

        <div className="flex justify-center gap-10 w-full">
          {/* left section for playing the video and displaying course details to admin */}
          <div className="space-y-5 w-[28rem] p-2 rounded-lg shadow-[0_0_10px_black]">
            


            <div>
              <h1>
                <span className="text-yellow-500">Title : </span>
                {lectures && lectures[currentVideoIndex]?.userid}
              </h1>
                            
              <p>
                {" "}
                <span className="text-yellow-500 line-clamp-4">
                  Description :{" "}
                </span>
                {lectures && lectures[currentVideoIndex]?.description}
              </p>
            </div>
          </div>

          {/* right section for displaying all the lectures of the course */}
          <ul className="w-[28rem] p-2 rounded-lg shadow-[0_0_10px_black] space-y-4">


            <li className="font-semibold text-xl text-yellow-500 flex items-center justify-between">
              <p>Club Coordinators List</p>
              {role === "ADMIN" && (
                <button
                  onClick={() =>
                    navigate("/event/addclubcoordinator", {
                      state: { ...courseDetails },
                    })
                  }
                  className="btn-primary px-2 py-1 rounded-md font-semibold text-sm"
                >
                  Add  Coordinator
                </button>
              )}
            </li>


            {courseDetails.clubcoordinator &&
              courseDetails.clubcoordinator.map((element, index) => {
                return (
                  <li className="space-y-2" key={element._id}>
                    <p
                      className="cursor-pointer"
                      onClick={() => setCurrentVideoIndex(index)}
                    >
                      <span className="text-yellow-500">
                        {" "}
                        Cordinator {index + 1} :{" "}
                      </span>
                      {element?.userid}
                    </p>
                    {role === "ADMIN" && (
                      <button
                        onClick={() =>
                          handleLectureDelete(courseDetails?._id, element?._id)
                        }
                        className="btn-primary px-2 py-1 rounded-md font-semibold text-sm"
                      >
                        Delete Cordinator
                      </button>
                    )}
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    
  );
};

export default Displayclubcoordinator;
