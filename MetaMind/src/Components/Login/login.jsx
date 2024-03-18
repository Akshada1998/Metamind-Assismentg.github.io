import React, { useState } from "react";
import Header from "../Header/header.jsx";
import axios from "axios";
import toast from "react-hot-toast";
import { API_END_POINT } from "../Utils/constant.js";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLoading, setUser } from "../../Redux/userSlice.js";

export const Login = () => {
  const [islogin, setIslogin] = useState(true);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isLoading = useSelector((store) => store.app.isLoading);

  const loginHandler = () => {
    setIslogin(!islogin);
  };

  const getInputData = async (e) => {
    e.preventDefault();
    dispatch(setLoading(true));
    if (islogin) {
      //login
      const user = { email, password };
      // console.log("Login request data:", user);
      try {
        const res = await axios.post(`${API_END_POINT}/login`, user, {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true, // need to be rue both side cors
        });
        // console.log("Login response:", res);
        if (res.data.success) {
          toast.success(res.data.message);
        }
        dispatch(setUser(res.data.user));
        navigate("/homePage");
      } catch (error) {
        toast.error(error.response.data.message);
        // console.log(error);
      } finally {
        dispatch(setLoading(false));
      }
    } else {
      //regester
      dispatch(setLoading(true));

      const user = { fullName, email, password };
      console.log(user);

      try {
        const res = await axios.post(`${API_END_POINT}/register`, user, {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        });
        // console.log("Login response:", res);
        if (res.data.success) {
          toast.success(res.data.message);
        }
        setIslogin(true);
      } catch (error) {
        toast.error(error.response.data.message);
        // console.log(error);
      } finally {
        dispatch(setLoading(false));
      }
    }
    setEmail("");
    setpassword("");
    setFullName("");

    // if (islogin)
  };
  return (
    <>
      <Header />
      <div className="absolute">
        {" "}
        <img
          className="w-[100vw] h-[100vh]  bg-cover"
          src="https://techstory.in/wp-content/uploads/2021/06/netflix-1024x576.png"
        />
      </div>
      <div className=" bg-black absolute w-[40vw] h-[70vh] text-gray mt-[24vh] ml-[30%] opacity-80 ">
        <form onSubmit={getInputData}>
          <h1 className="text-3xl font-bold  ml-40 mb-3 mt-7 text-white">
            {islogin ? "Login" : "SignIn"}
          </h1>
          {!islogin && (
            <input
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="  outline-none font-2xl rounded-sm ml-[20%] h-[7vh] w-[25vw] m-2 bg-gray-800 text-white my-2"
              type="text"
              placeholder=" Enter your Full Name"
            />
          )}

          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className=" flex flex-col outline-none font-2xl rounded-sm ml-[20%] h-[7vh] w-[25vw] m-2 bg-gray-800 text-white my-2"
            type="text"
            placeholder=" Enter your Email Id"
          />
          <input
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            className="  outline-none font-2xl rounded-sm ml-[20%]  m-3 h-[7vh] w-[25vw] bg-gray-800 text-white my-2"
            type="password"
            placeholder=" Enter your Password"
          />
          <button className="bg-red-800  outline-none font-2xl text-white font-bold ml-[20%] h-[7vh] w-[25vw] m-3 ">
            {` ${isLoading ? "Loading..." : islogin ? "Login" : "SignIn"}`}
          </button>
          <p className="text-white font-bold ml-[20%] h-[7vh] w-[25vw] mt-2">
            {islogin ? " New to Netflix?" : "Already have an account"}
            <span
              className=" text-blue-800 font-3xl font-bold"
              onClick={loginHandler}
            >
              {" "}
              {islogin ? "Signup" : " Login"}
            </span>
          </p>
        </form>
      </div>
    </>
  );
};
