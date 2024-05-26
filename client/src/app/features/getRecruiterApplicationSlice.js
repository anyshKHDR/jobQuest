import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    value : ""
}

const getRecruiterApplicatationsSlice = createSlice({
    name:"getRecruiterApplications",
    initialState,
    reducers:{

    },
    extraReducers: (builder)=>{
        builder
        .addCase(getRecruiterApplicationAsync.pending, ()=>{
            console.log("post fetching pending")
        })
        .addCase(getRecruiterApplicationAsync.fulfilled, (state, action)=>{
            // console.log(action.payload);
            state.value = action.payload;
            console.log(state.value);
            console.log("post fetching successfully")
        })
        .addCase(getRecruiterApplicationAsync.rejected, ()=>{
            console.log("post fetching failed")
        })
    }
})

export const getRecruiterApplicationAsync = createAsyncThunk(
    "getRecruiterApplicatations/getRecruiterApplicationAsync",
    async (data)=>{
        console.log(data)
        try{
            const response = await axios.post("http://localhost:3001/recruiter/getApplications", data);
            return response.data;
        }catch(error){
            console.error(error)
        }
    }
);

export default getRecruiterApplicatationsSlice.reducer;