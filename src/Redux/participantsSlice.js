import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";
import axiosInstance from "../Helper/axiosInstance";

const initialState = {
  participants: [],
};


// export const getEventParticipants = createAsyncThunk(
//   "/course/lecture/get",
//   async (courseId) => {
//     try {
//       const res = axiosInstance.get(`/event/${courseId}`);
//          console.log("participants");
//          console.log(res);
//       toast.promise(res, {
//         loading: "Fetching the lectures...",
//         success: "Lectures fetched successfully",
//         error: "Failed to fetch lectures",
//       });

//       const response = await res;
//       console.log("response");
//       console.log(response.data);
//       return response.data;
//     } catch (error) {
//       toast.error(error?.response?.data?.message);
//     }
//   }
// );
export const getEventParticipants = createAsyncThunk(
  "/course/lecture/get",
  async ({ courseId, isVerified }) => { // Accept an object with courseId and isVerified
    try {
      const res = axiosInstance.get(`/event/${courseId}?verified=${isVerified}`); // Pass isVerified as a query parameter
      

  
      toast.promise(res, {
        loading: "Fetching the participants...",
        success: "Participants fetched successfully",
        error: "Failed to fetch participants",
      });

      const response = await res;
   
      return response.data;
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  }
);


// function to add new lecture to the course
export const addEventParticipants = createAsyncThunk(
  "/course/lecture/add",
  async (data) => {
   console.log("000data",data);

    try {
      const res = axiosInstance.post(`/event/lecture/${data.id}`, data);

      toast.promise(res, {
        loading: "Registering the participant...",
        success: "Registered successfully",
        error: "Failed to Register in the event",
      });

      const response = await res;
      
      return response.data;
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  }
);

export const addclubcoordinator = createAsyncThunk(
  "/course/lecture/add",
  async (data) => {
    // const formData = new FormData();
    // formData.append("lecture", data.lecture);
    // formData.append("title", data.title);
    // formData.append("description", data.description);

    try {
      console.log(data);
      const res = axiosInstance.post(`/event/clubcoordinator/${data.id}`, data);
    
      toast.promise(res, {
        loading: "Adding the club coordinator...",
        success: "Club coordinator added successfully",
        error: "Failed to add club coordinator",
      });

      const response = await res;

      return response.data;
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  }
);


// function to delete the lecture from the course
export const deleteEventParticipants = createAsyncThunk(
  "/course/lecture/delete",
  async (data) => {
    console.log(data);
    try {
      const res = axiosInstance.delete(
        `/event/?courseId=${data.courseId}&lectureId=${data.lectureId}`
      );

      toast.promise(res, {
        loading: "Deleting the participant...",
        success: "Participant deleted successfully",
        error: "Failed to delete participant",
      });

      const response = await res;
      return response.data;
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  }
);
export const changeparticipantsverification = createAsyncThunk(
  "/course/lecture/delete",
  async (data) => {
    console.log("data at participantsslice",data);
    try {
      const res = axiosInstance.put(
        `/event/?courseId=${data.courseId}&lectureId=${data.lectureId}`
      ,data);

      toast.promise(res, {
        loading: "Updating the verification Status...",
        success: "Verification updated successfully",
        error: "Failed to update verification",
      });

      const response = await res;
      return response.data;
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  }
);

const participantsSlice = createSlice({
  name: "participants",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getEventParticipants.fulfilled, (state, action) => {
        state.participants = action?.payload?.participants;
      })
      .addCase(addEventParticipants.fulfilled, (state, action) => {
        state.participants = action?.payload?.event?.participants;
      });
  },
});

export const {} = participantsSlice.actions;
export default participantsSlice.reducer;
