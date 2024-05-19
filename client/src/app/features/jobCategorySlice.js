import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { act } from "react";

const initialState = {
    value:{
        category:"",
        temp:"",
        jobs:[],
        jobsLength:"",
    }
};

const jobCategorySlice = createSlice({
    name:"jobCategory",
    initialState,
    reducers:{
        setCategory:(state, action)=>{
            console.log(action.payload);
            state.value.category = action.payload;
        },
        setJobs:(state, action) =>{
            //"push" method returns lenght of the array
            state.value.jobsLength = state.value.jobs.push(state.value.temp);
            state.value.temp = initialState.value.temp;
        },
        setTemp:(state, action) =>{
            // console.log(action.payload)
            state.value.temp = action.payload;
        },
        removeJob:(state, action) =>{
            const index = action.payload;
            console.log(state.value.jobsLength);
            state.value.jobs.splice(index, 1);
            state.value.jobsLength = state.value.jobs.length;
            console.log(state.value.jobsLength);
        }
        
    },
    extraReducers:(builder)=>{

    }
});

export const jobCategoryAsync = createAsyncThunk(
    "jobCategorySlice/jobCategoryAsync",
    async (data)=>{
        try{
            // console.log(data);
            const response = await axios.post("http://localhost:3001/admin/schrodinger/newJobCategory", data)
        }catch(error){
            console.log(error)
        };
    }
);

export const { setCategory, setJobs, setTemp, removeJob } = jobCategorySlice.actions;
export default jobCategorySlice.reducer;
