import { configureStore } from '@reduxjs/toolkit';
import countReducer from './features/CountSeat/CountSeat';
import movieReducer from './features/movieDetail/MovieDetail';
import profileLinkReducer from './features/ProfileLinks/ProfileLinks';

export default configureStore({
  reducer: {
    count: countReducer,
    movie: movieReducer,
    profileLink: profileLinkReducer,
  },
});
