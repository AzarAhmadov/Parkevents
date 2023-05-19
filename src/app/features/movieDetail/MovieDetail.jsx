import { createSlice } from '@reduxjs/toolkit';

const movieSlice = createSlice({
    name: 'movie',
    initialState: {
        movieName: '',
        movieImg: '',
    },
    reducers: {
        setMovieInfo: (state, action) => {
            state.movieName = action.payload.movieName;
            state.movieImg = action.payload.movieImg;
        },
    },
});

export const { setMovieInfo } = movieSlice.actions;
export default movieSlice.reducer;
