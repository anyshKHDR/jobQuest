import React from "react";
import NewPostButton from "../components/NewPostButton";
import PostList from "../components/PostList";
import Post from "./Post";
import RecruiterPostTitle from "../components/RecruiterPostTitle";
import { Outlet } from "react-router-dom";

const RecruiteHome = ()=>{
    return(
        <>
            <NewPostButton />
            <RecruiterPostTitle />
            <Post />
            {/* <Outlet /> */}
        </>
    )
}

export default RecruiteHome;