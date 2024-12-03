import { createSlice } from "@reduxjs/toolkit";
import axios from "../../utils/axios"

const initialState = {
  isLoading: false, // loading state
  registrationData: [], // store register information
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
      state.registrationData.push(action.payload); 
      console.log("New user added:", action.payload); // Log the newly added user
      // console.log("Updated registrationData:", registrationData); 
      state.isLoading = false;
    },

    login(state, action) {
      state.isAuthenticated = true, 
      state.user = action.payload;
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



// export const doesUserExistWithEmailAndRole = (state, email, role) => {
//   const registrationData = state.auth.registrationData;
//   return registrationData && registrationData.email === email && registrationData.role === role;
// };


// export const registerUser = (userData) => async (dispatch,getState) => {
//   dispatch(startLoading());
//   try {
//     const response = await axios.post("http://localhost:3000/users", userData);
//     dispatch(registerSuccess(response.data));
//     console.log("goes to json");
    
//   } catch (error) {
//     dispatch(hasError("Failed to register user. Please try again."));
//   }
// };

export const registerUser=(userData)=>async(dispatch,getState)=>{
  dispatch(startLoading());
  try {
    console.log("authSice",userData);
    
    const response=await axios.post("/users",userData);
  
    dispatch(registerSuccess(response.data));
    console.log("User successfully registered:", response.data);

    const currentState=getState();
    console.log("currentRegiserData:", currentState);

  } catch (error) {
    dispatch(hasError("Failed to register user. Please try again!"))
    console.log("Registration error:", error);
  }

}
