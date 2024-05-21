import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    value:{
        email:"",
        phone:"",
        password:"",
        confirmPassword:"",
        businessName:"",
        industry:"",
        address:"",
        website:"",
        logo:""
    }
};

const postRecruiterRegisterSlice = createSlice({
    name:"postRecruiterRegister",
    initialState,
    reducers:{
        updateRecruiterRegData:(state,action)=>{
            console.log(action.payload)
            state.value = {
                ...state.value,
                [action.payload.name] : action.payload.value
            }
        },
        handleLogo:(state, action) =>{
            state.value = {
                ...state.value,
                logo:action.payload
            }
        }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(postRecruiterRegisterAsync.pending, ()=>{
            console.log("Registration pending")
        })
        .addCase(postRecruiterRegisterAsync.fulfilled, ()=>{
            console.log("Registration sucess")
        })
        .addCase(postRecruiterRegisterAsync.rejected, ()=>{
            console.log("Registration failed")
        })
    }
});

// ***post recruiter register
export const postRecruiterRegisterAsync = createAsyncThunk(
    "postRecruiterRegister/postRecruiterRegisterAsync",
    async(recruiterRegData) =>{
        try{
            const response = await axios.post("http://localhost:3001/recruiter/register", recruiterRegData );
            console.log(response);
        }catch(error){
            console.error(error);
        }
    }
);

export const { updateRecruiterRegData, handleLogo } = postRecruiterRegisterSlice.actions;
export default postRecruiterRegisterSlice.reducer;
