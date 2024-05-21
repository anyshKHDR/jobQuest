import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    value:[]
}

const fetchJobCategorySlice = createSlice({
    name:"fetchJobCategory",
    initialState,
    reducers:{

    },
    extraReducers:(builder)=>{
        builder
        .addCase(fetchJobCategoryAsync.pending, ()=>{
            console.log("fetching job category pending");
        })
        .addCase(fetchJobCategoryAsync.fulfilled, (state, action)=>{
            state.value = action.payload;
            console.log("fetching job category success");
        })
        .addCase(fetchJobCategoryAsync.rejected, ()=>{
            console.log("fetching job category failed");
        })
    }
});

export const fetchJobCategoryAsync = createAsyncThunk(
    "fetchJobCategorySlice/fetchJobCategoryAsync",
    async ()=>{
        try{
            const response = await axios.get("http://localhost:3001/general/getJobCategory")
            return response.data;
        }catch(error){
            console.log(error)
        }
    }
)

export const { } = fetchJobCategorySlice.actions;
export default fetchJobCategorySlice.reducer;