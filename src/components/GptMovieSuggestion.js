import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
const base_url = "https://image.tmdb.org/t/p/original/"
const GptMovieSuggestion = () => {
  const { movieNames } = useSelector((store) => store.gpt)

  // If there is no any movies than return null
  if (!movieNames) return <><h1 className='text-center text-light'>What is on you mind?</h1></>;
  return (
    <div className="flex flex-row justify-evenly align-middle flex-wrap">
      {movieNames.map((data, index) => {
        return (
          <div className="mt-10 " id={`cardSerached_${index}`} style={{ width: "12rem" }} key={index}>

            <img src={`${base_url}${data?.poster_path}`} className="card-img-top" alt="..." onError={(e) => e.target.closest('.card').classList.add('d-none')} />


          </div>

        )
      })}
    </div>
  );
}

export default GptMovieSuggestion;
