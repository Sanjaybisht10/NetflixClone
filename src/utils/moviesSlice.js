import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
    },
    reducers: {
        setMovies: (state, action)=>{
            state.nowPlayingMovies=action.payload;
        },
    },
});
export const{setMovies}=moviesSlice.actions;
export default moviesSlice.reducer;