import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    value:{}
};

const userRegisterSlice = createSlice({
    name:"userRegister",
    initialState,
    reducers:{
        setUserRegisterData:(state, action)=>{
            const {name, value, checked } = action.payload;
            // console.log(name, value, checked)

            if( name == "jobCategory"){
                if(!state.value.jobCategory){
                    state.value.jobCategory=[];
                }

                if(checked == true){
                    state.value.jobCategory.push(value)
                }else{
                    const index = state.value.jobCategory.indexOf(value);
                    console.log(index);
                    if(index != -1){
                        state.value.jobCategory.splice(index, 1)
                    }
                }
            }else{
                state.value = {
                    ...state.value,
                    [action.payload.name]:action.payload.value,
                }
            }
        }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(userRegisterAsync.pending, ()=>{
            "user register pending"
        })
        .addCase(userRegisterAsync.fulfilled, (state, action)=>{
            "user registered successfully"
            state.value = initialState.value;
        })
        .addCase(userRegisterAsync.rejected, ()=>{
            "user register failed"
        })
    }
});

export const userRegisterAsync = createAsyncThunk(
    "userRegisterSlice/userRegisterAsync",
    async (data)=>{
        try{
            const response = await axios.post("http://localhost:3001/user/register", data);
        }catch(error){
            console.log(error)
        }
    }
)


export const { setUserRegisterData } = userRegisterSlice.actions;
export default userRegisterSlice.reducer;