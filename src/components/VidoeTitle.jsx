import React from "react";

const VidoeTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="text-lg py-6 w-1/2"> {overview}</p>
      <div className="">
        <button className="bg-white p-4 px-12 text-xl text-black rounded-lg hover:bg-opacity-80">
          ► Play
        </button>
        <button className="bg-gray-500 mx-2 p-4 px-12 text-xl text-white rounded-lg hover:bg-opacity-80">
          ⓘ More info
        </button>
      </div>
    </div>
  );
};

export default VidoeTitle;
