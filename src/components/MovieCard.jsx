import React from "react";
import { IMG_CDN_URL } from "../utils/constants";
const MovieCard = ({ poster }) => {
  return (
    <div className="w-48 pr-4">
      <img src={IMG_CDN_URL + poster} alt="image"></img>
    </div>
  );
};

export default MovieCard;
