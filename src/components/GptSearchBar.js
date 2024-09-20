import React, { useRef } from "react";
import language from "../utils/languageConst";
import { useDispatch, useSelector } from "react-redux";

import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langkey = useSelector((store) => store.config.lang);
  const addSearchText = useRef("");

  const searchMovieTMBDData = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
      addSearchText.current.value + "&include_adult=false&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json.results);
    dispatch(addGptMovieResult({ movieNames: json.results, movieResults: null }));
    return json.results;
  };

  return (
    <>
      <div className="flex flex-col gap-3 max-w-md mx-auto ">
        <div className="flex gap-3 mt-44">
          <input
            type="text"
            className="form-input w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
            placeholder={language[langkey].gptPlaceholder}
            aria-label="Search movies"
            ref={addSearchText}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                searchMovieTMBDData();
              }
            }}
          />
          <button
            className="btn bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
            type="button"
            onClick={searchMovieTMBDData}
          >
            {language[langkey].search}
          </button>
        </div>
      </div>
    </>
  );
};

export default GptSearchBar;
