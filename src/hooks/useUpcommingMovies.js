import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addUpcommingMovies } from "../utils/moviesSlice"; // Ensure the correct spelling of "Upcoming"

const useUpcommingMovies = () => {
    const dispatch = useDispatch();

    const getUpcommingMovies = async () => {
        try {
            const response = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', API_OPTIONS);
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            const json = await response.json();
            console.log(json.results);
            dispatch(addUpcommingMovies(json.results));
        } catch (error) {
            console.error('There has been a problem with your fetch operation:', error.message);
        }
    };

    useEffect(() => {
        getUpcommingMovies();
    }, [dispatch]); // Add dispatch to the dependency array
}

export default useUpcommingMovies;
