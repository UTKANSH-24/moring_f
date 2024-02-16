import { configureStore } from "@reduxjs/toolkit";
import authSliceReducer from "../Redux/authSlice";
import eventSliceReducer from "../Redux/eventSlice";
import lectureSliceReducer from "./participantsSlice";
import tcacordinatorSliceReducer from "../Redux/tcacordinatorSliceReducer";
import razorpaySliceReducer from "./razorpaySlice";
import statSliceReducer from "./statSlice";

const store = configureStore({
  reducer: {
    auth: authSliceReducer,
    event: eventSliceReducer,
    lecture: lectureSliceReducer,
    razorpay: razorpaySliceReducer,
    tcacoordinator:tcacordinatorSliceReducer,
    stat: statSliceReducer,
  },
});

export default store;
