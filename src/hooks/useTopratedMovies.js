import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addTopratedMovies } from "../utils/moviesSlice";

const useTopratedMovies = () => {
    const dispatch = useDispatch();

    const getTopratedMovies = async () => {
        try {
            const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', API_OPTIONS);
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            const json = await response.json();
            console.log(json.results);
            dispatch(addTopratedMovies(json.results));
        } catch (error) {
            console.error('There has been a problem with your fetch operation:', error.message);
        }
    };

    useEffect(() => {
        getTopratedMovies();
    }, [dispatch]); // Add dispatch to the dependency array
}

export default useTopratedMovies;
