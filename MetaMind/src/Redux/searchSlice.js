import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    movieName: null,
    searchedMovie: null,
  },
  reducers: {
    //actions
    setMoviesDeatils: (state, action) => {
      const { searchedMovie, movies } = action.payload;
      state.movieName = searchedMovie;
      state.searchedMovie = movies;
    },
  },
});

export const { setSearchMovieDetails } = searchSlice.actions;
export default searchSlice.reducer;
