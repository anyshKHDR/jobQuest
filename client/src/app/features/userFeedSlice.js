import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    value:[]
};

const userFeedSlice = createSlice({
    name:"userFeed",
    initialState,
    reducers:{
        resetUserFeed:(state)=>{
            state.value = initialState.value;
        }

    },
    extraReducers:(builder) =>{
        builder
        .addCase(userFeedAsync.pending, ()=>{
            console.log("fetching feed data pending");
        })
        .addCase(userFeedAsync.fulfilled, (state, action)=>{
            state.value = action.payload;
            console.log(action.payload);
            console.log("fetching feed data success");
        })
        .addCase(userFeedAsync.rejected, ()=>{
            console.log("fetching feed data failed");
        })
    }
});

export const userFeedAsync = createAsyncThunk(
    "userFeedSlice/userFeedAsync",
    async (data)=>{
        try{
            const response = await axios.get(`http://localhost:3001/user/feed/${data}`);
            return response.data;
        }catch(err){
            console.log(err);
        };
    }
)

export const { resetUserFeed } = userFeedSlice.actions;
export default userFeedSlice.reducer;