import { createSlice, current } from "@reduxjs/toolkit";
import reducer from "./auth";
import { act } from "react";


const initialState={
    form1:null,
    form2:null,
    form3:null,
    form4:null,
    currentForm:1,
};

const formSlice=createSlice({
    name:"form",
    initialState,
    reducers:{
        setFormData(state,action){
            const {formId,data}=action.payload;
            state[`form${formId}`]=data;
        },
        setCurrentform(state,action){
            state.currentForm=action.payload;
        },
        clearFormData(state){
            state.form1=null;
            state.form2=null;
            state,form3=null;
            state.form4=null;
        }
    }
})
export const {setFormData,setCurrentform,clearFormData}=formSlice.actions;

export default formSlice.reducer;