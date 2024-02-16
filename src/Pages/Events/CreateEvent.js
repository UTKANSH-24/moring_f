import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Layout from "../../Layout/Layout";
import { createNewEvent, updateEvent } from "../../Redux/eventSlice";
import { AiOutlineArrowLeft } from "react-icons/ai";

const CreateEvent = () => {
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
      console.log(userInput);
      if (
        !userInput.title ||
        !userInput.club ||
        !userInput.createdBy ||
        !userInput.description 
        // !userInput.thumbnail
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
        !userInput.description
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
       
      });

      setIsDisabled(false);

  
      navigate("/admin/dashboard");
    }
  };

  return (
    
      <div className="flex items-center justify-center h-[100vh]">
        {/* card for creating the new card */}
        <form
          onSubmit={handleFormSubmit}
          className="flex flex-col justify-center gap-5 rounded-lg p-4 text-white w-[700px] h-[450px] my-10 shadow-[0_0_10px_black] relative"
        >
          <Link
            to={"/admin/dashboard"}
            className="absolute top-8 text-2xl link text-accent cursor-pointer"
          >
            <AiOutlineArrowLeft />
          </Link>

          <h1 className="text-center text-2xl font-bold">
            {!initialEventData.newEvent ? "Update" : "Create new"}{" "}
            <span>Event</span>
          </h1>

          <main className="grid grid-cols-2 gap-x-10">
            {/* for Event basic details */}
            <div className="space-y-6">
          

              {/* adding the title section */}
              <div className="flex flex-col gap-1">
                <label className="text-lg font-semibold" htmlFor="title">
                  Event Title
                </label>
                <input
                  required
                  type="name"
                  name="title"
                  id="title"
                  placeholder="Enter the event title"
                  className="bg-transparent px-2 py-1 border"
                  value={userInput.title}
                  onChange={handleUserInput}
                />
              </div>
            </div>

            {/* for Event description and go to profile button */}

            {/* adding the Event description */}
            <div className="flex flex-col gap-1">
              {/* adding the instructor */}
              <div className="flex flex-col gap-1">
                <label className="text-lg font-semibold" htmlFor="createdBy">
                  Event Creator Name
                </label>
                <input
                  required
                  type="name"
                  name="createdBy"
                  id="createdBy"
                  placeholder="Enter the creator name"
                  className="bg-transparent px-2 py-1 border"
                  value={userInput.createdBy}
                  onChange={handleUserInput}
                />
              </div>

              {/* adding the category */}
              <div className="flex flex-col gap-1">
                <label className="text-lg font-semibold" htmlFor="category">
                 Club
                </label>
                <input
                  required
                  type="name"
                  name="club"
                  id="category"
                  placeholder="Enter the club name"
                  className="bg-transparent px-2 py-1 border"
                  value={userInput.club}
                  onChange={handleUserInput}
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-lg font-semibold" htmlFor="description">
                  Event Description
                </label>
                <textarea
                  required
                  type="text"
                  name="description"
                  id="description"
                  placeholder="Enter the event description"
                  className="bg-transparent px-2 py-1 border h-24 overflow-y-scroll resize-none"
                  value={userInput.description}
                  onChange={handleUserInput}
                />
              </div>
            </div>
          </main>

          <button
            className="w-full bg-yellow-600 hover:bg-yellow-500 transition-all ease-in-out duration-300 rounded-sm py-2 font-semibold text-lg cursor-pointer"
            type="submit"
          >
            {!initialEventData.newEvent ? "Update Event" : "Create Event"}
          </button>
        </form>
      </div>
  
  );
};

export default CreateEvent;
