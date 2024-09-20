import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        trailerVideo:null,
    },
    reducers: {
        addNowPlayingMovies: (state, action)=>{
            state.nowPlayingMovies=action.payload;
        },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload;
        },
        addTopratedMovies: (state, action) => {
            state.topRatedMovies = action.payload;
        },
        addUpcommingMovies: (state, action) => {
            state.upcommingMovies = action.payload;
        },
        addTrailerVideo:(state,action)=>{
            state.trailerVideo=action.payload;
        },
    },
});
export const{addNowPlayingMovies,addTrailerVideo,addPopularMovies,addUpcommingMovies,addTopratedMovies}=moviesSlice.actions;
export default moviesSlice.reducer;