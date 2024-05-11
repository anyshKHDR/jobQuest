import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value:0,
}

const onRecruiterSlice = createSlice({
    name:"onRecruiter",
    initialState,
    reducers:{
        onRecruiterPage:(state,actions) =>{
            state.value = actions.payload;
            console.log(state.value);
        },
        // notOnRercruiterPage:(state) =>{
        //     state.value = 0;
        // }
    },
});

export const {onRecruiterPage, notOnRercruiterPage} = onRecruiterSlice.actions;
export default onRecruiterSlice.reducer;