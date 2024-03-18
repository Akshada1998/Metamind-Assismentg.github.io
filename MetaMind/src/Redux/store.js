import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./movieSlice";

const store = configureStore({
  namr: "app",
  reducer: {
    app: userReducer,
    movie: movieReducer,
  },
});
export default store;
