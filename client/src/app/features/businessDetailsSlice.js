import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    value:{}
}

const businessDetailSlice = createSlice({
    name:"businessDetail",
    initialState,
    reducers:{},

    extraReducers:(builder)=>{
        builder
        .addCase(getBusinessDetailAsync.pending,()=>{
            "getting business detail pending"
        })
        .addCase(getBusinessDetailAsync.fulfilled, (state, action)=>{
            // console.log(action.payload.data)
            state.value= action.payload;
            "business detail fetched successfully"
        })
        .addCase(getBusinessDetailAsync.rejected, ()=>{
            "fetching business details failed"
        })
    }
})

export const getBusinessDetailAsync = createAsyncThunk(
    "businessDetailSlice/getBusinessDetailAsync",
    async(businessId)=>{
        // const params = { id:businessId}
        // console.log(businessId)
        try{
            const response = await axios.get("http://localhost:3001/recruiter/getBusinessDetail", {params:{
                id: businessId
            }});
            // console.log(response.data)
            return response.data;
        }catch(error){
            console.error(error.message)
        }
    }
)

export default businessDetailSlice.reducer;