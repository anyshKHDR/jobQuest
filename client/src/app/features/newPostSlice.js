import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    value:{
        businessName:"",
        businessId:"",
        businessAddress:"",
        jobTitle : "",
        description : "",
        qualification : "",
        skills : "",
        experience : "",
        location : "",
        salary : "",
        contractType : "",
        deadline : "",
        phone : "",
        email : "",
        postData:""
    }
}

const newPostSlice = createSlice({
    name:"newPost",
    initialState,
    reducers:{
        updateNewPostState: (state, action) =>{
            state.value = {
                ...state.value,
                [action.payload.name]: action.payload.value

            }
        },
        resetNewPostData: (state, action) =>{
            state.value = {}
        }
    },
    extraReducers: (builder)=>{
        builder
        .addCase(newPostAsync.pending, ()=>{
            console.log("newPost pending")
        })
        .addCase(newPostAsync.fulfilled, ()=>{
            console.log("newPost success")
        })
        .addCase(newPostAsync.rejected, ()=>{
            console.log("newPost failed")
        })
    }
});

export const newPostAsync = createAsyncThunk(
    "newPostSlice/newPostAsync",
    async(postData) =>{
        try{
            console.log(postData);
            const response = await axios.post("http://localhost:3001/recruiter/newPost", postData)
            console.log(response);
        }catch(error){
            console.error(error);
        }
    }
)

export const { updateNewPostState,resetNewPostData } = newPostSlice.actions;
export default newPostSlice.reducer;
