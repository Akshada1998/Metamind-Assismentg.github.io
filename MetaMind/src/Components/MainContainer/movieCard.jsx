import React from "react";
import { TMDB_img_url } from "../Utils/constant";

export const MovieCard = ({ movie, posterPath }) => {
  return (
    <div>
      <img className="w-40 pr-2 m-2 " src={movie.imgUrl} />
      {/*   <img src={`${TMDB_img_url} `} />  ${posterPath}*/}
    </div>
  );
};
