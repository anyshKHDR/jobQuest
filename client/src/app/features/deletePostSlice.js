import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    value : []
}

const deletePostSlice = createSlice({
    name:"deletePost",
    initialState,
    reducers:{

    },
    extraReducers: (builder)=>{
        builder
        .addCase(deletePostAsync.pending, ()=>{
            console.log("post delete pending")
        })
        .addCase(deletePostAsync.fulfilled, (state, action)=>{
            state.value = action.payload;
            console.log(state.value);
            console.log("post deleted successfully")
        })
        .addCase(deletePostAsync.rejected, ()=>{
            console.log("post deletion failed")
        })
    }
})

export const deletePostAsync = createAsyncThunk(
    "deletePostSlice/deletePostAsync",
    async ({postId, businessId})=>{
    // console.log("postID: "+postId)
    // console.log("businessID: "+businessId)
        try{
            const response = await axios.delete(`http://localhost:3001/recruiter/deletePost/${postId}/${businessId}`);
            // console.log(response)
            return response.data;
        }catch(error){
            console.error(error)
        }
    }
);

export default deletePostSlice.reducer;
