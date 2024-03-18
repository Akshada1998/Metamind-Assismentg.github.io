import React from "react";
import { MovieCard } from "./movieCard";

const MovieList = ({ title, movie, searchedMovie = false }) => {
  console.log(movie);
  return (
    <div className="px-8">
      <h1
        className={`${
          searchedMovie ? "text-black" : text - white
        } text-3xl py-3 `}
      >
        {title}
      </h1>
      <div className="flex overflow-x-auto  no-scrollbar cursor-pointer">
        <div className=" flex items-center">
          {movie?.map((movie) => (
            <MovieCard movie={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
