import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";
import axiosInstance from "../Helper/axiosInstance";

const initialState = {
  tcacoordinator: [],
};

// function to get all the lectures
export const getTcacordinator = createAsyncThunk(
  "/course/lecture/get",
  async (courseId) => {
    try {
      const res = axiosInstance.get(`/event/tcacoordinator/${courseId}`);
         
      toast.promise(res, {
        loading: "Fetching the lectures...",
        success: "Lectures fetched successfully",
        error: "Failed to fetch lectures",
      });

      const response = await res;
      
      return response.data;
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  }
);


export const addtcacoordinator = createAsyncThunk(
  "/course/lecture/add",
  async (data) => {
    
    try {
      console.log(data);
      const res = axiosInstance.post(`/event/tcacoordinator/${data.id}`, data);
    
      toast.promise(res, {
        loading: "Adding the lecture...",
        success: "Lecture added successfully",
        error: "Failed to add lectureghfghfghjgh",
      });

      const response = await res;

      return response.data;
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  }
);


// function to delete the lecture from the course
export const deleteTcaCordinatot = createAsyncThunk(
  "/course/lecture/delete",
  async (data) => {
    console.log(data);
    try {
      const res = axiosInstance.delete(
        `/event/?courseId=${data.courseId}&lectureId=${data.lectureId}`
      );

      toast.promise(res, {
        loading: "Deleting the lecture...",
        success: "Lecture deleted successfully",
        error: "Failed to delete lecture",
      });

      const response = await res;
      return response.data;
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  }
);

const tcacordinatorSlice = createSlice({
  name: "tcacordinator",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTcacordinator.fulfilled, (state, action) => {
        state.tcacoordinator = action?.payload?.tcacoordinator;
      })
      .addCase(addtcacoordinator.fulfilled, (state, action) => {
        state.tcacoordinator = action?.payload?.tcacoordinator?.tcacoordinator;
      });
  },
});

export const {} = tcacordinatorSlice.actions;
export default tcacordinatorSlice.reducer;
