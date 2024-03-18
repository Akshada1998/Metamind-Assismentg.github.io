import React from "react";
import { TMDB_img_url } from "../Utils/constant";
import { alertTitleClasses } from "@mui/material";
import { useDispatch } from "react-redux";

export const MovieCard = ({ posterPath, movieId }) => {
  const dispatch = useDispatch();
  if (posterPath === null) return null;

  const handleOpen = () => {
    dispatch(getId(movieID));
    dispatch(setOpen(true));
  };
  return (
    <div className="w-40 pr-2 m-2" onClick={handleOpen}>
      <img src={`${TMDB_img_url}  ${posterPath}`} alt="movie banner" />
    </div>
  );
};
