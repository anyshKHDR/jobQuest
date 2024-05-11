import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    value: []
}

const postListSlice = createSlice({
    name:"postList",
    initialState,
    reducers:{
    },
    extraReducers:(builder)=>{
        builder
        .addCase(postListAsync.pending, ()=>{
            // console.log("fetching post list pending")
        })
        .addCase(postListAsync.fulfilled, (state, action)=>{
            state.value = action.payload;
            // console.log("Job list fetching success")
            // console.log(state.value);
        })
        .addCase(postListAsync.rejected, ()=>{
            // console.log("Fetching post list failed")
        })

        .addCase(deletePostAsync.pending, ()=>{
            // console.log("post delete pending")
        })
        .addCase(deletePostAsync.fulfilled, (state, action)=>{
            state.value = action.payload;
            // console.log(state.value);
            // console.log("post deleted successfully")
        })
        .addCase(deletePostAsync.rejected, ()=>{
            // console.log("post deletion failed")
        })
    }
})

export const postListAsync = createAsyncThunk(
    "postListSlice/postListAsync",
    async()=>{
        try{
            const response = await axios.get("http://localhost:3001/recruiter/postList")
            // console.log(response)
            return response.data;
        }catch(error){
            console.error(error);
        };
    }
)

export const deletePostAsync = createAsyncThunk(
    "postListSlice/deletePostAsync",
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

export default postListSlice.reducer;