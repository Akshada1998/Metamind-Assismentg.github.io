import axios from "axios";
import { Upcoming_Movies, options } from "../Components/Utils/constant";
import { getUpcomingMovies } from "../Redux/movieSlice";
import { useDispatch } from "react-redux";

const useUpcomingMovies = async () => {
  const dispatch = useDispatch();
  try {
    const res = await axios.get(Upcoming_Movies, options);
    dispatch(getUpcomingMovies(res.data.results));
  } catch (error) {
    console.log(error);
  }
};
export default useUpcomingMovies;
