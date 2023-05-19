import { configureStore } from '@reduxjs/toolkit';
import countReducer from './features/CountSeat/CountSeat';
import movieReducer from './features/movieDetail/MovieDetail';

export default configureStore({
  reducer: {
    count: countReducer,
    movie: movieReducer,
  },
});
