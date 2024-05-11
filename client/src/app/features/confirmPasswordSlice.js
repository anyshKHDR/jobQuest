import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    value:null
}

const confirmPasswordSlice = createSlice({
    name: "confirmPassword",
    initialState,
    reducers:{
        same:(state)=>{
            state.value = 1;
        },
        notSame:(state)=>{
            state.value = 0
        }
    }
})

export const { same, notSame } = confirmPasswordSlice.actions;
export default confirmPasswordSlice.reducer;