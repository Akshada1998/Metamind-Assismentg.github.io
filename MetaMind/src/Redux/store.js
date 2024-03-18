import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./movieSlice";
import searchSlice from "./searchSlice";

const store = configureStore({
  namr: "app",
  reducer: {
    app: userReducer,
    movie: movieReducer,
    searchMovie: searchSlice,
  },
});
export default store;
