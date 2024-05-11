import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    value:[]
}

const currentPostSlice = createSlice({
    name:"currentPost",
    initialState,
    reducers:{
        setCurrentPost: (state, action) =>{
            state.value = action.payload;
            console.log(state.value)
        }
    },
    extraReducers: (builder) =>{
        builder
        .addCase(getCurrentPostAsync.pending, (state, action)=>{
            state.value = action.payload;
            // console.log(action.payload)
            console.log("fetching selected post pending")
        })
        .addCase(getCurrentPostAsync.fulfilled, (state, action)=>{
            state.value = action.payload;
            console.log("selected post fetched successfully")
        })
        .addCase(getCurrentPostAsync.rejected, ()=>{
            console.log("fetching selected post failed")
        })
    }
})

export const getCurrentPostAsync = createAsyncThunk(
    "currentPostSlice/getCurrentPostAsync",
    async(postId)=>{
        try{
            const response = await axios.get(`http://localhost:3001/recruiter/getSelectedPost/${postId}`)
            console.log(response.data);
            return response.data;
        }catch(e){
            console.error(e)
        }
    }

)

export const {setCurrentPost} = currentPostSlice.actions;
export default currentPostSlice.reducer;