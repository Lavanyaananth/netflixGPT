import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { useState, useRef } from "react";
import { GEMINI_API_KEY } from "../utils/constants";
import { GoogleGenerativeAI } from "@google/generative-ai";
const GptSearchBar = () => {
  const [response, setResponse] = useState("");
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  // Accessing API key
  const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
  const handleGPTSearchButton = async (e) => {
    e.preventDefault();
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const prompt =
      "Act as a movie recommendation system and suggest some movies for the query" +
      searchText.current.value +
      ".only give me names of movies,comma separated like example result given ahead.Example result:Thug life, Ok kanmani, Jailer, Vettaiyan, Darbar";
    const result = await model.generateContent(prompt);
    const gptResults = await result.response.text();
    console.log("Gemini response:", gptResults);
    setResponse(gptResults);
    console.log("Type of gptResults:", typeof gptResults, gptResults);
  };

  return (
    <div className="flex justify-center pt-[10%]">
      <form className="bg-black w-1/2 grid grid-cols-12">
        <input
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[langKey].gptSearchPlaceholder}
          ref={searchText}
        ></input>
        <button
          className="py-2 col-span-3 font-lg m-4 px-4 bg-red-700 text-white rounded-lg"
          onClick={handleGPTSearchButton}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
