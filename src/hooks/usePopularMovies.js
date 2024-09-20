import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
    const dispatch = useDispatch();

    const getPopularMovies = async () => {
        try {
            const response = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTIONS);
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            const json = await response.json();
            console.log(json.results);
            dispatch(addPopularMovies(json.results));
        } catch (error) {
            console.error('There has been a problem with your fetch operation:', error.message);
        }
    };

    useEffect(() => {
        getPopularMovies();
    }, [dispatch]); // Add dispatch to the dependency array
}

export default usePopularMovies;
