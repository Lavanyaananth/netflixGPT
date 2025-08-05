import React from "react";

const GptSearchBar = () => {
  return (
    <div className="flex justify-center pt-[10%]">
      <form className="bg-black w-1/2 grid grid-cols-12">
        <input
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder="What would you watch today?"
        ></input>
        <button className="py-2 col-span-3 font-lg m-4 px-4 bg-red-700 text-white rounded-lg">
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
