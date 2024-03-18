import React from "react";
import { MovieCard } from "./movieCard";

const MovieList = ({ title, movie }) => {
  console.log(movie);
  return (
    <div className="px-8">
      <h1 className="text-3xl   text-white">{title}</h1>
      <div className="flex overflow-x-auto  no-scrollbar cursor-pointer">
        <div className=" flex items-center">
          {movie.map((item) => (
            <MovieCard movie={item} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
