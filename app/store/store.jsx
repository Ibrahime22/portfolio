// app/store/store.js
import { configureStore } from '@reduxjs/toolkit'
import authReducer from './authSlice'
import testimonialReducer from './testimonialSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    testimonials: testimonialReducer
  }
})

export default store
