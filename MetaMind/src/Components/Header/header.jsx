import React from "react";
import { IoIosArrowDropdown } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { API_END_POINT } from "../Utils/constant";
import axios from "axios";
import { setUser } from "../../Redux/userSlice";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function Header() {
  const user = useSelector((store) => store.app.user);
  // console.log(user);
  const toggle = useSelector((store) => store.movie.toggle);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      const res = await axios.get(`${API_END_POINT}/logout`);
      if (res.data.success) {
        toast.success(res.data.message);
      }
      dispatch(setUser(null));
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const toggleHandler = () => {
    dispatch(setToggle());
  };

  return (
    <>
      <div className="absolute z-10 flex w-[100%] item center justify-between bg-gradient-to-b from-black h-[56px] px-6">
        <img src="./src/assets/images/Logonetflix.png" alt="logo" />

        {user && (
          <div className="flex item-center ">
            <IoIosArrowDropdown
              className="mr-1 mt-6 color="
              color="white"
              size="19"
            />
            <div className="mt-5 h-2 text-lg font-bold text-white">
              <h1>{user.fullName}</h1>
            </div>

            <div className="ml-4 mt-3 h-9 ">
              <button
                className="bg-red-800 mr-3 text-white  px-4 py-2 ml-2"
                onClick={toggleHandler}
              >
                {toggle ? "Home" : "Search Movies"}
              </button>

              <button
                onClick={logoutHandler}
                className="bg-red-800 text-white  px-4 py-2"
              >
                {" "}
                Logout{" "}
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
