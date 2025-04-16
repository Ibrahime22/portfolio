import { createSlice } from '@reduxjs/toolkit'

const testimonialSlice = createSlice({
  name: 'testimonials',
  initialState: [],
  reducers: {
    addTestimonial: (state, action) => {
      state.push({ id: Date.now(), ...action.payload })
    },
    updateTestimonial: (state, action) => {
      const index = state.findIndex(t => t.id === action.payload.id)
      if (index !== -1) {
        state[index] = action.payload
      }
    }
  },
})

export const { addTestimonial, updateTestimonial } = testimonialSlice.actions
export default testimonialSlice.reducer
