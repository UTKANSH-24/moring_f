import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";
import axiosInstance from "../Helper/axiosInstance";

const initialState = {
    merchandiseData: [],
};


export const getAllMerchandise = createAsyncThunk("/course/get", async () => {
    try {
        const res = axiosInstance.get("/event");

        toast.promise(res, {
            loading: "Loading merchandise data...",
            success: "Merchandise data loaded successfully",
            error: "Failed to get merchandise data",
        });

        const response = await res;

        return response.data.courses;
    } catch (error) {
        toast.error(error?.response?.data?.message);
    }
});



const merchandiseSlice = createSlice({
    name: "merchandise",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllMerchandise.fulfilled, (state, action) => {
            if (action.payload) {
                state.merchandiseData = [...action.payload];
            }
        });
    },
});

export const { } = merchandiseSlice.actions;
export default merchandiseSlice.reducer;

