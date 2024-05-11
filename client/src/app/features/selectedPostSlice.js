import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: {}
}

const selectedPostSlice = createSlice({
    name:"selectedPost",
    initialState,
    reducers:{
        setSelectedPost:(state, action) =>{
            // console.log(action.payload)
            state.value = action.payload;
        }
    }
})

export const { setSelectedPost } = selectedPostSlice.actions;
export default selectedPostSlice.reducer;