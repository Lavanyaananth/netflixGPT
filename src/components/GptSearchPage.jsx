import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BG_URL } from "../utils/constants";
const GptSearchPage = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img className="" src={BG_URL} alt="NetflixGPT"></img>
      </div>
      <GptSearchBar></GptSearchBar>
      <GptMovieSuggestions></GptMovieSuggestions>
    </div>
  );
};

export default GptSearchPage;
