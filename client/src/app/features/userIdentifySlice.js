import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value:""
}

const userIdentifySlice = createSlice({
    name:"onRecruiter",
    initialState,
    reducers:{
        setCurrentUser:(state, actions) => {
            // console.log(actions.payload)
            state.value = actions.payload;
        }
    },
});

export const { onAdmin, onRecruiter, onHome, onUser, setCurrentUser } = userIdentifySlice.actions;
export default userIdentifySlice.reducer;