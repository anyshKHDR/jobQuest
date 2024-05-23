import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { setLoginStatus } from "./loginSlice";

const initialState = {
    value:{
        id:"",
        email:"",
        password:"",
        name:"",
        exist:0
    }
};

const userSignInSlice = createSlice({
    name:"userSignIn",
    initialState,
    reducers:{
        setUserSignInData : (state, action) =>{
            // console.log(action.payload);
            state.value = {
                ...state.value,
                [action.payload.name]:action.payload.value
            }
        },
        setUserLoginStatus: (state, action) => {
            state.value = { 
                ...state.value,
                ...action.payload,
                exist:action.payload.exist
            }           
            // console.log(state.value);
        },
        userSignOut: (state)=>{
            state.value = initialState.value;
        }

    },
    extraReducers:(builder) => {
        builder
        .addCase(userSignInAsync.pending, ()=>{
            console.log("user signIn pending");
        })
        .addCase(userSignInAsync.fulfilled, (state, action)=>{
            console.log(action.payload);

            const data = action.payload[0]
            state.value = {
                ...state.value,
                email:data.email,
                password:data.password,
                id:data._id,
                name:data.fName,
                exist:1
            }
            sessionStorage.setItem("loginStatus", JSON.stringify(state.value));
            console.log("user signIn success");
        })
        .addCase(userSignInAsync.rejected, ()=>{
            console.log("user signIn failed");
        })
    }
});

export const userSignInAsync = createAsyncThunk(
    "userSignIn/userSignInAsync",
    async (data)=>{
        try{
            // console.log(data);
            const response = await axios.post("http://localhost:3001/user/signIn", data);
            return response.data;
        }catch(error){
            console.log(error);
        };
    }
);


export const { setUserSignInData, userSignOut, setUserLoginStatus } = userSignInSlice.actions;
export default userSignInSlice.reducer;