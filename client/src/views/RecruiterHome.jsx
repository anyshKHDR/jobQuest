import React from "react";
import NewPostButton from "../components/NewPostButton";
import PostList from "../components/PostList";
import Post from "./Post";
import RecruiterPostTitle from "../components/RecruiterPostTitle";
import { Outlet } from "react-router-dom";
import RecruiterApplicationViewButton from "../components/RecruiterApplicationViewButton";

const RecruiteDashboard = ()=>{
    return(
        <>
            <div className="rhbtns">
                <NewPostButton />
                <RecruiterApplicationViewButton />
            </div>
            <RecruiterPostTitle />
            <Post />
            {/* <Outlet /> */}
        </>
    )
}

export default RecruiteDashboard;