import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";
import axiosInstance from "../Helper/axiosInstance";

const initialState = {
  eventsData: [],
};

// function to get all courses
export const getAllEvent = createAsyncThunk("/course/get", async () => {
  try {
    const res = axiosInstance.get("/event");

    toast.promise(res, {
      loading: "Loading events data...",
      success: "Events loaded successfully",
      error: "Failed to get events",
    });

    const response = await res;
    // console.log("cou-slice");
    // console.log(response);

    return response.data.events;
  } catch (error) {
    toast.error(error?.response?.data?.message);
  }
});


export const getAllAccomodation = createAsyncThunk("/course/get", async () => {
  try {
    const res = axiosInstance.get("/event");

    toast.promise(res, {
      loading: "Loading accomodation data...",
      success: "Accomodation loaded successfully",
      error: "Failed to get accomodation",
    });

    const response = await res;

    return response.data.courses;
  } catch (error) {
    toast.error(error?.response?.data?.message);
  }
});


export const getAllMerchansie = createAsyncThunk("/course/get", async () => {
  try {
    const res = axiosInstance.get("/event");

    toast.promise(res, {
      loading: "Loading merchandise data...",
      success: "Merchandise loaded successfully",
      error: "Failed to get merchandise data",
    });

    const response = await res;

    return response.data.courses;
  } catch (error) {
    toast.error(error?.response?.data?.message);
  }
});

// function to create a new course
export const createNewEvent = createAsyncThunk(
  "/get/courses",
  async (data) => {
    try {
      const res = axiosInstance.post("/event", data);
      toast.promise(res, {
        loading: "Creating the event...",
        success: "Event created successfully",
        error: "Failed to create event",
      });

      const response = await res;
      return response.data;
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  }
);

// function to delete the course
export const deleteEvent = createAsyncThunk("/course/delete", async (id) => {
  try {
    const res = axiosInstance.delete(`event/eventee/${id}`);

    toast.promise(res, {
      loading: "Deleting the event...",
      success: "Event deleted successfully",
      error: "Failed to delete event",
    });

    const response = await res;

    // return response.data;
    return response;
  } catch (error) {
    toast.error(error?.response?.data?.message);
  }
});

// function to update the course details
export const updateEvent = createAsyncThunk("/course/update", async (data) => {
  try {
    // creating the form data from user data
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("club", data.club);
    formData.append("createdBy", data.createdBy);
    formData.append("description", data.description);
    // backend is not allowing change of thumbnail
    // if (data.thumbnail) {
    //   formData.append("thumbnail", data.thumbnail);
    // }

    const res = axiosInstance.put(`/event/${data.id}`, {
      title: data.title,
      club: data.club,
      createdBy: data.createdBy,
      description: data.description,
    });

    toast.promise(res, {
      loading: "Updating the event...",
      success: "Event updated successfully",
      error: "Failed to update event",
    });

    const response = await res;
    return response.data;
  } catch (error) {
    console.log(error);
    toast.error(error?.response?.data?.message);
  }
});

const eventSlice = createSlice({
  name: "event",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllEvent.fulfilled, (state, action) => {
      if (action.payload) {
        state.eventsData = [...action.payload];
      }
    });
  },
});

export const {} = eventSlice.actions;
export default eventSlice.reducer;
