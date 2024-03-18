import React from "react";
import MovieList from "./movieList";
import { useSelector } from "react-redux";

export const MovieScreen = () => {
  const movie = useSelector((store) => store.movie);

  return (
    <div className="bg-black">
      <div className="-mt-52 relative z-10">
        <MovieList title={"WatchList Movies"} movie={movie.WatchListMovies} />
        <MovieList title={"Popular Movies"} movie={movie.PopularMovies} />
        <MovieList title={"Top Rated  Movies"} movie={movie.TopRatedMovies} />
        <MovieList
          title={"Now Playing Movies"}
          movie={movie.NowPlayingMovies}
        />
        <MovieList title={"Upcoming Movies"} movie={movie.UpcomingMovies} />
      </div>
    </div>
  );
};
