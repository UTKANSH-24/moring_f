import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import EventCard from "../../Components/EventCard";
import Layout from "../../Layout/Layout";
import { getAllEvent } from "../../Redux/eventSlice";

const Courses = () => {
  const dispatch = useDispatch();
  const { eventsData } = useSelector((state) => state.event);

  useEffect(() => {
    (async () => {
      await dispatch(getAllEvent());
    })();
  }, []);

  return (


    <div className="min-h-[90vh] pt-12 pl-20 flex flex-col flex-wrap gap-10 text-white">
      <h1 className="text-center text-3xl font-semibold">
        Explore the Events Organized by{" "}
        <span className="font-bold text-yellow-500">Diferent Clubs of NITJ </span>
      </h1>
      <div className="mb-10 flex flex-wrap gap-14">
        {eventsData?.map((element) => {
          return <EventCard key={element._id} data={element} />;
        })}
      </div>
    </div>

  );
};

export default Courses;
