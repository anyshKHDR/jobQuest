import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./features/loginSlice.js";
import recruiterLoginReducer from "./features/RecruiterLoginSlice.js";
import userIdentifyReducer from "./features/userIdentifySlice.js";
import postRecruiterRegisterReducer from "./features/postRecruiterRegisterSlice.js";
import confirmPasswordReducer from "./features/confirmPasswordSlice.js";
import newPostReducer from "./features/newPostSlice.js";
import postListReducer from "./features/postListSlice.js";
import businessDetailReducer from "./features/businessDetailsSlice.js";
import currentPostReducer from "./features/currentPostSlice.js";
import selectedPostReducer from "./features/selectedPostSlice.js";
import deletePostReducer from "./features/deletePostSlice.js";
import deleteConfirmationReducer from "./features/deleteConfirmationSlice.js";
import jobCategoryReducer from "./features/jobCategorySlice.js";
import fetchJobCategoryReducer from "./features/fetchJobCategorySlice.js";
import userRegisterReducer from "./features/userRegisterSlice.js";
import userSignInReducer from "./features/userSignInSlice.js";
import userFeedReducer from "./features/userFeedSlice.js";
import jobApplyReducer from "./features/jobApplySlice.js";
import confirmJobApplyReducer from "./features/confirmJobApplySlice.js";
import getRecruiterApplicationRecucer from "./features/getRecruiterApplicationSlice.js";


export const store = configureStore({
    reducer:{
        login:loginReducer,
        recruiterLoginState: recruiterLoginReducer,
        userIdentify:userIdentifyReducer,
        recruiterRegData: postRecruiterRegisterReducer,
        confirmPassword: confirmPasswordReducer,
        newPost: newPostReducer,
        postList: postListReducer,
        businessDetail: businessDetailReducer,
        currentPost: currentPostReducer,
        selectedPost: selectedPostReducer,
        deletePost: deletePostReducer,
        deleteConfirmation: deleteConfirmationReducer,
        jobCategory:jobCategoryReducer,
        fetchJobCategory: fetchJobCategoryReducer,
        userRegister: userRegisterReducer,
        userSignIn: userSignInReducer,
        userFeed: userFeedReducer,
        jobApply: jobApplyReducer,
        confirmJobApply:confirmJobApplyReducer,
        getRecruiterApplications: getRecruiterApplicationRecucer,

    }
});