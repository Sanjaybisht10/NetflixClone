import React from 'react';

const VideoTitle = ({title,overview}) => {
  return (
    <div className=" w-screen aspect-video pt-36 px-12 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-5xl font-bold ">{title}</h1>
      <p className="w-1/3 text-lg py-6">{overview}</p>
      <div className="py-4">
        <button className=" bg-opacity-30 p-2 text-xl font-bold px-12 text-white rounded-lg hover:bg-opacity-50 bg-white">Play</button>
        <button className="bg-gray-500 bg-opacity-30 p-2 font-bold px-12 m-2 text-white rounded-lg text-xl">More Info</button>
      </div>
    </div>
  );
}

export default VideoTitle;
