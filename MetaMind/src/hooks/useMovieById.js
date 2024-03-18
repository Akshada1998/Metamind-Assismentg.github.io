import axios from "axios";
import { useEffect } from "react";
import { options } from "../Components/Utils/constant";
import { useDispatch } from "react-redux";
import { getTrailerMovie } from "../Redux/movieSlice";

const useMovieById = async (movie_id) => {
  const dispatch = useDispatch();
  useEffect(()=>{
  try {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${movie_id}/vedios`,
      options
    );
    console.log(res.data.results);
    const trailer = res.data.results.filter((item) => {
      return item.type === "Trailer";
    });
    dispatch(
      getTrailerMovie(trailer.lenght > 0 ? trailer[0] : res.data.results[0])
    );
  } catch (error) {
    console.log(error);
  } getMoviesById();
},[])}

export default useMovieById;
