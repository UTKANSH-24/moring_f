import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { createNewEvent, updateEvent } from "../../Redux/eventSlice";
import { AiOutlineArrowLeft } from "react-icons/ai";
import './EventsDetails.css'

const EventDetails = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // for getting the data from location of previous component
  const { initialEventData } = useLocation().state;

  // for toggling disable of image input box
  const [isDisabled, setIsDisabled] = useState(!initialEventData?.newEvent);

  // for storing the user input
  const [userInput, setUserInput] = useState({
    title: initialEventData?.title,
    club: initialEventData?.club,
    createdBy: initialEventData?.createdBy,
    description: initialEventData?.description,
    venue: initialEventData?.title,
    time: initialEventData?.time,
    date: initialEventData?.date,
    minparticipant: initialEventData?.minparticipant,
    maxparticipant: initialEventData?.maxparticipant,
    day: initialEventData?.day,

  });


  // function to handle user input
  const handleUserInput = (event) => {
    const { name, value } = event.target;
    setUserInput({
      ...userInput,
      [name]: value,
    });
  };

  // function to handle form submission
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    let res = undefined;

    // for creating a new Event
    if (initialEventData.newEvent) {
      //   checking for the empty fields
      // console.log("new form data",userInput);
      if (
        !userInput.title ||
        !userInput.club ||
        !userInput.createdBy ||
        !userInput.description ||
        !userInput.venue ||
        !userInput.time ||
        !userInput.date ||
        !userInput.minparticipant ||
        !userInput.maxparticipant ||
        !userInput.day


      ) {
        toast.error("All fields are mandatory");
        return;
      }

      // calling the api
      // res = await dispatch(createNewEvent(userInput));
      const res = await dispatch(createNewEvent(userInput));
    }
    // for updating an existing Event
    else {
      //   checking for the empty fields
      if (
        !userInput.title ||
        !userInput.club ||
        !userInput.createdBy ||
        !userInput.description ||
        !userInput.venue ||
        !userInput.time ||
        !userInput.date ||
        !userInput.minparticipant ||
        !userInput.maxparticipant ||
        !userInput.day
      ) {
        toast.error("All fields are mandatory");
        return;
      }

      const data = { ...userInput, id: initialEventData._id };
      // calling the api
      res = await dispatch(updateEvent(data));
    }

    // clearing the input fields
    if (res?.payload?.success) {
      setUserInput({
        title: "",
        club: "",
        createdBy: "",
        description: "",
        venue: "",
        time: "",
        date: "",
        minparticipant: "",
        maxparticipant: "",
        day: ""


      });

      setIsDisabled(false);


      navigate("/admin/dashboard");
    }
  };

  return (

    <div className="Event" style={{ }}>
      {/* card for creating the new card */}
      <form
        onSubmit={handleFormSubmit}
        className="flex flex-col justify-center gap-5 rounded-lg p-4 text-white w-[700px]  my-10 shadow-[0_0_10px_black] relative"
      >
        <Link
          to={"/admin/dashboard"}
          className="absolute top-8 text-2xl link text-accent cursor-pointer"
        >
          <AiOutlineArrowLeft />
        </Link>

        <h1 className="text-center text-2xl font-bold">
          {/* {!initialEventData.newEvent ? "Update" : "Create new"}{" "} */}
          <span>Event Details</span>
        </h1>

        <main className="grid grid-cols-2 gap-x-10">
          {/* for Event basic details */}
          <div className="flex flex-col gap-1 Child1">
            <div className="space-y-6">
              <div className="flex flex-col gap-1">
                <label className="text-lg font-semibold" htmlFor="title">
                  Event Title  : {userInput.title}
                </label>
                {/* <input
                  required
                  type="name"
                  name="title"
                  id="title"
                  placeholder="Enter the event title"
                  className="bg-transparent px-2 py-1 border"
                  value={userInput.title}
                  onChange={handleUserInput}
                /> */}
              </div>
            </div>

            {/* adding the category */}
            <div className="flex flex-col gap-1">
              <label className="text-lg font-semibold" htmlFor="category">
                Club   :{userInput.club}
              </label>
              {/* <input
                required
                type="name"
                name="club"
                id="category"
                placeholder="Enter the club name"
                className="bg-transparent px-2 py-1 border"
                value={userInput.club}
                onChange={handleUserInput}
              /> */}
            </div>

            <div className="space-y-6">
              <div className="flex flex-col gap-1">
                <label className="text-lg font-semibold" htmlFor="title">
                  Event Venue : {userInput.venue}
                </label>
                {/* <input
                  required
                  type="name"
                  name="venue"
                  id="venue"
                  placeholder="Enter the event venue"
                  className="bg-transparent px-2 py-1 border"
                  value={userInput.venue}
                  onChange={handleUserInput}
                /> */}
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex flex-col gap-1">
                <label className="text-lg font-semibold" htmlFor="title">
                  Event Date  :{userInput.date}
                </label>
                {/* <input
                  required
                  type="date"
                  name="date"
                  id="date"
                  placeholder="Enter the event date"
                  className="bg-transparent px-2 py-1 border"
                  value={userInput.date}
                  onChange={handleUserInput}
                /> */}
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex flex-col gap-1">
                <label className="text-lg font-semibold" htmlFor="title">
                  Event Time  :{userInput.time}
                </label>
                {/* <input
                  required
                  type="time"
                  name="time"
                  id="time"
                  placeholder="Enter the event time"
                  className="bg-transparent px-2 py-1 border"
                  value={userInput.time}
                  onChange={handleUserInput}
                /> */}
              </div>
            </div>
          </div>

          {/* for Event description and go to profile button */}

          {/* adding the Event description */}
          <div className="flex flex-col gap-1 Child2">
            {/* adding the instructor */}
            <div className="flex flex-col gap-1">
              <label className="text-lg font-semibold" htmlFor="createdBy">
                Event Creator Name  : {userInput.createdBy}
              </label>
              {/* <input
                required
                type="name"
                name="createdBy"
                id="createdBy"
                placeholder="Enter the creator name"
                className="bg-transparent px-2 py-1 border"
                value={userInput.createdBy}
                onChange={handleUserInput}
              /> */}
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-lg font-semibold" htmlFor="createdBy">
                Minimum Members  : {userInput.minparticipant}
              </label>
              {/* <input
                required
                type="number"
                name="minparticipant"
                id="minparticipant"
                placeholder="Enter the minimum no of participants name"
                className="bg-transparent px-2 py-1 border"
                value={userInput.minparticipant}
                onChange={handleUserInput}
              /> */}
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-lg font-semibold" htmlFor="createdBy">
                Maximum Members  : {userInput.maxparticipant}
              </label>
              {/* <input
                required
                type="number"
                name="maxparticipant"
                id="maxparticipant"
                placeholder="Enter the maximum no of participants name"
                className="bg-transparent px-2 py-1 border"
                value={userInput.maxparticipant}
                onChange={handleUserInput}
              /> */}
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-lg font-semibold" htmlFor="createdBy">
                Day  : {userInput.day}
              </label>
              {/* <input
                required
                type="name"
                name="day"
                id="day"
                placeholder="Enter the maximum no of participants name"
                className="bg-transparent px-2 py-1 border"
                value={userInput.day}
                onChange={handleUserInput}
              /> */}
            </div>



            <div className="flex flex-col gap-1">
              {/* <label className="text-lg font-semibold" htmlFor="description">
                Event Description : {userInput.description}
              </label> */}
              {/* <textarea
                required
                type="text"
                name="description"
                id="description"
                placeholder="Enter the event description"
                className="bg-transparent px-2 py-1 border h-24 overflow-y-scroll resize-none"
                value={userInput.description}
                onChange={handleUserInput}
              /> */}
            </div>
          </div>
        </main>
        {/* 
        <button
          className="w-full bg-yellow-600 hover:bg-yellow-500 transition-all ease-in-out duration-300 rounded-sm py-2 font-semibold text-lg cursor-pointer"
          type="submit"
        >
          {!initialEventData.newEvent ? "Update Event" : "Create Event"}
        </button> */}
      </form>
    </div>

  );
};

export default EventDetails;
