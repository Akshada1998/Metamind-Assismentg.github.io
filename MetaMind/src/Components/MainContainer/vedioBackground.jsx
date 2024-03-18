import React from "react";
import { useSelector } from "react-redux";

function VedioBackground(movieID) {
  const trailerMovies = useSelector((store) => store.movie.trailerMovies);

  useMovieById(movieID);
  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video "
        src={`https://www.youtube.com/embed/${trailerMovies.key}?si=aXkStGE1sI5o355T&autoplay=1&mute=1`}
        title="YouTube video player"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default VedioBackground;
