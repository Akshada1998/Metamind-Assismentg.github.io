import React from "react";
import { useSelector } from "react-redux";

function VedioBackground({ movieID, bool }) {
  const trailerMovies = useSelector((store) => store.movie.TrailerMovies);

  useMovieById(movieID);
  return (
    <div className="w-[vw] overflow-hidden ">
      <iframe
        className={` ${bool ? "w-[100%]" : "w-screen"} aspect-vedio`}
        src={`https://www.youtube.com/embed/${trailerMovies.key}?si=aXkStGE1sI5o355T&autoplay=1&mute=1`}
        title="YouTube video player"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default VedioBackground;
