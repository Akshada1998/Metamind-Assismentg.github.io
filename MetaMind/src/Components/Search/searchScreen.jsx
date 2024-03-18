import axios from "axios";
import React, { useState, useSelector, useDispatch } from "react";
import { Search_Movie, options } from "../Utils/constant";
import { setLoading } from "./Redux/userSlice.js ";

const SearchScreen = () => {
  const [searchMovie, setSearchMovie] = useState("");
  const isLoading = useSelector((store) => store.app.isLoading);
  const dispatch = useDispatch();
  const { movieName, searchedMovie } = useSelector(
    (store) => store.movie.searchMovie
  );

  const submitHandler = async (e) => {
    e.preventDefault();
    dispatch(setLoading(true));
    try {
      const res = await axios.get(
        `${Search_Movie} ${searchMovie}
        &include_adult=false&language=em-Us&page=1`,
        options
      );
      console.log(res.data);
      const movies = res.data.results;
      dispatch(setMoviesDeatils({ searchMovie, movies }));
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(setLoading(false));
    }
    setSearchMovie("");
  };
  return (
    <>
      <div className="flex  pt-[10%] w-[100%] justify-center">
        <form onSubmit={submitHandler} className="w-[50%] ">
          <div className="flex justify-between shadow-md border-2 border-gray-200 p-2 rounded-lg w-[100%]">
            <input
              value={searchMovie}
              onChange={(e) => {
                setSearchMovie(e.target.value);
              }}
              type="text"
              placeholder="Search Movies..."
              className="w-full outline-none rounded-md text-lg"
            />
            <button className="bg-re-800 text-white rounded-md px-4 py-2">
              {isLoading ? "Loading..." : "Search"}
            </button>
          </div>
        </form>
      </div>
      {
        searchedMovie.length > 0 ? (
          <MovieList
            title={movieName}
            searchMovie={true}
            movies={searchedMovie}
          />
        ) : (
          <h1> Movies not Found</h1>
        )
        // searchedMovie == null
      }
      {/* <div>
        <h1>{movieName}</h1>
        {searchedMovie &&
          searchedMovie.map((item) => {
            console.log(item);
            return <h1 key={item.id}>item</h1>;
          })}{" "}
      </div> */}
    </>
  );
};

export default SearchScreen;
