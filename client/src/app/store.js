import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./features/loginSlice.js";
import recruiterLoginReducer from "./features/RecruiterLoginSlice.js";
import onRecruiterReducer from "./features/onRecruiterSlice.js";
import postRecruiterRegisterReducer from "./features/postRecruiterRegisterSlice.js";
import confirmPasswordReducer from "./features/confirmPasswordSlice.js";
import newPostReducer from "./features/newPostSlice.js";
import postListReducer from "./features/postListSlice.js";
import businessDetailReducer from "./features/businessDetailsSlice.js";
import currentPostReducer from "./features/currentPostSlice.js";
import selectedPostReducer from "./features/selectedPostSlice.js";
import deletePostReducer from "./features/deletePostSlice.js";
import deleteConfirmationReducer from "./features/deleteConfirmationSlice.js";

export const store = configureStore({
    reducer:{
        login:loginReducer,
        recruiterLoginState: recruiterLoginReducer,
        onRecruiter:onRecruiterReducer,
        recruiterRegData: postRecruiterRegisterReducer,
        confirmPassword: confirmPasswordReducer,
        newPost: newPostReducer,
        postList: postListReducer,
        businessDetail: businessDetailReducer,
        currentPost: currentPostReducer,
        selectedPost: selectedPostReducer,
        deletePost: deletePostReducer,
        deleteConfirmation: deleteConfirmationReducer,
    }
});