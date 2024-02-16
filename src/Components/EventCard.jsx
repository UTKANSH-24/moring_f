import React from "react";
import { useNavigate } from "react-router-dom";

const EventCard = ({ data }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate("/course/description", { state: { ...data } })}
      className="text-white w-[22rem] h-[430px] shadow-lg rounded-lg cursor-pointer group overflow-hidden bg-zinc-700"
    >
      <div className="overflow-hidden">
        <img
          className="h-48 w-full rounded-tl-lg rounded-tr-lg  group-hover:scale-[1.2]  transition-all ease-in-out duration-300 "
          src='https://media.istockphoto.com/id/1404885250/photo/mahabaleshwar-and-panchagani-nature-and-hill-areas.jpg?s=1024x1024&w=is&k=20&c=fQykGjPmlabwiSYYgvanP97qMZD7dT_8v81iGqWdimU='
          alt="course thumbnail"
        />
      </div>

      {/* course details */}
      <div className="p-3 space-y-1 text-white">
        <h2 className="text-xl font-bold text-yellow-500 line-clamp-2">
          {data?.title}
        </h2>
        <p className="line-clamp-2">{data?.description}</p>
        <p className="font-semibold">
          {/* <span className="text-yellow-500 font-bold">Category : </span> */}
           <span className="text-yellow-500 font-bold">Club : </span>
          {data?.category}
        </p>
        <p className="font-semibold">
          <span className="text-yellow-500 font-bold">Total Participants : </span>
          {data?.numberOfLectures}
        </p>
        <p className="font-semibold">
          <span className="text-yellow-500 font-bold">Coordinators : </span>
          {data?.createdBy}
        </p>
        <p className="font-semibold">
          <span className="text-yellow-500 font-bold">Contact Details : </span>
          {data?.createdBy}
        </p>
      </div>
    </div>
  );
};

export default EventCard;
