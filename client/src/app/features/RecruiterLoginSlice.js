import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0,
}

const recruiterLoginSlice = createSlice({
    name:"recruiterLoginState", 
    initialState,
    reducers:{

    },
});

export default recruiterLoginSlice.reducer;