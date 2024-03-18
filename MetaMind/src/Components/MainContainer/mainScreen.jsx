import React from "react";
import VedioTitle from "./vedioTitle";
import VedioBackground from "./vedioBackground";
import { useSelector } from "react-redux";

export const MainScreen = () => {
  const movie = useSelector((store) => store.movie?.NowPlayingMovies);
  if (!movie) return; //early return in react
  console.log(movie);
  const { overview, id, title } = movie[4];
  return (
    <div>
      <VedioTitle title={title} overview={overview} />
      <VedioBackground movieID={id} />
    </div>
  );
};
