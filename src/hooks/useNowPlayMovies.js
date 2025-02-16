
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useNowPlayMovies = () => {
    const dispatch = useDispatch();

    const getNowPlayingMovies = async () => {
        try {
            const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            const json = await response.json();
            console.log(json.results);
            dispatch(addNowPlayingMovies(json.results));
        } catch (error) {
            console.error('There has been a problem with your fetch operation:', error.message);
        }
    };

    useEffect(() => {
        getNowPlayingMovies();
    }, [dispatch]); // Add dispatch to the dependency array
}

export default useNowPlayMovies;
