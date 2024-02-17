import { configureStore } from "@reduxjs/toolkit";
import authSliceReducer from "../Redux/authSlice";
import eventSliceReducer from "../Redux/eventSlice";
import lectureSliceReducer from "./participantsSlice";
import tcacordinatorSliceReducer from "../Redux/tcacordinatorSliceReducer";
import facultycordinatorSliceReducer from "../Redux/facultycordinatorSliceReducer";
import clubcordinatorSliceReducer from "../Redux/clubcordinatorSliceReducer";
const store = configureStore({
  reducer: {
    auth: authSliceReducer,
    event: eventSliceReducer,
    lecture: lectureSliceReducer,
    tcacoordinator:tcacordinatorSliceReducer,
    facultycoordinator:facultycordinatorSliceReducer,
    clubcoordinator:clubcordinatorSliceReducer,

  },
});

export default store;
