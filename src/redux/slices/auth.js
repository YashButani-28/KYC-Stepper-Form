import { createSlice } from "@reduxjs/toolkit";
// import axios from "axios";s

const initialState = {
  isLoading: false, // loading state
  registrationData: null, // store register information
  user: null, // store user info. like email,pass
  isAuthenticated: false, // check user is login
  error: null, // give an error
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    startLoading(state) {
      state.isLoading = true;
      state.error = null;
    },

    hasError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    registerSuccess(state, action) {
      state.registrationData = action.payload;
      state.isLoading = false;
    },

    login(state, action) {
      (state.isAuthenticated = true), (state.user = action.payload);
      state.isLoading = false;
    },

    logout(state) {
      state.isAuthenticated = false;
      state.user = null;
      state.isLoading = false;
    },

    clearError(state) {
      state.error = null;
    },
  },
});

// Reducer
export default authSlice.reducer;

// Actions
export const {
  login,
  logout,
  registerSuccess,
  hasError,
  startLoading,
  clearError,
} = authSlice.actions;

