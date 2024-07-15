// store.js
import { configureStore } from '@reduxjs/toolkit';
import UserReducer from './UserSlice';

const store = configureStore({
  reducer: {
    user: UserReducer,
    // You can add other reducers here
  },
});

export default store;
