import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value:0
}

const confirmJobApplySlice = createSlice({
    name:"confirmJobApply",
    initialState,
    reducers:{
        setConfirmApply:(state,action)=>{
            state.value = 1;
        },
        resetConfirmApply:(state,action)=>{
            state.value = 0;
        }
    }
})

export const { setConfirmApply, resetConfirmApply } = confirmJobApplySlice.actions;
export default confirmJobApplySlice.reducer;