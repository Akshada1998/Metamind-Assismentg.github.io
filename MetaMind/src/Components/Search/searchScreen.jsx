import React from "react";

const SearchScreen = () => {
  return (
    <div className="flex pt-[10%] w-[100%] justify-center">
      <form className="w-[50%] ">
        <div className="flex justify-between shadow-md border-2 border-gray-200 p-2 rounded-lg w-[100%]">
          <input
            type="text"
            placeholder="Search Movies..."
            className="w-full outline-none rounded-md text-lg"
          />
          <button className="bg-re-800 text-white rounded-md px-4 py-2">
            {" "}
            Search{" "}
          </button>{" "}
        </div>
      </form>
    </div>
  );
};

export default SearchScreen;
