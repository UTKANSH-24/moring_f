import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";
import axiosInstance from "../Helper/axiosInstance";

const initialState = {
  facultycoordinator: [],
};

// function to get all the lectures
export const getclubcordinator = createAsyncThunk(
  "/course/lecture/get",
  async (courseId) => {
    try {
      const res = axiosInstance.get(`/event/clubcoordinator/${courseId}`);
         
      toast.promise(res, {
        loading: "Fetching the Coordinators...",
        success: "Coordinators fetched successfully",
        error: "Failed to fetch Coordinators",
      });

      const response = await res;
      console.log("response.data ",response.data)
      return response.data;
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  }
);


export const addclubcoordinator = createAsyncThunk(
  "/course/lecture/add",
  async (data) => {
    
    try {
      console.log(data);
      const res = axiosInstance.post(`/event/clubcoordinator/${data.id}`, data);
    
      toast.promise(res, {
        loading: "Adding the Coordinator...",
        success: "Coordinator added successfully",
        error: "Failed to add Coordinator",
      });

      const response = await res;

      return response.data;
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  }
);


// function to delete the lecture from the course
export const deleteclubCordinator = createAsyncThunk(
  "/course/lecture/delete",
  async (data) => {
    console.log(data);
    try {
      const res = axiosInstance.delete(
        `/event/?courseId=${data.courseId}&lectureId=${data.lectureId}`
      );

      toast.promise(res, {
        loading: "Deleting the Coordinator...",
        success: "Coordinator deleted successfully",
        error: "Failed to delete Coordinator",
      });

      const response = await res;
      return response.data;
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  }
);

const clubcordinatorSlice = createSlice({
  name: "clubcordinator",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getclubcordinator.fulfilled, (state, action) => {
        state.clubcoordinator = action?.payload?.clubcoordinator;
      })
      .addCase(addclubcoordinator.fulfilled, (state, action) => {
        state.clubcoordinator = action?.payload?.clubcoordinator?.clubcoordinator;
      });
  },
});

export const {} = clubcordinatorSlice.actions;
export default clubcordinatorSlice.reducer;
