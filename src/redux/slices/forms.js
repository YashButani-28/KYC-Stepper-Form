import { createSlice } from "@reduxjs/toolkit";


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


// export const dataTransmit = () => (dispatch, getState) => {
//     try {
//       // Get the current state from the store
//       const state = getState();
//     //   const kycForms = state.form.kycForms; // Access the kycForms part of the state
  
//       // Log the kycForms data
//       const forms= (state.forms.kycForms);

//    if (forms) {
//       Object.keys(forms).forEach((formKey) => {
//         console.log(`Form ${formKey}:`, forms[formKey]);
//       });

//       console.log("All form data exported successfully!");
//     } else {
//       console.error("No form data found in the state.");
//     }
//     } catch (error) {
//       console.error("Failed to export form data:", error);
//     }
//   };


import axios from 'axios';

export const dataTransmit = () => async (dispatch, getState) => {
  try {
    // Get the current state from the store
    const state = getState();
    const forms = state.forms.kycForms;

    if (forms) {
      // Iterate over each form and send its data to the API
      for (const formKey in forms) {
        if (forms[formKey] !== null) {
          const formData = forms[formKey];
          try {
            // Sending form data to the API endpoint for each form
            const response = await axios.post("http://localhost:3000/users", {
              formId: formKey,
              data: formData
            });
            console.log(`Form ${formKey} data successfully sent:`, response.data);
          } catch (error) {
            console.error(`Failed to send data for ${formKey}:`, error);
          }
        }
      }

      console.log("All form data exported successfully!");
    } else {
      console.error("No form data found in the state.");
    }
  } catch (error) {
    console.error("Failed to export form data:", error);
  }
};

  