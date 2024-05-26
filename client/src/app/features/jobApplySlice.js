import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    value:{}
};

const jobApplySlice = createSlice({
    name:"jobApply",
    initialState,
    reducers:{
        
    },
    extraReducers:(builder)=>{
        builder
        .addCase(jobApplyAsync.pending, ()=>{
            console.log("Applying for job pending");
        })
        .addCase(jobApplyAsync.fulfilled, (state, action)=>{
            console.log(action.payload);
            console.log("Applying for job success");
        })
        .addCase(jobApplyAsync.rejected, ()=>{
            console.log("Applying for job failed");
        })
    }
});

export const jobApplyAsync = createAsyncThunk(
   "jobApply/jobApplyAsync",
    async (data) =>{
        const response = await axios.post("http://localhost:3001/user/jobApply", data);
        console.log(response.data);
        return response.data;
    }
)

export const { } = jobApplySlice.actions;
export default jobApplySlice.reducer;