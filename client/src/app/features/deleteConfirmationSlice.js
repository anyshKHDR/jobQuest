import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value:0
}

const deleteConfirmationSlice = createSlice({
    name: "deleteConfirmation",
    initialState,
    reducers:{
        setDeleteConfirmation: (state, action) =>{
            state.value = action.payload;
        }
    }
})

export const { setDeleteConfirmation } = deleteConfirmationSlice.actions;
export default deleteConfirmationSlice.reducer;