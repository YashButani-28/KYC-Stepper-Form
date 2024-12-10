import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios';


const initialState = {
  kycForms: {
    form1: null,
    form2: null,
    form3: null,
    form4: null,
    currentForm: null, 
    submitForm: null, // Tracks the current form dynamically
    // Tracks the current form dynamically
  },
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    // Sets data for the specified form dynamically
    setFormData(state, action) {
        const { formId, data } = action.payload; 
        if (formId !== undefined) {
          // Only update the specific form, do not modify others
          if (!state.kycForms[`form${formId}`]) {
            state.kycForms[`form${formId}`] = data;
          } else {
            // Optionally, you could merge with existing data if needed
            state.kycForms[`form${formId}`] = { ...state.kycForms[`form${formId}`], ...data };
          }
          console.log(`Data Stored in Form ${formId}:`, state.kycForms[`form${formId}`]);
        } else {
          console.warn("Form ID is not provided!");
        }
    },
    // Updates the current form
    setCurrentForm(state, action) {
      state.kycForms.currentForm = action.payload;
    },

    setSubmitForm(state, action) {
      state.kycForms.submitForm = action.payload;
    },
    // Clears all form data
    clearFormData(state) {
      state.kycForms.form1 = null;
      state.kycForms.form2 = null;
      state.kycForms.form3 = null;
      state.kycForms.form4 = null;
      state.kycForms.currentForm = null;
      state.kycForms.submitForm = null;

    },
  },
});

export const { setFormData, setCurrentForm, clearFormData,setSubmitForm } = formSlice.actions;

export default formSlice.reducer;

// Thunk to store data in the current form
export const saveFormData = ({ formId, data }) => async (dispatch, getState) => {
    try {
        if (formId) {
          dispatch(setFormData({ formId, data }));
          dispatch(setCurrentForm(formId)); // Pass formId and data to the reducer
           // Pass formId and data to the reducer
        } else {
          console.error("No formId provided to save form data!");
        }
      } catch (error) {
        console.error("Failed to save form data:", error);
      }
};


export const dataTransmit = (userId) => async (dispatch, getState) => {
  try {
    // Get the current state from the store
    const state = getState();
    const forms = state.forms.kycForms;

    if (forms) {
      // Fetch users from the server to find the matching userId
      const response = await axios.get("http://localhost:3000/users");
      const users = response.data;

      // Find the user object with the matching userId
      const user = users.find((user) => (user.id) == (userId));



      if (user) {
        // Create a copy of the user object, preserving user registration details
        const updatedUser = {
          ...user,
          kycForms: {
            ...user.kycForms,
            ...forms, // Merge new form data into existing kycForms
          },
        };

        // Update the kycForms for the matching user
        const updateResponse = await axios.put(
          `http://localhost:3000/users/${userId}`,
          updatedUser
        );
        dispatch(setSubmitForm(true)); // Pass formId and data to the reducer

        console.log("User updated successfully:", updateResponse.data);
        console.log("All form data exported successfully!");
      } else {
        console.error(`User with ID ${userId} not found.`);
      }
    } else {
      console.error("No form data found in the state.");
    }
  } catch (error) {
    console.error("Failed to export form data:", error);
  }
};



export const clearAllFormData = (userId) => async (dispatch) => {
  try {
    // Clear Redux state
    dispatch(clearFormData());
    console.log("Cleared form data from Redux state.");

    // Fetch the user data
    const response = await axios.get(`http://localhost:3000/users?id=${userId}`);
    const user = response.data[0]; // Access the first user object

    if (user) {
      // Remove the kycForms field locally
      delete user.kycForms;
      console.log("Updated User (kycForms removed):", user);

      // Update the user object on the server
      await axios.put(`http://localhost:3000/users/${userId}`, user);
      console.log("kycForms deleted successfully on server.");
      // window.location.reload();
    } else {
      console.error("User not found.");
    }
  } catch (error) {
    console.error("Failed to clear form data:", error);
  }
};




export const editKycForm = () => async (dispatch) => {
  try {
    // Dispatch action to set the submit form state to null
    dispatch(setSubmitForm(null));
    console.log("Submit form reset to null.");
  } catch (error) {
    console.error("Failed to reset submit form:", error);
  }
};