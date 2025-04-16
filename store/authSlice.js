import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    users: [],
    currentUser: null,
  },
  reducers: {
    register: (state, action) => {
      state.users.push(action.payload); // Ajout de l'utilisateur dans la liste
    },
    login: (state, action) => {
      const user = state.users.find(
        user => user.email === action.payload.email && user.password === action.payload.password
      );
      if (user) {
        state.currentUser = user;
      }
    },
    logout: (state) => {
      state.currentUser = null;
    },
  },
});

export const { register, login, logout } = authSlice.actions;
export default authSlice.reducer;
