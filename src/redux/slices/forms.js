import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios';


const initialState = {
  kycForms: {
    form1: null,
    form2: null,
    form3: null,
    form4: null,
    currentForm: null, // Tracks the current form dynamically
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
    // Clears all form data
    clearFormData(state) {
      state.kycForms.form1 = null;
      state.kycForms.form2 = null;
      state.kycForms.form3 = null;
      state.kycForms.form4 = null;
      state.kycForms.currentForm = null;
    },
  },
});

export const { setFormData, setCurrentForm, clearFormData } = formSlice.actions;

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
// console.log(typeof user.id)
// console.log(typeof userId)


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
