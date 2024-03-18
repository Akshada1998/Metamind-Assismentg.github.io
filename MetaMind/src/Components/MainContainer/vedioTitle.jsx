import React from "react";
import { CiCircleInfo } from "react-icons/ci";
import { FaPlay } from "react-icons/fa";

const VedioTitle = ({ title, overview }) => {
  return (
    <div className="w-[vw] absolute text-white pt-[18%] p-12 ">
      <h1 className="text-3xl font-bold "> {title} </h1>
      <p className="w-1/3 mt-3">{overview}</p>
      <div className=" flex mt-5">
        <button className="bg-white flex item-center px-6 py-2 rounded-md  hover:bg-opacity-80 mr-2 text-black">
          <FaPlay size="20px" /> <span className="ml-2">Play </span>
        </button>
        <button className="bg-gray-300 bg-opacity-50 flex item-center px-6 py-2 rounded-md  ml-2 text-black hover:bg-opacity-80">
          <CiCircleInfo size="20px" />
          <span className=" ml-2">Watch More </span>
        </button>
      </div>
    </div>
  );
};

export default VedioTitle;
