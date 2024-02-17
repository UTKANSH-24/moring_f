import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";
import axiosInstance from "../Helper/axiosInstance";

const initialState = {
  facultycoordinator: [],
};

// function to get all the lectures
export const getfacultycordinator = createAsyncThunk(
  "/course/lecture/get",
  async (courseId) => {
    try {
      const res = axiosInstance.get(`/event/facultycoordinator/${courseId}`);
         
      toast.promise(res, {
        loading: "Fetching the FacultyCoordinators...",
        success: "FacultyCoordinators fetched successfully",
        error: "Failed to fetch FacultyCoordinators",
      });

      const response = await res;
      
      return response.data;
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  }
);


export const addfacultycoordinator = createAsyncThunk(
  "/course/lecture/add",
  async (data) => {
    
    try {
      console.log(data);
      const res = axiosInstance.post(`/event/facultycoordinator/${data.id}`, data);
    
      toast.promise(res, {
        loading: "Adding the FacultyCoordinator...",
        success: "FacultyCoordinator added successfully",
        error: "Failed to add FacultyCoordinator",
      });

      const response = await res;

      return response.data;
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  }
);


// function to delete the lecture from the course
export const deletefacultyCordinatot = createAsyncThunk(
  "/course/lecture/delete",
  async (data) => {
    console.log(data);
    try {
      const res = axiosInstance.delete(
        `/event/?courseId=${data.courseId}&lectureId=${data.lectureId}`
      );

      toast.promise(res, {
        loading: "Deleting the FacultyCoordinator...",
        success: "FacultyCoordinator deleted successfully",
        error: "Failed to delete FacultyCoordinator",
      });

      const response = await res;
      return response.data;
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  }
);

const facultycordinatorSlice = createSlice({
  name: "facultycordinator",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getfacultycordinator.fulfilled, (state, action) => {
        state.facultycoordinator = action?.payload?.facultycoordinator;
      })
      .addCase(addfacultycoordinator.fulfilled, (state, action) => {
        state.facultycoordinator = action?.payload?.facultycoordinator?.facultycoordinator;
      });
  },
});

export const {} = facultycordinatorSlice.actions;
export default facultycordinatorSlice.reducer;
