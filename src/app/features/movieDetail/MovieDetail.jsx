import { createSlice } from '@reduxjs/toolkit';

const movieSlice = createSlice({
    name: 'movie',
    initialState: {
        movieName: '',
        movieImg: '',
        movieVideo: '',
    },
    reducers: {
        setMovieInfo: (state, action) => {
            state.movieName = action.payload.movieName;
            state.movieImg = action.payload.movieImg;
            state.movieVideo = action.payload.movieVideo;
        },
    },
});

export const { setMovieInfo } = movieSlice.actions;
export default movieSlice.reducer;
