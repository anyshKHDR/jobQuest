import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    value: {
        id:"",
        email:"",
        password:"",
        businessName:"",
        exist:0
    }
}

const loginSlice = createSlice ({
    name:"login",
    initialState,
    reducers: {
        handleSignInData:(state,action) =>{
            state.value = {
                ...state.value,
                [action.payload.name]: action.payload.value
            }
        },
        signInReset:(state) => {
            // state.value.exist = 0;
            sessionStorage.removeItem("loginStatus");
            state.value = {
                ...initialState.value
            };
        },
        setLoginStatus: (state, action) => {
            state.value = {
                ...state.value,
                ...action.payload,
                exist: action.payload.exist
            }
        }   
    },
    extraReducers: (builder)=>{
        builder
        .addCase(loginAsync.pending, ()=>{
            console.log("login pending");;;
        })
        .addCase(loginAsync.fulfilled, (state, action) =>{
            const data = action.payload;
            const [{_id:id, email, password, businessName}] = data;
            // console.log(id);
            if(state.value.password == password){
                state.value = {
                    ...state.value,
                    businessName,
                    email,
                    id,
                    exist:1
                };
                sessionStorage.setItem("loginStatus", JSON.stringify(state.value));
                console.log(state.value);
                console.log("login success");
            }else{
                state.value.exist = 0;
                console.log("login failed")
            };
        })
        .addCase(loginAsync.rejected, ()=>{
            console.log("no data found");
        })
    }
});

export const loginAsync = createAsyncThunk(
    "loginSlice/loginAsync",
    async (loginInput)=>{
        console.log(loginInput);
        try{
            const response = await axios.post("http://localhost:3001/recruiter/login", loginInput);
            const data = response.data;
            return data;
        }catch(error){
            console.log(error.message);
        }
    }
);

export const { handleSignInData, signInReset, setLoginStatus} = loginSlice.actions;
export default loginSlice.reducer;