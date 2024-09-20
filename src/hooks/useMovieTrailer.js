import { useEffect } from "react";
import {useDispatch} from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";


const useMovieTrailer=(movieId)=>{
    const dispatch = useDispatch();

    const getMovieVideo = async () => {
        try {
            const data = await fetch("https://api.themoviedb.org/3/movie/" + movieId + "/videos?language=en-US", API_OPTIONS);
            const json = await data.json();
            console.log(json);

            // Check if json.results is defined before filtering
            if (json.results) {
                const filterData = json.results.filter((video) => video.type === "Trailer");
                const trailer = filterData.length ? filterData[0] : json.results[0];
                console.log(trailer);
                dispatch(addTrailerVideo(trailer));
            } else {
                console.log("No results found");
                // Handle case where json.results is undefined or null
            }
        } catch (error) {
            console.error("Error fetching movie video:", error);
            // Handle error
        }
    //     const data = await fetch("https://api.themoviedb.org/3/movie/"+ 
    //     movieId +
    //     "/videos?language=en-US",API_OPTIONS);
    //     const json = await data.json();
    //     console.log(json);
    //     const filterData = json.results.filter((video) => video.type === "Trailer");
    //     const trailer = filterData.length ? filterData[0] : json.results[0];
    //     console.log(trailer);
    //     dispatch(addTrailerVideo(trailer));


     }
    useEffect(() => {
        getMovieVideo();
    }, [])
}

export default useMovieTrailer;