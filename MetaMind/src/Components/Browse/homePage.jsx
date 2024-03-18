import React, { useEffect } from "react";
import Header from "../Header/header";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { MainScreen } from "../MainContainer/mainScreen.jsx";
import useNowPlayingMovies from "../../hooks/useNowPlayingMovies";
import useWatchList from "../../hooks/useWatchList";
import usePopularMovies from "../../hooks/usePopularMovies.js";
import useTopRatedMovies from "../../hooks/useTopRatedMovies";
import useUpcomingMovies from "../../hooks/useUpcomingMovies";
import { MovieScreen } from "../MainContainer/movieScreen.jsx";
import SearchScreen from "../Search/searchScreen.jsx";

function HomePage() {
  const user = useSelector((store) => store.app.user);
  // const nowPlayingMovies =
  const navigate = useNavigate();
  const toggle = useSelector((store) => store.movie.toggle);

  //custome hooks
  useWatchList();
  useNowPlayingMovies();
  useUpcomingMovies();
  usePopularMovies();
  useTopRatedMovies();

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, []);

  return (
    <div>
      <Header />
      <div>
        {toggle ? (
          <SearchScreen />
        ) : (
          <>
            <HomePage />
            <MainScreen />
          </>
        )}
      </div>
      <div>
        <mainScreen />
        <MovieScreen />
      </div>
    </div>
  );
}

export default HomePage;
