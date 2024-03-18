import { useDispatch } from "react-redux";
import { Watch_List_Movies, options } from "../Components/Utils/constant";
import { getWatchListMovies } from "../Redux/movieSlice";
import axios from "axios";

const useWatchList = async () => {
  const dispatch = useDispatch();
  try {
    const res = await axios.get(Watch_List_Movies, options);
    dispatch(getWatchListMovies(res.data.result));
  } catch (error) {
    console.log(error);
  }
};
export default useWatchList;
