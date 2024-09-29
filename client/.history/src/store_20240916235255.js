// store.js
import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../src/'; // Replace this with the actual path to your reducer

export const store = configureStore({
  reducer: {
    user: userReducer, // Ensure your reducers are listed here
  },
});
