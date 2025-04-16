import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice'; // Assurez-vous que le chemin est correct

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export default store;
