import { configureStore } from '@reduxjs/toolkit';
import countReducer from './features/CountSeat/CountSeat';

export default configureStore({
  reducer: {
    count: countReducer,
  },
});
